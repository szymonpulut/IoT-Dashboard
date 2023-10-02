import React from 'react'
import styled from 'styled-components'

interface SmallGateButtonComponentProps {
  onClick: () => void
}

const SmallGateButtonComponent: React.FC<SmallGateButtonComponentProps> = ({
  onClick,
}) => {
  return (
    <SmallGateButtonComponentStyled onClick={onClick}>
      <SmallGateText>Small Gate</SmallGateText>
    </SmallGateButtonComponentStyled>
  )
}

const SmallGateButtonComponentStyled = styled.div`
  grid-area: small-gate;
  background-color: ${({ theme }): string => theme.colors.smallGateBg};

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

const SmallGateText = styled.span`
  font-size: 2.25em;
`

export default SmallGateButtonComponent
