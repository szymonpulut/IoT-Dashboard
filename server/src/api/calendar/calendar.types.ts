export type CalendarEventList = CalendarEvent[]

export interface CalendarEvent {
  name: string
  start: {
    dateTime: string
    timeZone: string
  }
}

export interface DateTimeDate {
  dateTime: string
  timeZone: string
}

export interface StringDate {
  date: string
}
