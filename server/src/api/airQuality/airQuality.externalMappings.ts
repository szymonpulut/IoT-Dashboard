import type { AirQualitySchemaExternal } from './airQuality.externalSchema.js'
import type {
  AirQuality,
  AlertThresholds,
  PollutionTypes,
} from './airQuality.types.js'

const ALLOWED_EXTERNAL_POLLUTION_TYPES = ['PM10', 'PM25']

export const mapAirQualityDataToAirQuality = (
  airQualityData: AirQualitySchemaExternal,
): AirQuality =>
  airQualityData.current.values
    .filter((airQualityValue) =>
      ALLOWED_EXTERNAL_POLLUTION_TYPES.includes(airQualityValue.name),
    )
    .reduce((accumulator, airQualityValue) => {
      const pollutionType = airQualityValue.name as PollutionTypes
      accumulator[pollutionType] = {
        pollutionType,
        data: {
          value: airQualityValue.value,
          alertThreshold: determineAlertThreshold(
            pollutionType,
            airQualityValue.value,
          ),
        },
      }
      return accumulator
    }, {} as AirQuality)

const determineAlertThresholdForPM10 = (value: number): AlertThresholds => {
  if (value <= 20) return 'low'
  if (value <= 50) return 'medium'
  return 'high'
}

const determineAlertThresholdForPM25 = (value: number): AlertThresholds => {
  if (value <= 10) return 'low'
  if (value <= 25) return 'medium'
  return 'high'
}

const determineAlertThreshold = (
  name: PollutionTypes,
  value: number,
): AlertThresholds => {
  if (name === 'PM10') return determineAlertThresholdForPM10(value)
  if (name === 'PM25') return determineAlertThresholdForPM25(value)
}
