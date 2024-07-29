import React from 'react'
import '../styles/nav.css'
import '../icons'
import { useState } from 'react'
import { search } from '../icons'
import { useNavigate } from 'react-router-dom'
import RegisterBtn from './buttons/RegisterBtn'
import LoginBtn from './buttons/LoginBtn'
import UploadBtn from './buttons/UploadBtn'
import UserBtn from './buttons/UserBtn'

const NavBar = ({setSearchResult}) => {

  const navigate = useNavigate()
  const [searchBar, setSearchBar] = useState('')
  const isAuthenticated = localStorage.getItem('token') != undefined;

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    setSearchResult(searchBar)
    localStorage.setItem('search', searchBar)
    navigate('/search')
  }

  const handleSearch = (e) => {
    const searchBar = e.target.value
    setSearchBar(searchBar)
  }

  return (
    <nav>
      <img className='img-nav' src='../../public/image1.png' alt='TikTok'/>
      <div className="l">
        <input type='text' className='search' placeholder='Buscar' onChange={handleSearch} />
        <button type='submit' className='tiktok-btn lupa' onClick={handleSubmitSearch}>
          {search()}
        </button>
      </div>
      <div className='reg-log'>
        {isAuthenticated ? 
          <div className='frame'>
            <UploadBtn/>
            <UserBtn id={localStorage.getItem("id")} image={localStorage.getItem("img")}/>
          </div>
          : 
          <div className='frame'>
            <RegisterBtn />
            <LoginBtn/>
          </div>
        }
      </div>
    
    </nav>

  )
}

export default NavBar