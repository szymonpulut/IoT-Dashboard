import cloudyImageDark from '@/src/assets/images/weather/cloudy_dark.png'
import cloudyImageLight from '@/src/assets/images/weather/cloudy_light.png'
import partlyCloudyImageDark from '@/src/assets/images/weather/partly_cloudy_dark.png'
import partlyCloudyImageLight from '@/src/assets/images/weather/partly_cloudy_light.png'
import rainImageDark from '@/src/assets/images/weather/rain_dark.png'
import rainImageLight from '@/src/assets/images/weather/rain_light.png'
import snowImageDark from '@/src/assets/images/weather/snow_dark.png'
import snowImageLight from '@/src/assets/images/weather/snow_light.png'
import sunImageDark from '@/src/assets/images/weather/sun_dark.png'
import sunImageLight from '@/src/assets/images/weather/sun_light.png'
import thunderstormImageDark from '@/src/assets/images/weather/thunderstorm_dark.png'
import thunderstormImageLight from '@/src/assets/images/weather/thunderstorm_light.png'
import type { ThemeList } from '@/src/themes/themeList.consts'

export type WeatherIcons = {
  [key in ThemeList]: {
    sun: string
    partlyCloudy: string
    snow: string
    cloudy: string
    thunderstorm: string
    rain: string
  }
}

const weatherIcons: WeatherIcons = {
  LIGHT: {
    sun: sunImageLight,
    partlyCloudy: partlyCloudyImageLight,
    snow: snowImageLight,
    cloudy: cloudyImageLight,
    thunderstorm: thunderstormImageLight,
    rain: rainImageLight,
  },
  DARK: {
    sun: sunImageDark,
    partlyCloudy: partlyCloudyImageDark,
    snow: snowImageDark,
    cloudy: cloudyImageDark,
    thunderstorm: thunderstormImageDark,
    rain: rainImageDark,
  },
}

const loadWeatherIcons = ({ name }: { name: ThemeList }) => weatherIcons[name]

export default loadWeatherIcons
