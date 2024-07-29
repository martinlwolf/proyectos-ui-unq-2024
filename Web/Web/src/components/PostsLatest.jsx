import React, { useEffect, useState } from 'react'
import { getLatestPosts } from '../service/Api'
import Post from './Post'

const PostsLatest = ({followings}) => {

    const [posts, setPosts] = useState([])

    
    useEffect(() => {
        getLatestPosts().then((res) => {
            setPosts(res.data)
        })
    }, [followings])



  return (
    <div className='page-content-init center-x'>
      <div className='box w-auto'>
          {posts.map((post) => {
              return <Post key={post.id} post={post} followings={followings}/>
          })}
      </div>
    </div >
  )
}

export default PostsLatest