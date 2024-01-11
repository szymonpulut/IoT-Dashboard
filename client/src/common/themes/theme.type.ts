import type { ThemeList } from './themeList.consts'

interface Theme {
  name: ThemeList
  colors: {
    clockBg: string
    smallGateBg: string
    mainGateBg: string
    weatherTodayBg: string
    weatherForecastBg: string
    sensorsBg: string
    calendarBg: string
    covidDataBg: string
    font: string
  }
}

export default Theme
