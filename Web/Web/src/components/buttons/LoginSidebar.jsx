import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginSidebar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/form/login")
    }

    return (
        <button className="tiktok-btn dark button-login" onClick={handleLogout}>Log in</button>
    )
}

export default LoginSidebar