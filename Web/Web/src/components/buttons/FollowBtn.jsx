import React, { useState } from 'react'
import { followUser } from '../../service/Api'
import "../../styles/friend.css";
import "../../styles/btn.css";
import { useNavigate } from 'react-router-dom';

const FollowBtn = ({isFollowing, user}) => {

  const [isFollowings, setIsFollowings] = useState(isFollowing);
  const isAuthenticated = localStorage.getItem('token') != undefined;
  const navigate = useNavigate()

    const handleClick  = () => {
      if(isAuthenticated)  {
        setIsFollowings(!isFollowings)
        followUser(user.id)
      }else{
        navigate("../form/login")
      }
    };

  return (
    <button className={`tiktok-btn ${isFollowings ? 'light' : 'dark'}`} onClick={handleClick}>
        {isFollowings ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowBtn