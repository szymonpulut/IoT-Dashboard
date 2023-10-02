import type { DailyForecastSchemaExternal } from './weather.externalSchema.js'
import type { MultiDayWeather, SingleDayWeather } from './weather.types.js'

export const mapWeatherDataToSingleDayWeather = (
  weatherData: DailyForecastSchemaExternal,
): SingleDayWeather => ({
  temperature: {
    min: weatherData.list?.[0].temp.min || 0,
    max: weatherData.list?.[0].temp.max || 0,
  },
  weatherCode: weatherData.list?.[0].weather?.[0].id,
})

export const mapWeatherDataToMultiDayWeather = (
  weatherData: DailyForecastSchemaExternal,
  dayCount: number,
): MultiDayWeather => {
  if (!weatherData.list || weatherData.list.length < dayCount) {
    throw new Error('Invalid weather data format')
  }

  return weatherData.list.slice(1, dayCount + 1).map((dayData) => ({
    temperature: dayData.temp.max,
    weatherCode: dayData.weather?.[0].id,
  }))
}
