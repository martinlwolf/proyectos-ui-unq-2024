import React from 'react'
import CommentUser from './CommentUser'
import '../styles/comment.css'

const CommentBox = ( { comments } ) => {
  return (
    <div className='comments'>
        <p>Comments {comments.length} </p>
        <div className='box bar-box'>
            {comments.map((comment)=>{
              return <CommentUser key={comment.id} comment={comment}/>
            })}
        </div>
    </div>
  )
}

export default CommentBox

