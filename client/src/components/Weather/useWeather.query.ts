import { useQuery } from '@apollo/client'

import { graphql } from '@/src/generated'

const weatherQuery = graphql(`
  query Weather($latitude: String!, $longitude: String!) {
    singleDayWeather(latitude: $latitude, longitude: $longitude) {
      weatherCode
      temperature {
        max
        min
      }
    }
    multiDayWeather(latitude: $latitude, longitude: $longitude) {
      weatherCode
      temperature
    }
  }
`)

const useWeather = (location: { latitude: string; longitude: string }) => {
  const { data, loading, error } = useQuery(weatherQuery, {
    variables: { latitude: location.latitude, longitude: location.longitude },
  })

  return { data, loading, error: Boolean(error) }
}

export default useWeather
