import {
  HOUR_TO_MILLISECOND,
  MINUTE_TO_MILLISECOND,
} from '@/utils/timeUnitConversion.utils.js'

export const WEATHER_API_KEY = process.env.WEATHER_API_KEY
export const WEATHER_API_URL =
  'https://api.openweathermap.org/data/2.5/forecast/daily'

export const CACHE_LENGTH = {
  singleDay: 30 * MINUTE_TO_MILLISECOND,
  multiDay: 3 * HOUR_TO_MILLISECOND,
}

export const DEFAULT_MULTI_DAY_WEATHER_DAY_COUNT = 6
