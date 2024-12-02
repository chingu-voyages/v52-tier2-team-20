import { appointmentRequests } from '@/src/asset/mockData/appointmentRequests'
import React, { useEffect, useState } from 'react'
import AppointmentPDF from '@/src/components/AppointmentPDF'
import { PDFDownloadLink } from '@react-pdf/renderer'
import Button from '@/src/components/Button'

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
