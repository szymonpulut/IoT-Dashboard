export type AirQuality = {
  [key in PollutionTypes]: AirQualityEntry | undefined
}

export interface AirQualityEntry {
  pollutionType: PollutionTypes
  data: AirQualityData
}

export type PollutionTypes = 'PM25' | 'PM10'

export type AirQualityData = {
  value: number
  alertThreshold: AlertThresholds
}

export type AlertThresholds = 'low' | 'medium' | 'high'
