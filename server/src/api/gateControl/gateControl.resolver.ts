import { subscriptionsMap } from '../../mqtt/mqtt.topics.js'
import { mqttPubsub } from '../../mqtt/mqttClient.js'

import { toggleMainGate, toggleSmallGate } from './gateControl.mutations.js'

import type { Resolvers } from '@/generated/schema.js'
import { mqttClient } from '@/mqtt/mqttClient.js'

const gateControlResolver: Partial<Resolvers> = {
  Mutation: {
    mainGate: async (_, { toggle }) => await toggleMainGate(toggle, mqttClient),
    smallGate: async (_, { toggle }) =>
      await toggleSmallGate(toggle, mqttClient),
  },
  Subscription: {
    mainGateStatus: {
      subscribe: () =>
        // @ts-expect-error TODO: Fix this, according to the docs, this should be correct
        mqttPubsub.asyncIterator([
          subscriptionsMap.mainGateStatus.pubsubTrigger,
        ]),
    },
    smallGateStatus: {
      subscribe: () =>
        // @ts-expect-error TODO: Fix this, according to the docs, this should be correct
        mqttPubsub.asyncIterator([
          subscriptionsMap.smallGateStatus.pubsubTrigger,
        ]),
    },
  },
}

export default gateControlResolver
