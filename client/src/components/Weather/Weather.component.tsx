import React from 'react'
import styled from 'styled-components'

import MultiDayComponent from './MultiDay/MultiDay.component'
import SingleDayComponent from './SingleDay/SingleDay.component'
import useWeather from './useWeather.query'

const WeatherComponent: React.FC = () => {
  const { data, loading, error } = useWeather('KRK')

  if (loading) {
    return <WeatherComponentStyled>Loading...</WeatherComponentStyled>
  }

  if (error) {
    return <WeatherComponentStyled>Error</WeatherComponentStyled>
  }

  const { singleDayWeather, multiDayWeather } = data!

  return (
    <WeatherComponentStyled>
      <SingleDayComponent weather={singleDayWeather} />
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
