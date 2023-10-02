import { subscriptionsMap } from './mqtt.topics.js'

const messageReceived = (topic: string, payload: Buffer) => {
  const message = payload.toString()

  switch (topic) {
    case subscriptionsMap.mainGateStatus.topic:
      return subscriptionsMap.mainGateStatus.handler(message)
    case subscriptionsMap.smallGateStatus.topic:
      return subscriptionsMap.smallGateStatus.handler(message)
    default: {
      const sensorTopic = subscriptionsMap.sensorList.topicsList.find(
        (topicFromList) => topicFromList.topic === topic,
      )

      if (sensorTopic) {
        return subscriptionsMap.sensorList.handler(message, sensorTopic.name)
      }
    }
  }
}

export default messageReceived
