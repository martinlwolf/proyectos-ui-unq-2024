import Tags from '../Tags'
import React, { useState, useEffect } from 'react';
import PostExplore from '../PostExplore'
import { getPostByTags, getTags } from '../../service/Api'

const ExplorePage = () => {

  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [numTag, setNumTag] = useState(0)

  useEffect(() => {
    getTags().then((data) => {
      const tagsResult = data
      setTags(tagsResult) // [#works, #fun, #happy, #sad, #angry, #love, #hate, #food, #drink, #music]
      getPostByTags(tagsResult[numTag]).then((data) => {
        setPosts(data) 
      })
    })

  }, [numTag])

  const handleClickTags = (index) => {
    setNumTag(index)
  }


  return (
    <div className='page-content-init'>
      <div><Tags tags={tags} handleClickTags={handleClickTags} numTag={numTag}/></div>
      <h2>Posts</h2>
      <div className='box'>
          {posts.map((post) => {
                return <PostExplore key={post.id} post={post}/>
              })}
      </div>
    </div>
  )
}

export default ExplorePage