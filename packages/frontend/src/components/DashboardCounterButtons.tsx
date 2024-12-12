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
      <button key={dashboardButton.innerText} onClick={()=>{setStatus(dashboardButton.value)}} className='grid grid-cols-2 grid-rows-2 p-5 h-32 w-96 text-2xl rounded-xl bg-white drop-shadow-lg hover:bg-active-blue hover:text-white focus:outline-none focus:ring focus:bg-blue-active'><ButtonIcon className='row-span-3 size-16 justify-self-center self-center'/><div className='flex flex-col justify-self-center'><h3 className='font-semibold'>{dashboardButton.innerText}</h3><h4>{dashboardButton.requestCount}</h4></div></button>
      )
    })
      
    }
      </div>
  )
}

export default DashboardCounterButtons