import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { AppContext } from './context/AppContext'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isLogged } = React.useContext(AppContext)
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={isLogged ? <Favs /> : <Navigate to='/login' />} />
          <Route path='/user' element={isLogged ? <User /> : <Navigate to='/login' />} />
          <Route path='/login' element={!isLogged ? <NotRegisteredUser /> : <Navigate to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
