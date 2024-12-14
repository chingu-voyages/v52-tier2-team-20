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
      <button key={dashboardButton.innerText} onClick={()=>{setStatus(dashboardButton.value)}} className='md:grid grid-cols-2 grid-rows-2 md:p-5 md:h-32 md:w-96 md:text-2xl rounded-xl bg-white drop-shadow-lg hover:bg-active-blue hover:text-white focus:outline-none focus:ring focus:bg-blue-active'><ButtonIcon className='md:row-span-3 size-20 md:size-16 justify-self-center self-center'/><div className='flex flex-col justify-self-center'><h3 className='hidden md:block font-semibold'>{dashboardButton.innerText}</h3><h4 className='hidden md:block'>{dashboardButton.requestCount}</h4></div></button>
      )
    })
      
    }
      </div>
  )
}

export default DashboardCounterButtons