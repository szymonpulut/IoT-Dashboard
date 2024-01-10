import React, { useCallback } from 'react'

import useUrlParams from '@/src/hooks/useUrlParams.hook'

import { useAutoAuthenticateCalendar } from './hooks/useAutoAuthenticateCalendar.hook'
import { useAuthenticateCalendarMutation } from './queries/useAuthenticateCalendarMutation.query'
import { useCalendarLoginData } from './queries/useCalendarLoginData.query'
import CalendarEventListComponent from './CalendarEventList.component'

const CalendarWithAuthenticationComponent: React.FC = () => {
  const urlParams = useUrlParams()

  const [handleAuthenticateCalendar] = useAuthenticateCalendarMutation()

  useAutoAuthenticateCalendar({ handleAuthenticateCalendar, urlParams })

  const { data, loading, error } = useCalendarLoginData()

  const handleLogin = useCallback(async () => {
    await window.open(data!.calendar.authentication.loginUrl)
  }, [data])

  if (error) {
    return <>Error</>
  }

  if (loading) {
    return <>Loading...</>
  }

  if (!data!.calendar.authentication.loginStatus) {
    return (
      <>
        Not logged in
        <button onClick={handleLogin}>Log In</button>
      </>
    )
  }

  return <CalendarEventListComponent />
}

export default CalendarWithAuthenticationComponent
