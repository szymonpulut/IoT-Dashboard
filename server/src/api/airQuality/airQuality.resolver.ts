import { getAirQuality } from './airQuality.dataSources.js'

import type { Resolvers } from '@/generated/schema.js'

const airQualityResolver: Partial<Resolvers> = {
  Query: {
    airQuality: (_, { latitude, longitude }) =>
      getAirQuality({ latitude, longitude }),
  },
}

export default airQualityResolver
