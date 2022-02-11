import React, { createContext, useContext, useState } from 'react'
import { Snackbar, SnackbarProps, Slide, Alert } from '@mui/material'

import { AlertProps } from '@mui/lab'

type SetToastFunction = (message: string, options?: ToastFunctionOptions) => void

interface ToastFunctionOptions extends Omit<Partial<SnackbarProps>, 'message'> {
  AlertProps?: AlertProps
}

interface ToastProps extends ToastFunctionOptions {
  key: number
  message: string
  isToastOpen?: boolean
}

interface ToastContextInterface {
  isToastOpen: boolean
  toastProps: ToastProps
  setIsToastOpen: React.Dispatch<React.SetStateAction<boolean>>
  setToastProps: React.Dispatch<React.SetStateAction<ToastProps>>
  toast: {
    info: SetToastFunction
    warning: SetToastFunction
    error: SetToastFunction
    success: SetToastFunction
  }
}

export const ToastContext = createContext<ToastContextInterface | null>(null)

function SlideTransition(props) {
  return <Slide {...props} direction="left" />
}

const Toast: React.FC = () => {
  const { isToastOpen, setIsToastOpen, toastProps, setToastProps } = useContext(ToastContext) || {}

  const handleClose = () => {
    setIsToastOpen(false)
    setToastProps(null)
  }

  const { message, AlertProps, ...rest } = toastProps || {}

  return (
    <Snackbar
      open={isToastOpen}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={4000}
      TransitionComponent={SlideTransition}
      {...rest}
    >
      <Alert onClose={handleClose} {...AlertProps}>
        {message}
      </Alert>
    </Snackbar>
  )
}

const ToastProvider: React.FC = (props) => {
  const { children } = props

  const [isToastOpen, setIsToastOpen] = useState(false)
  const [toastProps, setToastProps] = useState<ToastProps | null>(null)

  const setToast: SetToastFunction = (message, options) => {
    setToastProps({ message, ...options, key: Date.now() })
    setIsToastOpen(true)
  }

  const setToastWithSeverity = (severity: string) => (message, options) =>
    setToast(message, { AlertProps: { severity }, ...options })

  const toast = {
    info: setToastWithSeverity('info'),
    warning: setToastWithSeverity('warning'),
    error: setToastWithSeverity('error'),
    success: setToastWithSeverity('success'),
  }

  const toastContext: ToastContextInterface = { isToastOpen, setIsToastOpen, toastProps, setToastProps, toast }

  return (
    <ToastContext.Provider value={toastContext}>
      {children}
      <Toast />
    </ToastContext.Provider>
  )
}

export default ToastProvider
