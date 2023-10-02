import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import CalendarComponent from './components/Calendar/Calendar.component'
import CameraModalComponent from './components/CameraModal/CameraModal.component'
import ClockComponent from './components/Clock/Clock.component'
import GateControlComponent from './components/GateControl/GateControl.component'
import SensorListComponent from './components/SensorList/SensorList.component'
import WeatherComponent from './components/Weather/Weather.component'
import useTheme from './hooks/useTheme.hook'

import './index.css'

const App: React.FC = () => {
  const { currentTheme } = useTheme()
  const [cameraModalIsOpen, setCameraModalIsOpen] = useState(false)

  console.log(cameraModalIsOpen, 'cmis')

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledApp>
        <CameraModalComponent
          onClick={() => setCameraModalIsOpen(false)}
          isOn={cameraModalIsOpen}
        />
        <ClockComponent />
        <WeatherComponent />
        <GateControlComponent />
        <SensorListComponent onClick={() => setCameraModalIsOpen(true)} />
        <CalendarComponent />
      </StyledApp>
    </ThemeProvider>
  )
}

const StyledApp = styled.div`
  color: ${({ theme }): string => theme.colors.font};
  height: 100%;
  width: 100%;
  line-height: 1.25;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'clock clock gate-control gate-control'
    'clock clock gate-control gate-control'
    'weather weather sensor-list calendar'
    'weather weather sensor-list calendar';
`

export default App
