import { subscriptionsMap } from '../../mqtt/mqtt.topics.js'
import { mqttPubsub } from '../../mqtt/mqttClient.js'

import type { Resolvers } from '@/generated/schema.js'

const sensorListResolver: Partial<Resolvers> = {
  Subscription: {
    sensorListUpdates: {
      subscribe: () =>
        // @ts-expect-error TODO: Fix this, according to the docs, this should be correct
        mqttPubsub.asyncIterator([subscriptionsMap.sensorList.pubsubTrigger]),
    },
  },
}

export default sensorListResolver
