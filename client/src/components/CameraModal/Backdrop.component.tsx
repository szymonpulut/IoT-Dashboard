import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

const ESCAPE_KEYCODE = 27

interface BackdropComponentProps {
  isOn: boolean
  onClick: () => void
}

const BackdropComponent: React.FC<BackdropComponentProps> = ({
  isOn,
  onClick,
}) => {
  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === ESCAPE_KEYCODE) {
        onClick()
      }
    },
    [onClick],
  )

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [keyDownHandler])

  if (isOn) {
    document.addEventListener('keydown', keyDownHandler)
  }

  return isOn ? (
    <BackdropComponentStyled onClick={onClick} role="dialog" tabIndex={-1} />
  ) : null
}

const BackdropComponentStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export default BackdropComponent
