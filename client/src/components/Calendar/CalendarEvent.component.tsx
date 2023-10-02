import React from 'react'
import styled from 'styled-components'

interface CalendarEventComponentProps {
  name: string
  date: string
}

const CalendarEventComponent: React.FC<CalendarEventComponentProps> = ({
  name,
  date,
}) => {
  return (
    <CalendarEventComponentStyled>
      <EventDate>{date}</EventDate>
      <EventName>{name}</EventName>
    </CalendarEventComponentStyled>
  )
}

const CalendarEventComponentStyled = styled.div`
  display: flex;
  flex-flow: column;
  padding: 8px;
`

const EventDate = styled.span`
  font-size: 0.9em;
`

const EventName = styled.span`
  font-size: 0.7em;
`

export default CalendarEventComponent
