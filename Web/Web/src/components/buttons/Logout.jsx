import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Logout = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
      localStorage.removeItem('img')
        navigate("/form/login")
    }

  return (
    <button className="tiktok-btn light button-login" onClick={handleLogout}>Log out</button> 
  )
}
