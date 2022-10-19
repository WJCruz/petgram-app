import React from 'react'
import { AppContext } from '../context/AppContext'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = React.useContext(AppContext)
  const { registerMutation, registerLoading, registerError } = useRegisterMutation()
  const { loginMutation, loginLoading, loginError } = useLoginMutation()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    loginMutation({ variables: variable }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const registerErrorMsg = registerError && 'El usuario ya existe o hay algún problema'
  const loginErrorMsg = loginError && 'la contraseña es incorrecta o el usuario no existe'
  return (
    <>
      <UserForm disabled={registerLoading} error={registerErrorMsg} title='Registrarse' onSubmit={onSubmitRegister} />
      <UserForm disabled={loginLoading} error={loginErrorMsg} title='Iniciar Sesión' onSubmit={onSubmitLogin} />
    </>
  )
}
