import { useSubscription } from '@apollo/client'

import { graphql } from '@/src/generated'

export interface SensorUpdate {
  name: string
  value: number
}

const sensorListUpdatesSubscriptionQuery = graphql(`
  subscription SensorListUpdates {
    sensorListUpdates {
      name
      value
    }
  }
`)

const mergeUpdates = (
  existingData: SensorUpdate[],
  newUpdates: SensorUpdate[],
) => {
  return newUpdates.reduce(
    (acc, update) => {
      const existingIndex = acc.findIndex((item) => item.name === update.name)

      if (existingIndex !== -1) {
        acc[existingIndex] = { ...acc[existingIndex], ...update }
      } else {
        acc.push(update)
      }

      return acc
    },
    [...existingData],
  )
}

export const useSensorListUpdatesSubscription = () => {
  const { data, loading, error } = useSubscription(
    sensorListUpdatesSubscriptionQuery,
  )

  return {
    data: {
      sensorListUpdates: mergeUpdates(data?.sensorListUpdates || [], []),
    },
    loading,
    error: Boolean(error),
  }
}
