import { listEvents } from './calendar.dataSources.js'
import {
  authenticate,
  getLoginStatus,
  getLoginUrl,
} from './calendar.externalAuthentication.js'

import type { Resolvers } from '@/generated/schema.js'

const calendarResolver: Partial<Resolvers> = {
  Query: {
    calendar: () => ({
      events: [],
      authentication: { loginStatus: false, loginUrl: '' },
    }),
  },
  Mutation: {
    calendar: () => ({ authenticate: false }),
  },
  CalendarQueryType: {
    events: (_, { userId }) => listEvents(userId),
  },
  CalendarMutation: {
    authenticate: (_, { userId, code }) => authenticate(userId, code),
  },
  CalendarAuthenticationQuery: {
    loginStatus: (_, { userId }) => getLoginStatus(userId),
    loginUrl: (_, { userId }) => getLoginUrl(userId),
  },
}

export default calendarResolver
