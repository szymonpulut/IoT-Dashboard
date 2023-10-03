import { subscriptionsMap } from '@/mqtt/mqtt.topics.js'
import { mqttPubsub } from '@/mqtt/mqttClient.js'

export interface SensorUpdate {
  name: string
  value: string
}

const sensorListData: { [name: string]: string } = {}

export const sensorListUpdatesHandler = (
  message: string,
  sensorName: string,
) => {
  sensorListData[sensorName] = message

  mqttPubsub.publish(subscriptionsMap.sensorList.pubsubTrigger, {
    sensorListUpdates: Object.entries(sensorListData).map(([name, value]) => ({
      name: name,
      value: value,
    })),
  })
}
