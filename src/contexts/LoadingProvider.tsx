import React, { createContext, useContext, useState } from 'react'
import CircularLoader from '../components/CircularLoader'

interface Loading {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext<Loading>(null)

export const useLoading = () => useContext(LoadingContext)

const LoadingProvider = (props) => {
  const { children } = props

  const [loading, setLoading] = useState(false)

  const loadingContextValue = {
    loading,
    setLoading,
  }

  return (
    <LoadingContext.Provider value={loadingContextValue}>
      <CircularLoader loading={loading}>{children}</CircularLoader>
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
