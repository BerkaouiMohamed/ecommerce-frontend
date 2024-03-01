import React, { useContext } from 'react'
import { contextUser } from '../context/UserContext'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

function ProtectedRoutes() {
    const {auth}=useContext(contextUser)
    const location=useLocation()
    console.log(auth);
  return (auth===undefined?null:
auth===null?<Navigate to={'/login'} state={{from:location}}/>:<Outlet/>

  )
}

export default ProtectedRoutes