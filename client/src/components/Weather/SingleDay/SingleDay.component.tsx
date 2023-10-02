import React from 'react'
import styled from 'styled-components'

import useTheme from '@/src/hooks/useTheme.hook'

import { mapWeatherCodeToImage } from '../mapWeatherCodeToImage.util'

interface SingleDayComponentProps {
  weather: {
    temperature: { max: number; min: number }
    weatherCode: number
  }
}

const SingleDayComponent: React.FC<SingleDayComponentProps> = ({
  weather: {
    temperature: { max, min },
    weatherCode,
  },
}) => {
  const { currentTheme } = useTheme()

  const weatherIcon = mapWeatherCodeToImage(weatherCode, currentTheme.name)
  const roundedTemp = { max: Math.round(max), min: Math.round(min) }

  return (
    <SingleDayComponentStyled>
      <Image src={weatherIcon} />
      <Temps>
        <LowTemp>
          <p>{roundedTemp.min}&#176;C</p>
          <p>LOW</p>
        </LowTemp>
        <HighTemp>
          <p>{roundedTemp.max}&#176;C</p>
          <p>HIGH</p>
        </HighTemp>
      </Temps>
    </SingleDayComponentStyled>
  )
}

const SingleDayComponentStyled = styled.div`
  grid-area: weather-today;
  background-color: ${({ theme }): string => theme.colors.weatherTodayBg};

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 50%;
`

const Temps = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  font-size: 2em;

  p {
    margin: 1.5vh 0;
  }
`

const LowTemp = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const HighTemp = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export default SingleDayComponent
