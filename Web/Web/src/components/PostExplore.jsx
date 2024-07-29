import React, { useState } from 'react'
import PostProfile from './PostProfile'
import "../styles/user.css"
import "../icons"
import LikeButton from './LikeButton'
import { putAddOrRemoveLike } from '../service/Api'
import UserBtn from './buttons/UserBtn'
import { useNavigate } from 'react-router-dom'


const PostExplore = ({ post }) => {

  const isLiked = post.likes.some( user => user.id === localStorage.getItem('id'))
  const [cantLikes, setCantLikes] = useState(post.likes.length)
  const [liked, setLiked] = useState(isLiked)
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('token') != undefined;

  const addOrRemoveLike = () => {
    if (isAuthenticated) {
      putAddOrRemoveLike(post.id).then((postnew) => {
        setLiked(postnew.data.likes.some(user => user.id === localStorage.getItem('id')))
      })
      liked ? setCantLikes(cantLikes - 1) : setCantLikes(cantLikes + 1)
    }else{
      navigate("../form/login")
    }
  }


  return (
    <div className='postExplore'>
         <PostProfile post={post}/> 
        <div className='postDetail'>
            <div className='userAccount pointer' onClick={()=>{navigate(`/user/${post.user.id}`)}}> 
                <UserBtn id={post.user.id} image={post.user.image}/>
                {post.user.username}
            </div>
            <div className='boxLike'>
                <LikeButton liked={liked} addOrRemoveLike={addOrRemoveLike}/>
                {cantLikes}
            </div>
        </div>
    </div>
  )
}

export default PostExplore