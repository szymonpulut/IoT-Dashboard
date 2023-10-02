import { mainGateStatusHandler } from '../api/gateControl/handlers/mainGateStatus.handler.js'
import { smallGateStatusHandler } from '../api/gateControl/handlers/smallGateStatus.handler.js'
import { sensorListUpdatesHandler } from '../api/sensorList/handlers/sensorListUpdates.handler.js'

import {
  mutationsMapSecret,
  subscriptionsMapSecret,
} from './mqtt.topics.secret.js'

interface SingleTopicSubscription {
  topic: string
  handler: (message: string) => void
  pubsubTrigger: string
}

type TopicsList = { name: string; topic: string }[]

interface MultiTopicSubscription {
  topicsList: TopicsList
  handler: (message: string, ...otherValues: unknown[]) => void
  pubsubTrigger: string
}

type SubscriptionNamesList = 'mainGateStatus' | 'smallGateStatus' | 'sensorList'

type SubscriptionsMap = {
  [name in SubscriptionNamesList]:
    | SingleTopicSubscription
    | MultiTopicSubscription
}

export const subscriptionsMap = {
  mainGateStatus: {
    topic: subscriptionsMapSecret.mainGateStatus.topic,
    handler: mainGateStatusHandler,
    pubsubTrigger: 'MAIN_GATE_STATUS',
  },
  smallGateStatus: {
    topic: subscriptionsMapSecret.smallGateStatus.topic,
    handler: smallGateStatusHandler,
    pubsubTrigger: 'SMALL_GATE_STATUS',
  },
  sensorList: {
    topicsList: subscriptionsMapSecret.sensorList.topicsList,
    handler: sensorListUpdatesHandler,
    pubsubTrigger: 'SENSOR_LIST_UPDATES',
  },
} satisfies SubscriptionsMap

const topicListToTopics = (topicsList: TopicsList) =>
  topicsList.map((topic) => topic.topic)

export const topics = Object.values(subscriptionsMap).flatMap((subscription) =>
  'topic' in subscription
    ? [subscription.topic]
    : topicListToTopics(subscription.topicsList),
)

export const mutationsMap = {
  mainGateOpen: {
    topic: mutationsMapSecret.mainGateOpen.topic,
    message: mutationsMapSecret.mainGateOpen.message,
  },
  smallGateOpen: {
    topic: mutationsMapSecret.smallGateOpen.topic,
    message: mutationsMapSecret.smallGateOpen.message,
  },
}
