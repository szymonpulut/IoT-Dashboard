import { useQuery } from '@apollo/client'

import { graphql } from '@/src/generated'

const airQualityQuery = graphql(`
  query AirQuality($latitude: String!, $longitude: String!) {
    airQuality(latitude: $latitude, longitude: $longitude) {
      PM25 {
        pollutionType
        data {
          value
          alertThreshold
        }
      }
      PM10 {
        pollutionType
        data {
          value
          alertThreshold
        }
      }
    }
  }
`)

const useAirQuality = (location: { latitude: string; longitude: string }) => {
  const { data, loading, error } = useQuery(airQualityQuery, {
    variables: { latitude: location.latitude, longitude: location.longitude },
  })

  return { data, loading, error: Boolean(error) }
}

export default useAirQuality
