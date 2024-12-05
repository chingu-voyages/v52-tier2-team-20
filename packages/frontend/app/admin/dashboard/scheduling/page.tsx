import SchedulingMap from '@/src/components/SchedulingMap'
import React from 'react'

function SchedulingPage() {

    const apiKey = process.env.NEXT_PUBLIC_HERE_MAP_API_KEY

  return (
    <>
    <div>SchedulingPage</div>
    <SchedulingMap apiKey={apiKey}/>
    </>
  )
}

export default SchedulingPage