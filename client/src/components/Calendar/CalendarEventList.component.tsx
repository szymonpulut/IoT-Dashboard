import React from 'react'

import { useCalendar } from './queries/useCalendar.query'
import { dateTimeToDateString } from './utils/dateTimeToDateString.util'
import CalendarEventComponent from './CalendarEvent.component'

const CalendarEventListComponent: React.FC = () => {
  const { data, loading, error } = useCalendar()

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    return <>Error</>
  }

  const { calendar } = data!

  return (
    <>
      {calendar.events.map((event) => (
        <CalendarEventComponent
          name={event.name}
          date={dateTimeToDateString(event.start)}
        />
      ))}
    </>
  )
}

export default CalendarEventListComponent
