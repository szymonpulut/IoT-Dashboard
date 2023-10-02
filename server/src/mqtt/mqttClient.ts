import { PubSub } from 'graphql-subscriptions'
import * as mqtt from 'mqtt'

export const mqttClient = mqtt.connect(
  `ws://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`,
)
export const mqttPubsub = new PubSub()
