import React from 'react'
import styled from 'styled-components'

import DayComponent from './Day.component'

interface Day {
  temperature: number
  weatherCode: number
}

interface MultiDayComponentProps {
  weather: Day[]
}

const MultiDayComponent: React.FC<MultiDayComponentProps> = ({ weather }) => {
  return (
    <MultiDayComponentStyled>
      {weather.map((singleDayWeather, index) => (
        <DayComponent
          key={index}
          temp={singleDayWeather.temperature}
          weatherCode={singleDayWeather.weatherCode}
        />
      ))}
    </MultiDayComponentStyled>
  )
}

const MultiDayComponentStyled = styled.div`
  grid-area: weather-forecast;
  background-color: ${({ theme }): string => theme.colors.weatherForecastBg};

  display: flex;
  flex-flow: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 12px;
  box-sizing: border-box;
`

export default MultiDayComponent
