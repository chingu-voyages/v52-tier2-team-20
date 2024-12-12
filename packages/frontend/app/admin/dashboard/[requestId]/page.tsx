"use client"

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
    }, [params])
    

  return (
    <>
    <div>Request Page</div>
    <h1>{request?.data.name}</h1>
    <h2>{request?.data.address}</h2>
    </>
  )
}

export default RequestPage