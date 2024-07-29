import React, { useState } from 'react'
import { comment, shared } from '../icons';
import '../styles/user.css'
import CommentBox from './CommentBox';
import { putAddOrRemoveLike } from '../service/Api';
import PostHeader from './PostHeader';
import LikeButton from './LikeButton';
import TextCommentBtn from './buttons/TextCommentBtn';
import BoxText from './BoxText';
import { useNavigate } from 'react-router-dom';

const CommentSection = ({ post,followings,setViewModal,setErrorMsg }) => {

  const isLiked = post.likes.some( user => user.id === localStorage.getItem('id'))
  const [liked, setLiked] = useState(isLiked)
  const [cantLikes, setCantLikes] = useState(post.likes.length)
  const isAuthenticated = localStorage.getItem('token') != undefined;
  const navigate = useNavigate()


  const addOrRemoveLike = () => {
    if (isAuthenticated) {
      putAddOrRemoveLike(post.id).then((postnew) => {
        setLiked(postnew.data.likes.some(user => user.id === localStorage.getItem('id')))
      })
      liked ? setCantLikes(cantLikes - 1) : setCantLikes(cantLikes + 1)
    } else {
      navigate("../../form/login")
    }

  }

  return ( 
    <div className='comment-section'>
      <PostHeader post={post} followings={followings}/>
        <div className='btns-comment'>
            <div>
                <LikeButton liked={liked} addOrRemoveLike={addOrRemoveLike}/>
                <p>{cantLikes}</p>
            </div>
            <div>
                <button className='tiktok-btn secondary round'>{comment()}</button>
                <p>{post.comments.length}</p>
            </div>
            <div>
              <button className='tiktok-btn secondary round'>{shared()}</button>
              <p>‎</p>
            </div>
        </div>
        <CommentBox comments={post.comments}/>
       {isAuthenticated ? <BoxText post={post} setViewModal={setViewModal} setErrorMsg={setErrorMsg} /> : <TextCommentBtn />}
    </div>
  )
}

export default CommentSection
