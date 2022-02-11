import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Amplify } from 'aws-amplify'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import ToastProvider from '../components/ToastProvider'
import LoadingProvider from '../contexts/LoadingProvider'
import { configureStore } from '../store/configureStore'
import config from '../config'
import { webTheme } from '../theme/Theme'

const store = configureStore()

const Providers = ({ children, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={webTheme}>
            <CssBaseline />
            <LoadingProvider>
              <ToastProvider>{children}</ToastProvider>
            </LoadingProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </ReduxProvider>
  )
}

export default Providers
