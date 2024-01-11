import { useCallback, useState } from 'react'

import useInterval from '@/src/common/hooks/useInterval.hook'
import { SECOND_TO_MILLISECOND } from '@/src/common/utils/timeUnitConversion.util'

import {
  getDateTextFromDate,
  getTimeTextFromDate,
} from '../utils/dateTransformation.util'

const UPDATE_INTERVAL_IN_MS = 5 * SECOND_TO_MILLISECOND

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
