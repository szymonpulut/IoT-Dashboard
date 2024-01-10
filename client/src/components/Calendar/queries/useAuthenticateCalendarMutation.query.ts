import { useMutation } from '@apollo/client'

import { graphql } from '@/src/generated'

import { CALENDAR_USER_ID } from '../Calendar.consts'

const authenticateCalendarMutationQuery = graphql(`
  mutation AuthenticateCalendar($userId: String!, $code: String!) {
    calendar {
      authenticate(userId: $userId, code: $code)
    }
  }
`)

export const useAuthenticateCalendarMutation = () => {
  const [authenticateCalendar] = useMutation(authenticateCalendarMutationQuery)

  const handleAuthenticateCalendar = async (code: string) => {
    const response = await authenticateCalendar({
      variables: { userId: CALENDAR_USER_ID, code: code },
    })

    return response.data?.calendar?.authenticate ?? false
  }

  return [handleAuthenticateCalendar]
}
