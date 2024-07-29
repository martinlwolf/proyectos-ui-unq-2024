import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginBtn = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/form/login")
    }

    return (
        <button className='tiktok-btn dark' onClick={handleLogin}>Log in</button>
    )
}

export default LoginBtn