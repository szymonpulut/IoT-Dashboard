import {
  getMultiDayWeather,
  getSingleDayWeather,
} from './weather.dataSources.js'

import type { Resolvers } from '@/generated/schema.js'

const weatherResolver: Partial<Resolvers> = {
  Query: {
    singleDayWeather: (_, { latitude, longitude }) =>
      getSingleDayWeather({ latitude, longitude }),
    multiDayWeather: (_, { latitude, longitude }) =>
      getMultiDayWeather({ latitude, longitude }),
  },
}

export default weatherResolver
