import { subscriptionsMap } from '@/mqtt/mqtt.topics.js'
import { mainGateStatusMap } from '@/mqtt/mqtt.topics.secret'
import { mqttPubsub } from '@/mqtt/mqttClient.js'

export const mainGateStatusHandler = (message: string) => {
  return mqttPubsub.publish(subscriptionsMap.mainGateStatus.pubsubTrigger, {
    mainGateStatus: { status: mainGateStatusMap(message) },
  })
}
