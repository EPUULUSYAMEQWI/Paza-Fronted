import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from '../components/ProtectedRoutes'
import Home from './Home'
import Login from './Login'
import Recovery from './Recovery'
import Register from './Register'
import SignIn from './SignIn'
import SignUp from './SignUp'

const RootPage = () => {
  return (
    <Routes>
        <Route path='login' element={ <Login/>} />
        <Route path='register' element={ <Register/>} />
        <Route path='recover' element={ <Recovery/>} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />

        <Route path='/*' element={<ProtectedRoutes> <Home /> </ProtectedRoutes>} />
    </Routes>
  )
}

export default RootPage