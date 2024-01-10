import DEFAULT_ALERT from '@/src/assets/audio/Deneb.wav'

const playAlertSound = (alert = DEFAULT_ALERT) => {
  new Audio(alert).play()
}

export default playAlertSound
