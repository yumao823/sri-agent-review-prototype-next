import { useEffect, useRef } from 'react'

const IS_CLIENT = typeof document !== 'undefined'

/**
 * Returns a script element with specified id and either src or innerHTMl set
 * @note src takes precedence over innerHTML for scripts if both are passed
 * @param {string} id - id of script element
 * @param {string=} src - src prop on script element
 * @param {string=} innerHTML - innerHTML of script element
 * @param {Object=} options - extra options to pass props to script element
 * @param {boolean=} options.async - async prop on script element
 * @param {boolean=} options.defer - defer prop on script element
 * @returns script element
 */
const useScript = (id: string, src?: string, innerHTML?: string, options?: { async?: boolean; defer?: boolean }) => {
  const scriptRef = useRef(null)
  const getScript = () => {
    if (IS_CLIENT) {
      if (!scriptRef.current) {
        const scriptElement = document.createElement('script')
        scriptElement.setAttribute('id', id)
        if (options && options.async) scriptElement.async = true
        if (options && options.defer) scriptElement.defer = true
        if (src) scriptElement.setAttribute('src', src)
        if (innerHTML) scriptElement.innerHTML = innerHTML
        scriptRef.current = scriptElement
        return scriptElement
      }
      const scriptElement = document.querySelector(`#${id}`)
      return scriptElement
    }
    return null
  }
  useEffect(() => {
    const child = scriptRef.current
    if (child && IS_CLIENT) {
      document.body.appendChild(child)
    }
    return () => {
      if (child && IS_CLIENT) {
        document.body.removeChild(child)
      }
    }
  }, [])
  return getScript()
}

export default useScript
