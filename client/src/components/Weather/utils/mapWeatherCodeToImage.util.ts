import type { ThemeList } from '@/src/themes/themeList.consts'

import loadWeatherIcons from './loadWeatherIcons.util'

const isInRange = (value: number, low: number, high: number): boolean => {
  return value >= low && value <= high
}

// This is a function that I wrote a long time ago; I'm not sure how accurate it is, but it works pretty well
export const mapWeatherCodeToImage = (
  code: number,
  themeName: ThemeList,
): string => {
  const weatherIcons = loadWeatherIcons({ name: themeName })

  switch (true) {
    case code === 800:
      return weatherIcons.sun
    case isInRange(code, 200, 299):
      return weatherIcons.thunderstorm
    case isInRange(code, 300, 599):
      return weatherIcons.rain
    case isInRange(code, 600, 699):
      return weatherIcons.snow
    case isInRange(code, 801, 899) && code !== 803 && code !== 804:
      return weatherIcons.partlyCloudy
    case code === 803 || code === 804:
      return weatherIcons.cloudy
    default:
      return ''
  }
}
