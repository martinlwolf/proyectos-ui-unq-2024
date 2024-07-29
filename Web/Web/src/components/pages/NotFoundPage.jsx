import React from 'react'
import '../../styles/pages/notfoundpage.css'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigation = useNavigate()

    const handleGoToTikTok = () => {
        navigation('/')
    }

  return (
    <div className='page-content-init center-x center-y'>
        <div className='not-found'> 
            <span className='num-not-found'>4</span>
            <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/bbad6f99219877ac47f9.png" alt="not found fun" />
            <span className='num-not-found'>4</span>
        </div>
        <p className='text-not-found'>Page not found</p>
        <p className='more-not-found'>Watch more popular videos on TikTok</p>
        <button className='tiktok-btn dark button-lg' onClick={handleGoToTikTok}>Go to TikTok</button>
    </div>
  )
}

export default NotFoundPage