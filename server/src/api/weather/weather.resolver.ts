import {
  getMultiDayWeather,
  getSingleDayWeather,
} from './weather.dataSources.js'

import type { Resolvers } from '@/generated/schema.js'

const weatherResolver: Partial<Resolvers> = {
  Query: {
    singleDayWeather: (_, { city }) => getSingleDayWeather(city),
    multiDayWeather: (_, { city }) => getMultiDayWeather(city),
  },
}

export default weatherResolver
