import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import playAlertSound from '@/src/utils/playAlertSound.util'

import {
  useMainGateStatusSubscription,
  useSmallGateStatusSubscription,
} from './queries/useMainGateStatusSubscription.query'
import {
  useOpenMainGateMutation,
  useOpenSmallGateMutation,
} from './queries/useOpenGateMutation.query'
import MainGateButtonComponent from './MainGateButton.component'
import SmallGateButtonComponent from './SmallGateButton.component'

const GateControlComponent: React.FC = () => {
  const { status: mainGateStatus } = useMainGateStatusSubscription()
  const { status: smallGateStatus } = useSmallGateStatusSubscription()

  const [handleOpenMainGate] = useOpenMainGateMutation()
  const [handleOpenSmallGate] = useOpenSmallGateMutation()

  // Play sound whenever the status of the gate changes
  // Eventually this should trigger only on changing from CLOSED to OPEN
  // This also triggers when the page is loaded, but that's not a big deal
  useEffect(() => {
    playAlertSound()
  }, [mainGateStatus, smallGateStatus])

  return (
    <GateControlComponentStyled>
      <SmallGateButtonComponent onClick={handleOpenSmallGate} />
      <MainGateButtonComponent
        status={mainGateStatus ?? 'UNKNOWN'}
        onClick={handleOpenMainGate}
      />
    </GateControlComponentStyled>
  )
}

const GateControlComponentStyled = styled.div`
  grid-area: gate-control;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'small-gate main-gate';
`

export default GateControlComponent
