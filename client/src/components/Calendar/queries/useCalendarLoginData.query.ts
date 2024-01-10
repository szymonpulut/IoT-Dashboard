import { useQuery } from '@apollo/client'

import { graphql } from '@/src/generated'

import { CALENDAR_USER_ID } from '../Calendar.consts'

const calendarLoginDataQuery = graphql(`
  query CalendarLogin($userId: String!) {
    calendar {
      authentication {
        loginStatus(userId: $userId)
        loginUrl(userId: $userId)
      }
    }
  }
`)

export const useCalendarLoginData = () => {
  const { data, loading, error } = useQuery(calendarLoginDataQuery, {
    variables: { userId: CALENDAR_USER_ID },
  })

  return { data, loading, error: Boolean(error) }
}
