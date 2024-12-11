import React from 'react'
import {
  XMarkIcon,
  CalendarDaysIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';


function DashboardCounterButtons({requestCount, setStatus}) {

  const [unscheduledRequestsCount, scheduledRequestsCount, completedRequestsCount] = requestCount
  
  const dashboardButtons = [
    { innerText:"Unscheduled", value:"Unscheduled Requests", requestCount: unscheduledRequestsCount, icon: XMarkIcon },
    { innerText: "Scheduled", value:"Scheduled Requests", requestCount: scheduledRequestsCount, icon: CalendarDaysIcon }, 
    { innerText: "Completed", value:"Completed Requests", requestCount: completedRequestsCount, icon: CheckCircleIcon }
  ]

  return (
    <div className='flex flex-row justify-between pt-10 pb-36'>
    {dashboardButtons.map((dashboardButton)=>{
      const ButtonIcon = dashboardButton.icon
      return(
      <button key={dashboardButton.innerText} onClick={()=>{setStatus(dashboardButton.value)}} className='grid p-5 h-32 w-96 text-lg rounded-xl bg-white drop-shadow-lg hover:bg-active-blue hover:text-white'><ButtonIcon className='size-16'/>{`${dashboardButton.innerText} ${dashboardButton.requestCount}`}</button>
      )
    })
      
    }
      </div>
  )
}

export default DashboardCounterButtons