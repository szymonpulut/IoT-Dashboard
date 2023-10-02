export interface SingleDayWeather {
  temperature: {
    min: number
    max: number
  }
  weatherCode: number
}

export type MultiDayWeather = {
  temperature: number
  weatherCode: number
}[]
