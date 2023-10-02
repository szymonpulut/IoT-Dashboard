import { useMutation } from '@apollo/client'

import { graphql } from '@/src/generated'

const openMainGateMutationQuery = graphql(`
  mutation OpenMainGate($toggle: Boolean!) {
    mainGate(toggle: $toggle)
  }
`)

const openSmallGateMutationQuery = graphql(`
  mutation OpenSmallGate($toggle: Boolean!) {
    smallGate(toggle: $toggle)
  }
`)

const useOpenMainGateMutation = () => {
  const [openMainGate] = useMutation(openMainGateMutationQuery)

  const handleOpenMainGate = async () => {
    await openMainGate({ variables: { toggle: true } })
  }

  return { handleOpenMainGate }
}

const useOpenSmallGateMutation = () => {
  const [openSmallGate] = useMutation(openSmallGateMutationQuery)

  const handleOpenSmallGate = async () => {
    await openSmallGate({ variables: { toggle: true } })
  }

  return { handleOpenSmallGate }
}

export { useOpenMainGateMutation, useOpenSmallGateMutation }
