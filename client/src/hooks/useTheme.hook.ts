import { useCallback } from 'react'

import darkTheme from '../themes/dark.theme'
import lightTheme from '../themes/light.theme'
import type Theme from '../themes/theme.type'
import { MINUTE_TO_MILLISECOND } from '../utils/timeUnitConversion.utils'

import useInterval from './useInterval.hook'
import useSettings from './useSettings.hook'

const UPDATE_INTERVAL_IN_MS = 30 * MINUTE_TO_MILLISECOND

const shouldDisplayDarkTheme = (date: Date): boolean => {
  const hour = date.getHours()

  return hour > 19 || hour < 8
}

interface UseThemeReturn {
  currentTheme: Theme
  toggleTheme: () => void
}

const useTheme = (): UseThemeReturn => {
  const { settings, setSettings } = useSettings()

  const checkAndMaybeUpdateTheme = useCallback(() => {
    const date = new Date()

    if (shouldDisplayDarkTheme(date)) {
      setSettings({ theme: darkTheme })
    } else {
      setSettings({ theme: lightTheme })
    }
  }, [setSettings])

  useInterval(checkAndMaybeUpdateTheme, UPDATE_INTERVAL_IN_MS)

  const toggleTheme = useCallback(() => {
    if (settings.theme.name === 'DARK') {
      setSettings({ theme: lightTheme })
    } else if (settings.theme.name === 'LIGHT') {
      setSettings({ theme: darkTheme })
    }
  }, [setSettings, settings])

  return { currentTheme: settings.theme, toggleTheme }
}

export default useTheme
