import React from 'react'
import { useNavigate } from 'react-router-dom'

const TextCommentBtn = () => {

    const navigate = useNavigate();

  return (
    <button className='tiktok-btn button-flex btn-comment'onClick={()=>{navigate("/form/login")}}> Log in to comment</button>
  )
}

export default TextCommentBtn
