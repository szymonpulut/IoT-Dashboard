import type { AirQualityQuery } from '@/src/generated/graphql'

import type { SingleDayComponentProps } from '../components/SingleDay/SingleDay.component'

import { mapThresholdToColor } from './mapThresholdToColor.util'

export const mapAirQualityToProps = (
  airQuality: AirQualityQuery['airQuality'],
): SingleDayComponentProps['airQuality'] => ({
  PM25: {
    value: airQuality.PM25.data.value,
    color: mapThresholdToColor(airQuality.PM25.data.alertThreshold),
  },
  PM10: {
    value: airQuality.PM10.data.value,
    color: mapThresholdToColor(airQuality.PM10.data.alertThreshold),
  },
})
