import React, { useEffect, useState } from 'react'

interface ToggleContentProps {
  content: React.FunctionComponent<{
    hide: () => void
    isShown: boolean
    toggleHandler: () => void
  }>
  toggle: (show: () => void) => void
  defaultIsShown?: boolean
}

const ToggleContent: React.FunctionComponent<ToggleContentProps> = (props) => {
  const { toggle, content, defaultIsShown = false } = props
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const show = () => setIsShown(true)
  const toggleHandler = () => setIsShown(!isShown)

  useEffect(() => {
    // Ensure that the modal will show by default only after the page has mounted
    if (defaultIsShown) {
      setIsShown(true)
    }
  }, [])

  return (
    <>
      {toggle?.(show)}
      {isShown && content({ hide, isShown, toggleHandler })}
    </>
  )
}

export default ToggleContent
