import fetch from 'node-fetch'
import https from 'https'

import {
  ExternalAPINotFoundError,
  ExternalAPISchemaValidationFailError,
} from './error.utils'

const agent = new https.Agent({
  rejectUnauthorized: false,
})

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const _makeHttpRequest = async (
  method: HttpMethod,
  url: string,
  headers: Record<string, string> = {},
  params: Record<string, string> = {},
) => {
  try {
    const queryParams = new URLSearchParams(params)

    if (method === 'GET' && Object.keys(params).length > 0) {
      url = `${url}?${queryParams.toString()}`
    }

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      agent,
    }

    const response = await fetch(url, options)
    const data = await response.json()

    return data
  } catch (error) {
    switch (true) {
      case error instanceof ExternalAPISchemaValidationFailError:
        throw error
      default:
        throw new ExternalAPINotFoundError(
          `Failed to make an HTTP request to ${url}. Original error: "${error}"`,
        )
    }
  }
}

const get = async (
  url: string,
  headers: Record<string, string> = {},
  params: Record<string, string> = {},
) => await _makeHttpRequest('GET', url, headers, params)

export const apiRequest = { get }
