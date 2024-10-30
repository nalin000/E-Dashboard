import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const PrivateComponent = () => {
    const auth=localStorage.getItem('user');
      return auth?<Outlet/>:<Navigate to="/SignUp"/>//navigate is a keyord here
}

export default PrivateComponent
