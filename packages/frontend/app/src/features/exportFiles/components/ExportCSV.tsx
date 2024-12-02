import { appointmentRequests } from "@/app/src/asset/mockData/appointmentRequests"
import Button from "@/app/src/components/Button"
import { exportCSV } from "@/app/src/utils/exportCSV"


// TODO pass the fetched data
const ExportCSV = () => {
  const handleExport = () => {
    exportCSV({
      data: appointmentRequests,
      fileName: 'scheduled_appointments.csv',
    })
  }

  return <Button onClick={handleExport}>Export CSV</Button>
}

export default ExportCSV
