import { appointmentRequests } from '@/src/asset/mockData/appointmentRequests'

type ExportCSVProps = {
  data: typeof appointmentRequests
  fileName?: string
}

export const exportCSV = ({ data, fileName }: ExportCSVProps) => {
  if (!data || data.length === 0) {
    console.warn('No data to export')
    return
  }

  const headers = ['ID', 'Name', 'Email', 'Phone', 'Address', 'Requested At']

  const csvRows = data.map((item) => [
    item.id,
    item.name,
    item.email,
    item.phone,
    item.address,
    new Date(item.requestedAt).toLocaleString(),
  ])

  const csvString = [headers, ...csvRows].map((row) => row.join(',')).join('\n')

  const blob = new Blob([csvString], { type: 'text/csv' })

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName || 'appointments.csv'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
