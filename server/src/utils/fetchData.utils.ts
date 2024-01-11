import type { ZodType } from 'zod'
import { ZodError } from 'zod'

import { apiRequest } from './apiRequest.utils.js'
import type CacheManager from './cacheManager.utils.js'
import { ExternalAPISchemaValidationFailError } from './error.utils.js'

export const decodeFactory =
  <T>(codec: ZodType<T>) =>
  (response: unknown): T => {
    try {
      const parsedResponse = codec.parse(response)
      return parsedResponse
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ExternalAPISchemaValidationFailError(
          `Failed to verify the schema <${codec}>, error: ${JSON.stringify(
            error,
          )}`,
        )
      } else {
        // noop; rethrow the original error
        throw error
      }
    }
  }

interface FetchDataOptions<T> {
  apiUrl: string
  headers?: Record<string, string>
  decoder: ZodType<T>
}

export const fetchDataFactory = <T>({
  apiUrl,
  headers,
  decoder,
}: FetchDataOptions<T>) => {
  const decode = decodeFactory(decoder)

  const fetchData = async (params: Record<string, string> = {}) => {
    const unsafeResponse = await apiRequest.get(apiUrl, headers, params)

    const data = decode(unsafeResponse)

    return data
  }

  return fetchData
}

interface FetchDataWithCacheFactoryArguments<T> {
  apiOptions: {
    url: string
    additionalParameters?: Record<string, string>
    headers?: Record<string, string>
  }
  decoderOptions: { decoder: ZodType<T> }
  cacheOptions: {
    cache: CacheManager<T>
    maxAge: number
    generateCacheKey: (paramsSerialized: string) => string
  }
}

export const fetchDataWithCacheFactory =
  <T>({
    apiOptions,
    decoderOptions,
    cacheOptions,
  }: FetchDataWithCacheFactoryArguments<T>) =>
  async (params: Record<string, string> = {}) => {
    const paramsWithAdditionalParams = {
      ...apiOptions.additionalParameters,
      ...params,
    }
    const queryParams = new URLSearchParams(paramsWithAdditionalParams)

    const cacheKey = cacheOptions.generateCacheKey(queryParams.toString())
    const cachedData = cacheOptions.cache.getFromCache(
      cacheKey,
      cacheOptions.maxAge,
    )

    if (cachedData.status === 'HIT') {
      return Promise.resolve(cachedData.data)
    }

    const fetchDataFunction = fetchDataFactory({
      apiUrl: apiOptions.url,
      headers: apiOptions.headers,
      decoder: decoderOptions.decoder,
    })

    const data = await fetchDataFunction(paramsWithAdditionalParams)

    cacheOptions.cache.setCache(cacheKey, data)

    return data
  }
