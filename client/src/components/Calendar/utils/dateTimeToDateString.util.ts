import { isToday, isTomorrow, parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'

const dateTimeToDate = ({
  dateTime,
  timeZone,
}: {
  dateTime: string
  timeZone: string
}): Date => {
  const parsedDateTime = parseISO(dateTime)

  const transformedDate = utcToZonedTime(parsedDateTime, timeZone)

  return transformedDate
}

export const dateTimeToDateString = ({
  dateTime,
  timeZone,
}: {
  dateTime: string
  timeZone: string
}): string => {
  const date = dateTimeToDate({ dateTime, timeZone })

  if (isToday(date)) {
    return `Today, ${format(date, 'H:mm')}`
  }

  if (isTomorrow(date)) {
    return `Tomorrow, ${format(date, 'H:mm')}`
  }

  return format(date, 'EEEE, H:mm, d MMMM y')
}
