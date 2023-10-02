import { useSubscription } from '@apollo/client'

import { graphql } from '@/src/generated'

const mainGateStatusSubscriptionQuery = graphql(`
  subscription MainGateStatus {
    mainGateStatus {
      status
    }
  }
`)

const smallGateStatusSubscriptionQuery = graphql(`
  subscription SmallGateStatus {
    smallGateStatus {
      status
    }
  }
`)

export const useMainGateStatusSubscription = () => {
  const { data, loading, error } = useSubscription(
    mainGateStatusSubscriptionQuery,
  )

  return {
    status: data?.mainGateStatus?.status,
    loading,
    error: Boolean(error),
  }
}

export const useSmallGateStatusSubscription = () => {
  const { data, loading, error } = useSubscription(
    smallGateStatusSubscriptionQuery,
  )

  return {
    status: data?.smallGateStatus?.status,
    loading,
    error: Boolean(error),
  }
}
