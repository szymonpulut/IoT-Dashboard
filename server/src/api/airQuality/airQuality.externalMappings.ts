import type { AirQualitySchemaExternal } from './airQuality.externalSchema.js'
import type { AirQuality, PollutionTypes } from './airQuality.types.js'
import { determineAlertThreshold } from './airQuality.utils.js'

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
