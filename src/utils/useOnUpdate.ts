import { useState, useEffect } from 'react'

type Callback = (prevData: any, data: any) => void

/**
 * Calls the callback parameter on update of data
 * @param callback callback to be called on update of data
 * @param data any data
 */
const useOnUpdate = (callback: Callback, data: any) => {
  const [prevData, setPrevData] = useState(data)
  useEffect(() => {
    callback(prevData, data)
    setPrevData(data)
  }, [...data])
}

export default useOnUpdate
