// TODO fixing filter by requestedDate

export const filterRequestsByStatus = (
  requests: Appointment
) => {

  const unscheduledRequestsArr = []
  const scheduledRequestsArr = []
  const completedRequestsArr = []

for (const request of requests){
  if(request.request_status === "unscheduled"){
    unscheduledRequestsArr.push(request)
  } else if (request.request_status === "scheduled"){
    scheduledRequestsArr.push(request)
  } else if (request.request_status === "completed"){
    completedRequestsArr.push(request)
  }
}

return {unscheduledRequestsArr, scheduledRequestsArr, completedRequestsArr}

}
