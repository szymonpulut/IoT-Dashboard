import {
  CACHE_LENGTH,
  DEFAULT_MULTI_DAY_WEATHER_DAY_COUNT,
  WEATHER_API_KEY,
  WEATHER_API_URL,
} from './weather.configConsts.js'
import {
  mapWeatherDataToMultiDayWeather,
  mapWeatherDataToSingleDayWeather,
} from './weather.externalMappings.js'
import { DailyForecastSchemaExternal } from './weather.externalSchema.js'
import type { MultiDayWeather, SingleDayWeather } from './weather.types.js'

import CacheManager from '@/utils/cacheManager.utils.js'
import { ExternalAPIInvalidRequestError } from '@/utils/error.utils.js'
import { fetchDataWithCacheFactory } from '@/utils/fetchData.utils.js'

const weatherCache = new CacheManager<DailyForecastSchemaExternal>()

export const getSingleDayWeather = async (location: {
  latitude: string
  longitude: string
}): Promise<SingleDayWeather> => {
  const fetchWeatherDataWithCache = fetchDataWithCacheFactory({
    apiOptions: {
      url: WEATHER_API_URL,
      additionalParameters: { appId: WEATHER_API_KEY, units: 'metric' },
    },
    decoderOptions: { decoder: DailyForecastSchemaExternal },
    cacheOptions: {
      cache: weatherCache,
      generateCacheKey: (params) => `singleDay-${params})}`,
      maxAge: CACHE_LENGTH.singleDay,
    },
  })

  const weatherData = await fetchWeatherDataWithCache({
    lat: location.latitude,
    lon: location.longitude,
    cnt: '1',
  })

  const singleDayWeather = mapWeatherDataToSingleDayWeather(weatherData)

  return singleDayWeather
}

export const getMultiDayWeather = async (
  location: { latitude: string; longitude: string },
  dayCount = DEFAULT_MULTI_DAY_WEATHER_DAY_COUNT,
): Promise<MultiDayWeather> => {
  if (dayCount > 6) {
    throw new ExternalAPIInvalidRequestError(
      `Can't fetch weather data for more than 6 days, requested count: ${dayCount}`,
    )
  }

  const fetchWeatherDataWithCache = fetchDataWithCacheFactory({
    apiOptions: {
      url: WEATHER_API_URL,
      additionalParameters: { appId: WEATHER_API_KEY, units: 'metric' },
    },
    decoderOptions: { decoder: DailyForecastSchemaExternal },
    cacheOptions: {
      cache: weatherCache,
      generateCacheKey: (params) => `multiDay-${params}`,
      maxAge: CACHE_LENGTH.singleDay,
    },
  })

  const weatherData = await fetchWeatherDataWithCache({
    lat: location.latitude,
    lon: location.longitude,
    cnt: `${dayCount + 1}`,
  })

  const multiDayWeather = mapWeatherDataToMultiDayWeather(weatherData, dayCount)

  return multiDayWeather
}
