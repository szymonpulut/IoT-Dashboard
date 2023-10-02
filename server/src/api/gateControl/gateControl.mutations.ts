import type mqtt from 'mqtt'

import { mutationsMap } from '@/mqtt/mqtt.topics.js'

export const toggleMainGate = async (
  toggle: boolean,
  mqttClient: mqtt.MqttClient,
) => {
  if (!toggle) {
    return false
  }

  try {
    await mqttClient.publishAsync(
      mutationsMap.mainGateOpen.topic,
      mutationsMap.mainGateOpen.message,
    )
  } catch {
    return false
  }

  return true
}

export const toggleSmallGate = async (
  toggle: boolean,
  mqttClient: mqtt.MqttClient,
) => {
  if (!toggle) {
    return false
  }

  try {
    await mqttClient.publishAsync(
      mutationsMap.smallGateOpen.topic,
      mutationsMap.smallGateOpen.message,
    )
  } catch {
    return false
  }

  return true
}
