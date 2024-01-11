import { format } from 'date-fns'

export const getTimeTextFromDate = (date: Date): string => {
  const timeText = format(date, 'HH:mm')

  return timeText
}

export const getDateTextFromDate = (date: Date): string => {
  const dateText = format(date, 'EEEE, MMMM d')

  return dateText
}
