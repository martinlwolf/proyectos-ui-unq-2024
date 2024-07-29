import { useNavigate } from 'react-router-dom';
import FollowBtn from './buttons/FollowBtn';
import UserBtn from './buttons/UserBtn';

const Friend = ({ user, isFollowing }) => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <UserBtn id={user.id} image={user.image} />
      <p className='pointer' onClick={()=>{navigate(`/user/${user.id}`)}}>{user.username}</p>
      <FollowBtn isFollowing={isFollowing} user={user} />
    </div>
  );
};

export default Friend;