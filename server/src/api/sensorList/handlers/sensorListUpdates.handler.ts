import { subscriptionsMap } from '@/mqtt/mqtt.topics.js'
import { mqttPubsub } from '@/mqtt/mqttClient.js'

export const sensorListUpdatesHandler = (message: string, sensorName: string) =>
  mqttPubsub.publish(subscriptionsMap.mainGateStatus.pubsubTrigger, {
    sensorListUpdates: { name: sensorName, value: message },
  })
