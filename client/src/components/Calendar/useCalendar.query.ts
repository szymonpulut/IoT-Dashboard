import { useQuery } from '@apollo/client'

import { graphql } from '@/src/generated'

const calendarQuery = graphql(`
  query Calendar {
    calendar {
      events {
        name
        date
      }
    }
  }
`)

export const useCalendar = () => {
  const { data, loading, error } = useQuery(calendarQuery)

  return { data, loading, error: Boolean(error) }
}
