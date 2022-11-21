import React from 'react'
import { Navigate } from 'react-router-dom'
import AppProvider from '../context/Context'
import { useContext } from 'react'


const ProtectedRoutes = ({ children }) => {

    const {user} = useContext(AppProvider);

    if(!user){
        return <Navigate to='/login' />
    }
  return children;
}

export default ProtectedRoutes