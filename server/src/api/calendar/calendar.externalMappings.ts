import type { CalendarEventListSchemaExternal } from './calendar.externalSchema'
import type {
  CalendarEventList,
  DateTimeDate,
  StringDate,
} from './calendar.types'

export const mapCalendarEventsDTOToCalendarEventList = (
  calendarEventsDTO: CalendarEventListSchemaExternal,
): CalendarEventList =>
  calendarEventsDTO.map((event) => ({
    name: event.summary,
    start: normalizeDateFormats(event.start),
  }))

const normalizeDateFormats = (
  date: Partial<DateTimeDate> | Partial<StringDate>,
) => {
  if ('dateTime' in date && 'timeZone' in date) {
    return { dateTime: date.dateTime, timeZone: date.timeZone }
  }

  if ('date' in date) {
    return { dateTime: date.date, timeZone: 'Europe/Warsaw' }
  }

  // else noop
  return { dateTime: '', timeZone: '' }
}
