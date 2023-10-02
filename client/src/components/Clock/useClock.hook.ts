import { useCallback, useState } from 'react'
import { format } from 'date-fns'

import useInterval from '@/src/hooks/useInterval.hook'
import { SECOND_TO_MILLISECOND } from '@/src/utils/timeUnitConversion.utils'

const UPDATE_INTERVAL_IN_MS = 5 * SECOND_TO_MILLISECOND

const getTimeTextFromDate = (date: Date): string => {
  const timeText = format(date, 'HH:mm')

  return timeText
}

const getDateTextFromDate = (date: Date): string => {
  const dateText = format(date, 'EEEE, MMMM d')

  return dateText
}

interface UseClockReturn {
  time: string
  date: string
}

const useClock = (): UseClockReturn => {
  const date = new Date()

  const [clock, setClock] = useState({
    dateText: getDateTextFromDate(date),
    timeText: getTimeTextFromDate(date),
  })

  const updateDate = useCallback(() => {
    const updatedDate = new Date()

    const newTimeText = getTimeTextFromDate(updatedDate)
    const newDateText = getDateTextFromDate(updatedDate)

    setClock({ dateText: newDateText, timeText: newTimeText })
  }, [])

  useInterval(updateDate, UPDATE_INTERVAL_IN_MS)

  return { time: clock.timeText, date: clock.dateText }
}

export default useClock
