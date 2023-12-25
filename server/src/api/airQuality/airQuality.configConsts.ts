import { MINUTE_TO_MILLISECOND } from '@/utils/timeUnitConversion.utils.js'

export const AIR_QUALITY_API_KEY = process.env.AIR_QUALITY_API_KEY
export const AIR_QUALITY_API_URL =
  'https://airapi.airly.eu/v2/measurements/point'

export const CACHE_LENGTH = {
  airQuality: 30 * MINUTE_TO_MILLISECOND,
}
