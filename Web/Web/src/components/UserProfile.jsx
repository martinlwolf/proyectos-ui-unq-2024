import React, { useEffect, useState } from 'react'
import "../styles/btn.css"
import "../styles/userProfile.css"
import "../styles/user.css"
import { Logout } from './buttons/Logout'
import FollowBtn from './buttons/FollowBtn'
import { getFriends } from '../service/Api'

const UserProfile = ({ user, followers, following }) => {
    const [followings, setFollowings]  = useState([]);

    useEffect(() => {
        getFriends().then((data) => {
          setFollowings(data.followings.map(({ id }) => id));
        });
      }, []);

    const isSelf = localStorage.getItem('id') === user.id

  return (
    <div className='userProfile'>
        <div className='userAccount'>
            <img src={user.image} className='round-me c-tiktok-post '/>
             {user.username}
        </div>
        {isSelf ? <Logout/> : <FollowBtn isFollowing={followings} user={user}/>}
        <div className='followStats'>
            <div className='follow'>
                <span className="count">
                    {following}
                    </span> Follow
            </div>
            <div className='follow'>
                <span className="count">
                    {followers}
                </span> Followers
            </div>
        </div>
    </div>
  )
}

export default UserProfile