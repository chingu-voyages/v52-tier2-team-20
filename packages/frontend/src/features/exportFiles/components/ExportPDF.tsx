import { appointmentRequests } from "@/src/asset/mockData/appointmentRequests"
import AppointmentPDF from "@/src/components/AppointmentPDF"
import Button from "@/src/components/Button"
import { useEffect, useState } from "react"
import { PDFDownloadLink } from '@react-pdf/renderer'


// TODO pass the fetched data
const ExportPDF = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <PDFDownloadLink
          document={<AppointmentPDF data={appointmentRequests} />}
          fileName="scheduled_appointments.pdf"
        >
          <Button>Export PDF</Button>
        </PDFDownloadLink>
      )}
    </>
  )
}

export default ExportPDF
