import React from 'react'
import styled from 'styled-components'

import useTheme from '@/src/hooks/useTheme.hook'

import { mapWeatherCodeToImage } from '../mapWeatherCodeToImage.util'

interface DayComponentProps {
  temp: number
  weatherCode: number
}

const DayComponent: React.FC<DayComponentProps> = ({ temp, weatherCode }) => {
  const { currentTheme } = useTheme()

  const weatherIcon = mapWeatherCodeToImage(weatherCode, currentTheme.name)
  const roundedTemp = Math.round(temp)

  return (
    <DayComponentStyled>
      <Image src={weatherIcon} />
      <TemperatureText>{roundedTemp}&#176;C</TemperatureText>
    </DayComponentStyled>
  )
}

const DayComponentStyled = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin: 10px;
  padding: 3px 0;
`

const Image = styled.img`
  height: 75%;
  width: 75%;
`

const TemperatureText = styled.span``

export default DayComponent
