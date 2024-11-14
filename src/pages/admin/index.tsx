import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { appointmentRequests } from '@/asset/mockData/appointmentRequests'
import ExportCSV from '@/features/exportFiles/components/ExportCSV'
import ExportPDF from '@/features/exportFiles/components/ExportPDF'
import { filterRequestsByPeriod } from '@/utils/filterRequestsByPeriod'

export default function Dashboard() {
  const router = useRouter()
  const [period, setPeriod] = useState<'all' | 'daily' | 'weekly'>('all')
  const [filteredRequests, setFilteredRequests] = useState(appointmentRequests)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin/login')
    }
  }, [router])

  useEffect(() => {
    const filtered = filterRequestsByPeriod(appointmentRequests, period)
    setFilteredRequests(filtered)
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
            <th>Requested At</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.address}</td>
                <td>{new Date(request.requestedAt).toLocaleString()}</td>
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
