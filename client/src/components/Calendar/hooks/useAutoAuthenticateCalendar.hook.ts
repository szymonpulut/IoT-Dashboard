import { useEffect } from 'react'

import { useBaseUrl } from '@/src/hooks/useBaseUrl.hook'
import type { UrlParamsObject } from '@/src/hooks/useUrlParams.hook'

import { CALENDAR_CALLBACK_CODE_URL_PARAM } from '../Calendar.consts'

interface UseAutoAuthenticateCalendarArgs {
  handleAuthenticateCalendar: (code: string) => Promise<boolean>
  urlParams: UrlParamsObject
}

export const useAutoAuthenticateCalendar = ({
  handleAuthenticateCalendar,
  urlParams,
}: UseAutoAuthenticateCalendarArgs) => {
  const baseUrl = useBaseUrl()

  useEffect(() => {
    const authenticateCalendar = async () => {
      if (CALENDAR_CALLBACK_CODE_URL_PARAM in urlParams) {
        const success = await handleAuthenticateCalendar(
          urlParams[CALENDAR_CALLBACK_CODE_URL_PARAM],
        )

        if (success) {
          window.location.replace(baseUrl)
        }
      }
    }
    authenticateCalendar()
  }, [baseUrl, handleAuthenticateCalendar, urlParams])
}
