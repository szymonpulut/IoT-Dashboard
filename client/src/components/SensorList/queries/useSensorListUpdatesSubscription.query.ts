import { useSubscription } from '@apollo/client'

import { graphql } from '@/src/generated'

const sensorListUpdatesSubscriptionQuery = graphql(`
  subscription SensorListUpdates {
    sensorListUpdates {
      name
      value
    }
  }
`)

export const useSensorListUpdatesSubscription = () => {
  const { data, loading, error } = useSubscription(
    sensorListUpdatesSubscriptionQuery,
  )

  return {
    data,
    loading,
    error: Boolean(error),
  }
}
