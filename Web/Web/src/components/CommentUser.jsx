import React from 'react'
import UserBtn from './buttons/UserBtn'
import '../styles/comment.css'
import { useNavigate } from 'react-router-dom'

const CommentUser = ( { comment } ) => {
  const navigate = useNavigate()

  return (
    <div className='card-comment'>
      <UserBtn id={comment.user.id} image={comment.user.image}/>
      <div className='info-comment'>
        <h4 className='pointer' onClick={() => { navigate(`/user/${comment.user.id}`) }}>{comment.user.username}</h4>
        <p>{comment.text}</p>
      </div>
    </div>
  )
}

export default CommentUser
