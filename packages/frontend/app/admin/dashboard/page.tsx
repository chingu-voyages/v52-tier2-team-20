"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { appointmentRequests } from '@/src/asset/mockData/appointmentRequests'
import { filterRequestsByPeriod } from '@/src/utils/filterRequestsByPeriod'
import ExportCSV from '@/src/features/exportFiles/components/ExportCSV'
import ExportPDF from '@/src/features/exportFiles/components/ExportPDF'

export default function DashboardPage() {
  const router = useRouter()
  const [period, setPeriod] = useState<'all' | 'daily' | 'weekly'>('all')
  const [filteredRequests, setFilteredRequests] = useState(null)
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin/login')
    }
  }, [router])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/v1/resident/request', {method: "GET"})
      const appointmentRequests = await response.json()
      const filtered = filterRequestsByPeriod(appointmentRequests.data, period)
      setFilteredRequests(filtered)
    }
    fetchData()
  }, [period])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/admin/login')
  }

  return (
    <>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <label>
          Filter by period:
          <select
            value={period}
            onChange={(e) =>
              setPeriod(e.target.value as 'all' | 'daily' | 'weekly')
            }
          >
            <option value="all">All</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>
      </div>

      <ExportCSV />
      <ExportPDF />
      
      <div className="overflow-y-auto max-h-96 border rounded">
      <table className="table-fixed max-w-96 divide-y divide-gray-200">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Address</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Requested Date</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Requested Timeslot</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredRequests?.length > 0 ? (
            filteredRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-4 py-4 whitespace-nowrap">{request.name}</td>
                <td className="px-4 py-4 whitespace-nowrap">{request.email}</td>
                <td className="px-4 py-4 whitespace-nowrap">{request.phoneNumber}</td>
                <td className="px-4 py-4 whitespace-nowrap">{request.address}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {new Date(request.preferred_date).toLocaleString("en-US", { dateStyle: "full" })}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{request.preferred_timeslot}</td>
                <td className="px-4 py-4 whitespace-nowrap">{request.request_status}</td>
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

    </>
  )
}
