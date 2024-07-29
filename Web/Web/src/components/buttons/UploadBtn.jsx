import React from 'react'
import { useNavigate } from 'react-router-dom'

const UploadBtn = () => {
    const navigate = useNavigate()

    const handleUpload = () => {
        localStorage.setItem("idPost","")
        localStorage.setItem("title", "")
        localStorage.setItem("description", "")
        localStorage.setItem("video", "")
        navigate("/form/post/create")
    }

    return (
        <button className='tiktok-btn secondary-outline' onClick={handleUpload}>+ Upload</button>
    )
}

export default UploadBtn