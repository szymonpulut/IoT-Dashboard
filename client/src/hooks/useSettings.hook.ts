import { useContext } from 'react'

import { SettingsContext } from '@/src/contexts/SettingsContext.context'

const useSettings = () => useContext(SettingsContext)

export default useSettings
