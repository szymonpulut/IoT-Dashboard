import { useEffect, useRef } from 'react'

export const useBaseUrl = () => {
  const baseUrl = useRef('')

  useEffect(() => {
    const currentUrl = window.location.href

    const url = new URL(currentUrl)
    const newBaseUrl = `${url.protocol}//${url.host}`

    baseUrl.current = newBaseUrl
  }, [])

  return baseUrl.current
}
