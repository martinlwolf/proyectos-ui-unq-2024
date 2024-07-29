import React, { useState, useEffect } from 'react';
import Friend from '../Friend';
import { getFriends } from '../../service/Api';

const FriendsPage = ({followings}) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFriends().then((data) => {
      setFollowers(data.followers);
    });
  }, [followings]);


  return (
    <div className='page-content-init'>
      <div className='box'>
        {followers.map((data) => (
          <Friend
            key={data.id}
            user={data}
            isFollowing={followings.includes(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;






