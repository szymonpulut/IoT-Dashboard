import { OAuth2Client } from 'google-auth-library'

import {
  CALENDAR_AUTH_REDIRECT_URI,
  CALENDAR_CLIENT_ID,
  CALENDAR_CLIENT_SECRET,
} from './calendar.configConsts'

const oAuthClientsMap = new Map<string, OAuth2Client>()

export const getOAuthClient = (userId: string) => {
  if (oAuthClientsMap.has(userId)) {
    return oAuthClientsMap.get(userId)
  }

  const oAuthClient = new OAuth2Client(
    CALENDAR_CLIENT_ID,
    CALENDAR_CLIENT_SECRET,
    CALENDAR_AUTH_REDIRECT_URI,
  )

  oAuthClientsMap.set(userId, oAuthClient)

  return oAuthClient
}

export const getLoginUrl = (userId: string) => {
  const oAuthClient = getOAuthClient(userId)

  const authUrl = oAuthClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/calendar.readonly'],
  })

  return authUrl
}

export const getLoginStatus = (userId: string) =>
  oAuthClientsMap.has(userId) &&
  oAuthClientsMap.get(userId).credentials.expiry_date > Date.now()

export const authenticate = async (userId: string, code: string) => {
  const oAuthClient = getOAuthClient(userId)

  const { tokens } = await oAuthClient.getToken(code)

  oAuthClient.setCredentials(tokens)

  return true
}
