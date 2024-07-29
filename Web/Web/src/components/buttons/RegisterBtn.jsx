import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterBtn = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/form/register")
  }

  return (
    <button className='tiktok-btn light' onClick={handleRegister}>Register</button>
  )
}

export default RegisterBtn