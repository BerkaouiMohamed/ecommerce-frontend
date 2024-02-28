import React, { useContext } from 'react'
import { contextUser } from '../context/UserContext'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

function ProtectedRoutes() {
    const {auth}=useContext(contextUser)
    const location=useLocation()
  return (
auth?<Outlet/>:<Navigate to={'/login'} state={{from:location}}/>

  )
}

export default ProtectedRoutes