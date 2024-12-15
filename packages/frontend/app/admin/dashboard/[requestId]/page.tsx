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
        const response = await fetch(`https://v52-tier2-team-20.onrender.com/api/v1/resident/request/${requestId}`, {method: "GET"})
        const requestData = await response.json()
        setRequest(requestData)
      }
      fetchRequestData()
    }, [])
    
if(request){
  return (
    <div className='md:ml-20 md:mt-10'>
    <a href="/admin/dashboard"><button className='pb-4'>&lt; Back</button></a>
    <h1 className='text-3xl font-semibold'>Appointment details</h1>
    <UpdateRequestForm request={request}/>
    </div>
  )
}
}

export default RequestPage