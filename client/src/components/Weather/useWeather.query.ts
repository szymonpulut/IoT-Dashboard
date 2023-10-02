import { useQuery } from '@apollo/client'

import { graphql } from '@/src/generated'

const weatherQuery = graphql(`
  query Weather($city: String!) {
    singleDayWeather(city: $city) {
      weatherCode
      temperature {
        max
        min
      }
    }
    multiDayWeather(city: $city) {
      weatherCode
      temperature
    }
  }
`)

const useWeather = (city: string) => {
  const { data, loading, error } = useQuery(weatherQuery, {
    variables: { city },
  })

  return { data, loading, error: Boolean(error) }
}

export default useWeather
