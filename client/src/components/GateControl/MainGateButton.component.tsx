import React from 'react'
import styled from 'styled-components'

type MainGateStatus = 'OPEN' | 'CLOSED' | 'PARTIALLY_OPEN' | 'UNKNOWN'

const mapStatusToStatusString = (status: string): string => {
  switch (status) {
    case 'OPEN':
      return 'open'
    case 'CLOSED':
      return 'closed'
    case 'PARTIALLY_OPEN':
      return 'partially open'
    default:
      return 'unknown'
  }
}

interface MainGateButtonComponentProps {
  onClick: () => void
  status: MainGateStatus
}

const MainGateButtonComponent: React.FC<MainGateButtonComponentProps> = ({
  status,
  onClick,
}) => {
  return (
    <MainGateButtonComponentStyled onClick={onClick}>
      <MainGateText>Main Gate</MainGateText>
      <MainGateStatusText>{mapStatusToStatusString(status)}</MainGateStatusText>
    </MainGateButtonComponentStyled>
  )
}

const MainGateButtonComponentStyled = styled.div`
  grid-area: main-gate;
  background-color: ${({ theme }): string => theme.colors.mainGateBg};

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

const MainGateText = styled.span`
  font-size: 2.25em;
`

const MainGateStatusText = styled.span`
  font-size: 0.9em;
`

export default MainGateButtonComponent
