import { google } from 'googleapis'

import { getOAuthClient } from './calendar.externalAuthentication'
import { mapCalendarEventsDTOToCalendarEventList } from './calendar.externalMappings'
import { CalendarEventListSchemaExternal } from './calendar.externalSchema'
import type { CalendarEventList } from './calendar.types'

import { decodeFactory } from '@/utils/fetchData.utils'

export const listEvents = async (
  userId: string,
): Promise<CalendarEventList> => {
  const decodeEvents = decodeFactory(CalendarEventListSchemaExternal)
  const oAuthClient = getOAuthClient(userId)

  const calendar = google.calendar({ version: 'v3', auth: oAuthClient })

  const response = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  })

  const events = response.data.items

  const parsedCalendarEvents = decodeEvents(events)
  const calendarEventList =
    mapCalendarEventsDTOToCalendarEventList(parsedCalendarEvents)

  return calendarEventList
}
