import React from 'react'
import styled from 'styled-components'

import CalendarEventComponent from './CalendarEvent.component'
import { useCalendar } from './useCalendar.query'

const CalendarComponent: React.FC = () => {
  const { data, loading, error } = useCalendar()

  if (loading) {
    return <CalendarComponentStyled>Loading...</CalendarComponentStyled>
  }

  if (error) {
    return <CalendarComponentStyled>Error</CalendarComponentStyled>
  }

  const { calendar } = data!

  return (
    <CalendarComponentStyled>
      {calendar.events.map((event) => (
        <CalendarEventComponent name={event.name} date={event.date} />
      ))}
    </CalendarComponentStyled>
  )
}

const CalendarComponentStyled = styled.div`
  grid-area: calendar;
  background-color: ${({ theme }): string => theme.colors.calendarBg};

  display: flex;
  flex-flow: column;
  align-items: left;

  padding: 10px;
  box-sizing: border-box;

  overflow-y: auto;
`

export default CalendarComponent
