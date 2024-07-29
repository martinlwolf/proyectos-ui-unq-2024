import React from 'react'
import UserBtn from './buttons/UserBtn'
import FollowBtn from './buttons/FollowBtn'
import EditBtn from './buttons/EditBtn'
import { useNavigate } from 'react-router-dom'

const PostHeader = ({ post, followings }) => {

    const isMyPost = post.user.id === localStorage.getItem('id') 
    const navigate = useNavigate()

  return (
    <div className='comment-user'>
        <div className='info-user'>     
            <div className='btn-user'><UserBtn id={post.user.id} image={post.user.image}/></div>
            <div className='box-title-description'>
                  <h3 className='pointer' onClick={() => { navigate(`/user/${post.user.id}`) }}>{post.user.username}</h3>
                <div className='title-description'>
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                </div>
            </div>
        </div>

        {
            isMyPost ? <EditBtn post={post} /> : <FollowBtn isFollowing={followings.includes(post.user.id)} user={post.user}/>
        }
    </div>
  )
}

export default PostHeader