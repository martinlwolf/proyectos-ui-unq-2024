import React, { useState } from 'react'
import { postComment } from '../service/Api';


const BoxText = ({ post,setViewModal,setErrorMsg }) => {

    const [comment , setComment ] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(post.id,comment)
        .catch((error)=>{
          setViewModal(true)
          setErrorMsg(error.response.data.message)
        })
        setComment("")
      }

      const handleCommentChange = (e) => {
        const comment = e.target.value
        setComment(comment)
      }



  return (
    <div className='flex-send'>
        <textarea className='search textarea'  placeholder='insert a comment'onChange={handleCommentChange} value={comment}/>
        <button className='tiktok-btn round secondary' onClick={handleSubmit}>Post</button>
    </div>
 
  )
}

export default BoxText
