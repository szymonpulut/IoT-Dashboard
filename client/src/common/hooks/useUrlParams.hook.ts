import { useEffect, useState } from 'react'

export interface UrlParamsObject {
  [key: string]: string
}

const useUrlParams = () => {
  const [params, setParams] = useState<UrlParamsObject>({})

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const paramsObject = Array.from(urlParams.keys()).reduce((acc, key) => {
      acc[key] = urlParams.get(key) as string

      return acc
    }, {} as UrlParamsObject)

    setParams(paramsObject)
  }, [])

  return params
}

export default useUrlParams
