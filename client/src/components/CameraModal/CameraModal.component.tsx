import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import useInterval from '@/src/hooks/useInterval.hook'
import { SECOND_TO_MILLISECOND } from '@/src/utils/timeUnitConversion.utils'

import BackdropComponent from './Backdrop.component'

interface CameraModalComponentProps {
  onClick: () => void
  isOn: boolean
}

const UPDATE_INTERVAL_IN_MS = 3 * SECOND_TO_MILLISECOND

const CameraModalComponent: React.FC<CameraModalComponentProps> = ({
  onClick,
  isOn,
}) => {
  const [, setToggle] = useState(false)

  const refreshCameraView = (isOn: boolean): void => {
    if (isOn) {
      setToggle((toggle) => !toggle)
    }
  }

  useInterval(() => {
    if (isOn) {
      refreshCameraView(isOn)
    }
  }, UPDATE_INTERVAL_IN_MS)

  // preventCaching is necessary, so the browser does not cache the image
  const preventCaching = `&preventCaching=${Math.floor(
    Math.random() * 1_000_000,
  )}`
  const cameraView = `${import.meta.env.VITE_CAMERA_FEED_URL}${preventCaching}`

  return isOn
    ? ReactDOM.createPortal(
        <>
          <BackdropComponent isOn={isOn} onClick={onClick} />
          <CameraModalComponentStyled onClick={onClick}>
            <img src={cameraView} alt="View from camera" />
          </CameraModalComponentStyled>
        </>,
        document.getElementById('camera-modal')!,
      )
    : null
}

const CameraModalComponentStyled = styled.div`
  z-index: 200;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  width: 704px;
  height: 576px;

  border-radius: 6px;
  box-sizing: border-box;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);

  img {
    width: 704px;
    height: 576px;
  }
`

export default CameraModalComponent
