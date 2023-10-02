import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import SettingsContextProvider from './contexts/SettingsContext.context.tsx'
import { apolloClient } from './utils/apolloClient.utils.ts'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
