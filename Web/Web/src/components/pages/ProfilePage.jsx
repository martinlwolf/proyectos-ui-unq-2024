import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ViewProfile from '../ViewProfile'
import "../../styles/profilePage.css"
import { useParams } from 'react-router-dom'
import { getUserById } from '../../service/Api'

const ProfilePage = () => {

    const param = useParams()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const id = param.id
        getUserById(id).then((data) => {
            setUser(data)
            setFollowers(data.followers.length)
            setFollowing(data.following.length)
            setPosts(data.posts)
            setLoading(false)
        })  
    },[localStorage.getItem('token')])
    
    return (
      <ViewProfile loading={loading} user={user} posts={posts} followers={followers} following={following}/>
    )
}

export default ProfilePage