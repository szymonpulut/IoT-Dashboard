import React from 'react'
import styled from 'styled-components'

import MultiDayComponent from './components/MultiDay/MultiDay.component'
import SingleDayComponent from './components/SingleDay/SingleDay.component'
import useAirQuality from './queries/useAirQuality.query'
import useWeather from './queries/useWeather.query'
import { mapAirQualityToProps } from './utils/mapAirQualityToProps.util'

const WeatherComponent: React.FC = () => {
  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather({
    latitude: import.meta.env.VITE_LOCATION_LATITUDE,
    longitude: import.meta.env.VITE_LOCATION_LONGITUDE,
  })

  const {
    data: airQualityData,
    loading: airQualityLoading,
    error: airQualityError,
  } = useAirQuality({
    latitude: import.meta.env.VITE_LOCATION_LATITUDE,
    longitude: import.meta.env.VITE_LOCATION_LONGITUDE,
  })

  if (weatherLoading || airQualityLoading) {
    return <WeatherComponentStyled>Loading...</WeatherComponentStyled>
  }

  if (weatherError || airQualityError) {
    return <WeatherComponentStyled>Error</WeatherComponentStyled>
  }

  const { singleDayWeather, multiDayWeather } = weatherData!
  const { airQuality } = airQualityData!

  return (
    <WeatherComponentStyled>
      <SingleDayComponent
        weather={singleDayWeather!}
        airQuality={mapAirQualityToProps(airQuality)}
      />
      <MultiDayComponent weather={multiDayWeather} />
    </WeatherComponentStyled>
  )
}

const WeatherComponentStyled = styled.div`
  grid-area: weather;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'weather-today weather-forecast';
`

export default WeatherComponent
