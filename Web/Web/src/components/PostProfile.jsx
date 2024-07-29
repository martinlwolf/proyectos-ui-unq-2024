import React from 'react'
import "../styles/post.css"
import { useNavigate } from 'react-router-dom'


const PostProfile = ({post}) => {

  const navigate = useNavigate()

  return (
    <div className='postProfile'>
        <video className='imgPost c-tiktok-post' controls>
          <source src={post.video} type="video/mp4"  />
        </video>
        <div className='headerPost' onClick={() => {navigate(`../post/${post.id}`)}}> 
            <p className='title'>{post.title}</p>
            <p >{post.description}</p>
        </div>
    </div>
  )
}

export default PostProfile