import {
  AIR_QUALITY_API_KEY,
  AIR_QUALITY_API_URL,
  CACHE_LENGTH,
} from './airQuality.configConsts.js'
import { mapAirQualityDataToAirQuality } from './airQuality.externalMappings.js'
import { AirQualitySchemaExternal } from './airQuality.externalSchema.js'
import type { AirQuality } from './airQuality.types.js'

import CacheManager from '@/utils/cacheManager.utils.js'
import { fetchDataWithCacheFactory } from '@/utils/fetchData.utils.js'

const airQualityCache = new CacheManager<AirQualitySchemaExternal>()

export const getAirQuality = async (location: {
  latitude: string
  longitude: string
}): Promise<AirQuality> => {
  const fetchAirQualityDataWithCache = fetchDataWithCacheFactory({
    apiOptions: {
      url: AIR_QUALITY_API_URL,
      headers: { apikey: AIR_QUALITY_API_KEY },
    },
    decoderOptions: { decoder: AirQualitySchemaExternal },
    cacheOptions: {
      cache: airQualityCache,
      generateCacheKey: (params) => `airQuality-${params}`,
      maxAge: CACHE_LENGTH.airQuality,
    },
  })

  const airQualityData = await fetchAirQualityDataWithCache({
    lat: location.latitude,
    lng: location.longitude,
  })

  const airQuality = mapAirQualityDataToAirQuality(airQualityData)

  return airQuality
}
