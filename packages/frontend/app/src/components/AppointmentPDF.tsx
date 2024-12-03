import React from 'react'
import { Document, Page, Text, View } from '@react-pdf/renderer'

type Appointment = {
  id: number
  name: string
  email: string
  phone: string
  address: string
  requestedAt: string
}

type Props = {
  data: Appointment[]
}

// TODO PDF Style
const AppointmentPDF: React.FC<Props> = ({ data }) => (
  <Document>
    <Page>
      <View>
        <Text>Scheduled Appointments</Text>
      </View>
      {data.map((item) => (
        <View key={item.id}>
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
          </View>
          <View>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
          <View>
            <Text>
              Requested At: {new Date(item.requestedAt).toLocaleString()}
            </Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
)

export default AppointmentPDF
