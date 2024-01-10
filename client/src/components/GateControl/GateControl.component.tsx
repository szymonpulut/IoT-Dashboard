import React, { useCallback } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import playAlertSound from '@/src/utils/playAlertSound.utils'

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

  useEffect(() => {
    playAlertSound()
  }, [mainGateStatus, smallGateStatus])

  const onMainGateOpen = useCallback(() => {
    handleOpenMainGate()
  }, [handleOpenMainGate])

  const onSmallGateOpen = useCallback(() => {
    handleOpenSmallGate()
  }, [handleOpenSmallGate])

  return (
    <GateControlComponentStyled>
      <SmallGateButtonComponent onClick={onSmallGateOpen} />
      <MainGateButtonComponent
        status={mainGateStatus ?? 'UNKNOWN'}
        onClick={onMainGateOpen}
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
