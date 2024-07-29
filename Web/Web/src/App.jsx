import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./styles/btn.css"
import "./styles/color.css"
import "./styles/pages/page.css"
import "./styles/utils/spinners.css"
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import UserProfile from './components/UserProfile'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './components/CreatePost'
import ProfilePage from './components/pages/ProfilePage'
import Page from './components/pages/Page'
import SearchPage from './components/pages/SearchPage'
import LoadingPage from './components/pages/LoadingPage'
import ExplorePage from './components/pages/ExplorePage'
import FriendsPage from './components/pages/FriendsPage'
import NotFoundPage from './components/pages/NotFoundPage'
import FormPage from './components/pages/FormPage'
import PostUserPage from './components/pages/PostUserPage'
import PostsLatest from './components/PostsLatest'
import PostFollowing from './components/PostFollowing'
import EditPost from './components/EditPost'
import { getFriends } from './service/Api'



const App = () => {

  const [searchResult, setSearchResult] = useState('')
  const [followings, setFollowings] = useState([])

  useEffect(() => {
    getFriends().then((data) => {
      setFollowings(data.followings.map(({ id }) => id));
    });
  }, [followings])

  return (
    <BrowserRouter>
      <NavBar setSearchResult={setSearchResult}/>
      <Sidebar /> 
      <Routes>
        <Route path='/' element={<Page />}>
          <Route path='/' element={<PostsLatest followings={followings}/>} /> 
          <Route path='/following' element={<PostFollowing followings={followings}/>} />
          <Route path='/post/:idpost' element={<PostUserPage followings={followings}/>} />
          <Route path='/friends' element={<FriendsPage followings={followings}/>} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/user/:id' element={<ProfilePage/>} />
          <Route path='/profile' element={<LoadingPage />} />
          <Route path='/search' element={<SearchPage searchResult={searchResult} />} />
          <Route path='/form' element={<FormPage/>}>
            <Route path='/form' element={<Login/>}/>
            <Route path='/form/login' element={<Login/>}/>
            <Route path='/form/register' element={<Register/>}/>
            <Route path='/form/post/create' element={<CreatePost />} />
            <Route path='/form/post/edit' element={<EditPost />} />
          </Route>
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
