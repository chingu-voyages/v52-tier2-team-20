"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { appointmentRequests } from '@/src/asset/mockData/appointmentRequests'

import ExportCSV from '@/src/features/exportFiles/components/ExportCSV'
import ExportPDF from '@/src/features/exportFiles/components/ExportPDF'

import { filterRequestsByStatus } from '@/src/utils/filterRequestsByStatus'
import DashboardCounterButtons from '@/src/components/DashboardCounterButtons'

type Request = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  latitude: string;
  longitude: string;
  preferred_date: string;
  preferred_timeslot: string;
  request_status: string;
}

export default function DashboardPage() {
  const router = useRouter()
  const [status, setStatus] = useState<'Unscheduled Requests' | 'Scheduled Requests' | 'Completed Requests'>('Unscheduled Requests')
  const [unscheduledRequestsCount, setUnscheduledRequestsCount] = useState(0)
  const [scheduledRequestsCount, setScheduledRequestsCount] = useState(0)
  const [completedRequestsCount, setCompletedRequestsCount] = useState(0)
  const [arr, setArr] = useState<any| null>(null)
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin/login')
    }
  }, [router])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/v1/resident/request', {method: "GET"})
      return response.json()
    }
    fetchData().then((appointmentRequests)=>{
      const {unscheduledRequestsArr, scheduledRequestsArr, completedRequestsArr} = filterRequestsByStatus(appointmentRequests.data)
      setUnscheduledRequestsCount(unscheduledRequestsArr.length)
      setScheduledRequestsCount(scheduledRequestsArr.length)
      setCompletedRequestsCount(completedRequestsArr.length)
      if(status==="Unscheduled Requests"){
        setArr(unscheduledRequestsArr)
      }
      if(status==="Scheduled Requests"){
        setArr(scheduledRequestsArr)
      }
      if(status==="Completed Requests"){
        setArr(completedRequestsArr)
      }
    })
  }, [status])

  return (
    <div className='pl-4 md:pl-16 pr-4 md:pr-16'>
      <h1 className='text-4xl md:text-5xl font-semibold'>Overview</h1>

      <DashboardCounterButtons requestCount={[unscheduledRequestsCount, scheduledRequestsCount, completedRequestsCount]} setStatus={setStatus}/>
      
      <div className='mb-3 flex flex-row justify-end space-x-5'>
      <ExportCSV />
      <ExportPDF />
      </div>
      
      <h2 className='text-2xl font-semibold'>{status}</h2>
      <div className="overflow-y-auto max-h-96 border rounded">
      <table className="table-fixed md:max-w-96 divide-y divide-gray-200">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
            <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Address</th>
            <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Requested Date</th>
            <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Requested Timeslot</th>
            {/* <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th> */}
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {arr?.length > 0 ? (
            arr.map((request:Request) => (
              <tr key={request.id}>
                <td className="px-4 py-4 whitespace-nowrap">{request.name}</td>
                <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap">{request.email}</td>
                <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap">{request.phoneNumber}</td>
                <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap">{request.address}</td>
                <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap">
                  {new Date(request.preferred_date).toLocaleString("en-US", { dateStyle: "full" })}
                </td>
                <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap">{request.preferred_timeslot}</td>
                {/* <td className="px-4 py-4 whitespace-nowrap">{request.request_status}</td> */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <a href={`/admin/dashboard/${request.id}`}>
                    <button className="text-blue-500 hover:underline">View</button>
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="px-6 py-4 text-center text-gray-500">No requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

    </div>
  )
}
