import { useQuery } from '@apollo/client'

import { graphql } from '@/src/generated'

import { CALENDAR_USER_ID } from '../Calendar.consts'

const calendarQuery = graphql(`
  query Calendar($userId: String!) {
    calendar: calendar {
      events(userId: $userId) {
        name
        start {
          dateTime
          timeZone
        }
      }
    }
  }
`)

export const useCalendar = () => {
  const { data, loading, error } = useQuery(calendarQuery, {
    variables: { userId: CALENDAR_USER_ID },
  })

  return { data, loading, error: Boolean(error) }
}
