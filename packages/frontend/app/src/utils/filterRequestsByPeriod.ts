// TODO fixing filter by requestedDate

export const filterRequestsByPeriod = (
  requests: Appointment,
  period: 'all' | 'daily' | 'weekly',
) => {
  const now = new Date()

  if (period === 'daily') {
    return requests.filter((req) => {
      const requestDate = new Date(req.requestedAt)
      return (
        requestDate.getDate() === now.getDate() &&
        requestDate.getMonth() === now.getMonth() &&
        requestDate.getFullYear() === now.getFullYear()
      )
    })
  }

  if (period === 'weekly') {
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(now.getDate() - 7)

    return requests.filter((req) => {
      const requestDate = new Date(req.requestedAt)
      return requestDate >= oneWeekAgo && requestDate <= now
    })
  }

  return requests
}
