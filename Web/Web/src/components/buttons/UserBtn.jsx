import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserBtn = ({ id, image }) => {
    const navigate = useNavigate()

    const handleUpload = () => {
        navigate(`/user/${id}`)
    }

    return (
        <button className='btn-none round' onClick={handleUpload}>
            <img className='round' src={image} alt="imagen de usuario" />
        </button>
    )
}

export default UserBtn