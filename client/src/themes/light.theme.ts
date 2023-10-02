import type Theme from './theme.type'
import { THEME_LIST } from './themeList.consts'

const lightTheme: Theme = {
  name: THEME_LIST.LIGHT,
  colors: {
    clockBg: '#bae5d5',
    smallGateBg: '#d7acd4',
    mainGateBg: '#eec2c2',
    weatherTodayBg: '#d7acd4',
    weatherForecastBg: '#eec2c2',
    sensorsBg: '#f2f2b0',
    calendarBg: '#bae5d5',
    covidDataBg: '#ffeb99',
    font: '#011065',
  },
}

export default lightTheme
