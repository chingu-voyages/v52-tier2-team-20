"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { appointmentRequests } from '@/src/asset/mockData/appointmentRequests'
import { filterRequestsByPeriod } from '@/src/utils/filterRequestsByPeriod'
import ExportCSV from '@/src/features/exportFiles/components/ExportCSV'
import ExportPDF from '@/src/features/exportFiles/components/ExportPDF'

export default function Dashboard() {
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
    <div>
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

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Requested Date</th>
            <th>Requested Timeslot</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests?.length > 0 ? (
            filteredRequests?.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phoneNumber}</td>
                <td>{request.address}</td>
                <td>{new Date(request.preferred_date).toLocaleString('en-US', {dateStyle: "full"})}</td>
                <td>{request.preferred_timeslot}</td>
                <td>{request.request_status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
