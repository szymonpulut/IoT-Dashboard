import { subscriptionsMap } from '@/mqtt/mqtt.topics.js'
import { smallGateStatusMap } from '@/mqtt/mqtt.topics.secret'
import { mqttPubsub } from '@/mqtt/mqttClient.js'

export const smallGateStatusHandler = (message: string) => {
  return mqttPubsub.publish(subscriptionsMap.smallGateStatus.pubsubTrigger, {
    smallGateStatus: { status: smallGateStatusMap(message) },
  })
}
