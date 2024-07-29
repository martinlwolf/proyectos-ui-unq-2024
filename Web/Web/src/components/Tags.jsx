import React from 'react'
import "../styles/tags.css"

const Tags = ({ tags, handleClickTags, numTag }) => {

  return (
    <div className='box-horizontal'>
        {tags.map((tag, index) => {
            return (
                <button className={`tiktok-btn ${ index === numTag ? 'secondary-dark' : 'secondary'}`} onClick={() => {handleClickTags(index)}}>{tag}</button>
            )
        })}
    </div>
  )
}

export default Tags
