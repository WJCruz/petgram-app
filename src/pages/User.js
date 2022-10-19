import React from 'react'
import { AppContext } from '../context/AppContext'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = React.useContext(AppContext)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
