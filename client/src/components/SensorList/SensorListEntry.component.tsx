import React from 'react'
import styled from 'styled-components'

interface SensorListEntryComponentProps {
  name?: string
  temp?: number | null
}

const SensorListEntryComponent: React.FC<SensorListEntryComponentProps> = ({
  name,
  temp,
}) => {
  const tempString = temp?.toFixed(1).toString()

  return (
    <SensorListEntryComponentStyled>
      {name}: {tempString}&#176;C
    </SensorListEntryComponentStyled>
  )
}

const SensorListEntryComponentStyled = styled.span`
  padding: 10px 0;
  font-size: 1.5em;
`

export default SensorListEntryComponent
