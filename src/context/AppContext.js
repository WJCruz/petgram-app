import React from 'react'

const AppContext = React.createContext()

function AppProvider ({ children }) {
  const [isLogged, setIsLogged] = React.useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const activateAuth = token => {
    setIsLogged(true)
    window.sessionStorage.setItem('token', token)
  }
  const removeAuth = () => {
    setIsLogged(false)
    window.sessionStorage.removeItem('token')
  }

  return (
    <AppContext.Provider value={{
      isLogged,
      activateAuth,
      removeAuth
    }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
