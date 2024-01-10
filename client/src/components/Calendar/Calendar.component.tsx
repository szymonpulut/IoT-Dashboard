import React from 'react'
import styled from 'styled-components'

import CalendarWithAuthenticationComponent from './CalendarWithAuthentication.component'

const CalendarComponent: React.FC = () => {
  return (
    <CalendarComponentStyled>
      <CalendarWithAuthenticationComponent />
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
