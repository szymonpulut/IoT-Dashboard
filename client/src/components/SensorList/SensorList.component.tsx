import React from 'react'
import styled from 'styled-components'

import SensorListEntryComponent from './SensorListEntry.component'
import { sortSensorListEntries } from './sortSensorListEntries.util'
import { useSensorListUpdatesSubscription } from './useSensorListUpdatesSubscription.query'

interface SensorListComponentProps {
  onClick: () => void
}

const SensorListComponent: React.FC<SensorListComponentProps> = ({
  onClick,
}) => {
  const { data, loading, error } = useSensorListUpdatesSubscription()

  if (loading) {
    return <SensorListComponentStyled>Loading...</SensorListComponentStyled>
  }

  if (error) {
    return <SensorListComponentStyled>Error</SensorListComponentStyled>
  }

  const { sensorListUpdates } = data!
  const sortedSensorListUpdates = sensorListUpdates.sort(sortSensorListEntries)

  return (
    <SensorListComponentStyled onClick={onClick}>
      {sortedSensorListUpdates?.map((sensor) => (
        <SensorListEntryComponent name={sensor.name} temp={sensor.value} />
      ))}
    </SensorListComponentStyled>
  )
}

const SensorListComponentStyled = styled.div`
  grid-area: sensor-list;
  background-color: ${({ theme }): string => theme.colors.sensorsBg};

  display: flex;
  flex-flow: column;
  align-items: left;
  justify-content: center;

  padding: 20px;
  box-sizing: border-box;
`

export default SensorListComponent
