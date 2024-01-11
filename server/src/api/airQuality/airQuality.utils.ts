import type { AlertThresholds, PollutionTypes } from './airQuality.types'

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

export const determineAlertThreshold = (
  name: PollutionTypes,
  value: number,
): AlertThresholds => {
  if (name === 'PM10') return determineAlertThresholdForPM10(value)
  if (name === 'PM25') return determineAlertThresholdForPM25(value)
}
