import React from 'react'
import UserProfile from './UserProfile'
import PostProfile from './PostProfile'
import LoadingPage from './pages/LoadingPage'

const ViewProfile = ({loading, user, posts, followers, following}) => {

  return (
        <>
            {loading ? <LoadingPage/> : 
            <div className='page-content-init'>
                <div>
                    <UserProfile key={user.id} user={user} followers={followers} following={following} />
                </div>
                <div className='box'>
                    {posts.map((data) => (
                    <PostProfile key={data.id} post={data} />))
                    }
                </div>
            </div>  }
        </>
  )
}

export default ViewProfile