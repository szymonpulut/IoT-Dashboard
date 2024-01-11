import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useState } from 'react'

import darkTheme from '@/src/common/themes/dark.theme'

import type Theme from '../themes/theme.type'

interface Settings {
  theme: Theme
}

interface SettingsContextType {
  settings: Settings
  setSettings: (newSettings: Partial<Settings>) => void
}

const defaultSettings: Settings = {
  theme: darkTheme,
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  setSettings: () => {},
})

const SettingsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentSettings, setCurrentSettings] = useState(defaultSettings)

  const setSettings = useCallback((newSettings: Partial<Settings>) => {
    setCurrentSettings((oldSettings) => ({ ...oldSettings, ...newSettings }))
  }, [])

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, setSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer

export default SettingsContextProvider
