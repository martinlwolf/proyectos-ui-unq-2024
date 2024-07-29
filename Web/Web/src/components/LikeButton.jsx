import React from 'react'
import { like } from '../icons'

const LikeButton = ( { addOrRemoveLike, liked } ) => {

  return (
    <button className='tiktok-btn secondary-default round' onClick={addOrRemoveLike}>{ like( liked ) }</button>
  )
}

export default LikeButton