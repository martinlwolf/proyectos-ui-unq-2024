import React from 'react'
import { useNavigate } from 'react-router-dom'



const EditBtn = ( { post } ) => {




    const navigate = useNavigate();

    const handleEditClick = () => {
        localStorage.setItem("idPost",post.id)
        localStorage.setItem("title", post.title)
        localStorage.setItem("description", post.description)
        localStorage.setItem("video", post.video)
        navigate("/form/post/edit")
    }


  return (
   <button className='tiktok-btn dark' onClick={handleEditClick}>Edit</button>
  )
}

export default EditBtn
