"use client"

import UpdateRequestForm from '@/src/components/UpdateRequestForm'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


function RequestPage() {

    const [request, setRequest] = useState(null)

    const params = useParams()
    const {requestId} = params

    useEffect(() => {
      const fetchRequestData = async () =>{
        const response = await fetch(`http://localhost:8000/api/v1/resident/request/${requestId}`, {method: "GET"})
        const requestData = await response.json()
        setRequest(requestData)
      }
      fetchRequestData()
    }, [])
    
if(request){
  return (
    <div className='ml-20 mt-10'>
    <h1 className='text-3xl font-semibold'>Appointment details</h1>
    <UpdateRequestForm request={request}/>
    </div>
  )
}
}

export default RequestPage