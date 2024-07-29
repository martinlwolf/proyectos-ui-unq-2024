import React, { useEffect, useState } from 'react'
import Friend from '../Friend'
import PostExplore from '../PostExplore'
import { getSearch, getFriends } from '../../service/Api'
import Spinner from '../utils/Spinner'

const SearchPage = ({searchResult}) => {

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [followings, setFollowings]  = useState([]);
  const [userNotNull, setUserNotNull] = useState(false)
  const [postNotNull, setPostNotNull] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    getSearch().then((data) => {
      setPosts(data?.posts)
      setUsers(data?.users)
      setUserNotNull(data?.users.length > 0)
      setPostNotNull(data?.posts.length > 0)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [searchResult])


  useEffect(() => {
    getFriends().then((data) => {
      setFollowings(data.followings.map(({ id }) => id));
    });
  }, []);

  return (
    <div className='page-content-init'>
      <div><p className='search-title'>Search: {searchResult}</p></div>
      <h2>Users</h2>
      <div className='box'>
        {
          loading ? <Spinner /> : 
                    userNotNull ? users.map((user) => {return <Friend key={user.id} user={user} isFollowing={followings.includes(user.id)}/>}) : 
                                  <p>No users found</p>
        }
          
      </div>
      <h2>Posts</h2>
      <div className='box'>
          {
            loading ? <Spinner /> : 
                      postNotNull ? posts.map((post) => {return <PostExplore key={post.id} post={post} />}) : <p>No posts found</p>
          }

      </div>
    </div>
  )
}

export default SearchPage