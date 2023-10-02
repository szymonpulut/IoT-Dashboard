export const subscriptionsMapSecret = {
  mainGateStatus: {
    topic: 'mqtt/topic/maingate/status',
  },
  smallGateStatus: {
    topic: 'mqtt/topic/smallgate/status',
  },
  sensorList: {
    topicsList: [
      { name: 'Sensor 1', topic: 'mqtt/topic/sensor1/open' },
      { name: 'Sensor 2', topic: 'mqtt/topic/sensor2/open' },
      { name: 'Sensor 3', topic: 'mqtt/topic/sensor3/open' },
      { name: 'Sensor 4', topic: 'mqtt/topic/sensor4/open' },
    ],
  },
}

export const mutationsMapSecret = {
  mainGateOpen: {
    topic: 'mqtt/topic/maingate/open',
    message: 'toggle',
  },
  smallGateOpen: {
    topic: 'mqtt/topic/smallGate/open',
    message: 'toggle',
  },
}

type SmallGateStatus = 'OPEN' | 'CLOSED' | 'UNKNOWN'

export const smallGateStatusMap = (externalStatus: string): SmallGateStatus => {
  switch (externalStatus) {
    case 'OPEN':
      return 'OPEN'
    case 'CLOSED':
      return 'CLOSED'
    case 'UNKNOWN':
    default:
      return 'UNKNOWN'
  }
}

type MainGateStatus = 'OPEN' | 'CLOSED' | 'PARTIALLY_OPEN' | 'UNKNOWN'

export const mainGateStatusMap = (externalStatus: string): MainGateStatus => {
  switch (externalStatus) {
    case 'OPEN':
      return 'OPEN'
    case 'CLOSED':
      return 'CLOSED'
    case 'PARTIAL':
      return 'PARTIALLY_OPEN'
    case 'UNKNOWN':
    default:
      return 'UNKNOWN'
  }
}
