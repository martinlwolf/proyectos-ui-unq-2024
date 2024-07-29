import React from 'react'
import PostHeader from './PostHeader'
import { comment, shared } from '../icons';
import { putAddOrRemoveLike } from '../service/Api';
import { useState } from 'react';
import LikeButton from './LikeButton';
import { useNavigate } from 'react-router-dom'



const Post = ({ post, followings }) => {

  const navigate = useNavigate();
    
  const isLiked = post.likes.some( user => user.id === localStorage.getItem('id'))
  const [cantLikes, setCantLikes] = useState(post.likes.length)
  const [liked, setLiked] = useState(isLiked)
  const isAuthenticated = localStorage.getItem('token') != undefined;

  const addOrRemoveLike = () => {
    if (isAuthenticated) {
      putAddOrRemoveLike(post.id).then((postnew) => {
        setLiked(postnew.data.likes.some(user => user.id === localStorage.getItem('id')))
      })
      liked ? setCantLikes(cantLikes - 1) : setCantLikes(cantLikes + 1)
    } else {
      navigate("../form/login")
    }

  }
  



  return (
    <div className='box-post'>
        <PostHeader post={post} followings={followings}/> 
        <div className='flex'>
            <video className='video-post c-tiktok-post' controls>
                <source src={post.video} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
            <div className='btns-comment flex-column'>
                <div>
                    <LikeButton addOrRemoveLike={addOrRemoveLike} liked={liked} />
                    <p>{cantLikes}</p>
                </div>
                <div>
                    <button className='tiktok-btn secondary round' onClick={()=>{navigate(`/post/${post.id}`)}}>{comment()}</button>
                    <p>{post.comments.length}</p>
                </div>
                <button className='tiktok-btn secondary round'>{shared()}</button>
            </div>
        </div>    
    </div> 
  )
}

export default Post