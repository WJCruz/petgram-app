import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`
export const useRegisterMutation = () => {
  const [registerMutation, { data: registerData, loading: registerLoading, error: registerError }] = useMutation(REGISTER)
  return { registerMutation, registerData, registerLoading, registerError }
}
