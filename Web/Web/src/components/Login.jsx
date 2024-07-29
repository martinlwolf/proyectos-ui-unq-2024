import React from 'react'
import "../styles/form.css"
import "../styles/inputText.css"
import { useState } from 'react'
import { postLogin } from '../service/Api.js'
import { useNavigate } from 'react-router-dom'
import ModalPage from './pages/ModalPage.jsx'

const Login = () => {
  
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [viewModal, setViewModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    
    postLogin(username, password).then((response) => {
      const id = response.data.id;
      localStorage.setItem('token', response.headers['authorization']);
      localStorage.setItem('id', id);
      localStorage.setItem('img', response.data.image);
      navigate(`/user/${id}`);
    } ).catch((error)=>{
        setViewModal(true)
        setErrorMsg(error.response.data.message)})

    }

  const handlePasswordChange = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleUsernameChange = (e) => {
    const username = e.target.value
    setUsername(username)
  }
  
  return (
    <>
    <ModalPage viewModal={viewModal} setViewModal={setViewModal} msg={errorMsg}/>
    <form className='form' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
            type='text'
            className='inputBar'
            placeholder='username'
            value={username}
            onChange={handleUsernameChange}
        />
        <label>Password</label>
        <input
            type='password'
            className='inputBar'
            placeholder='password'
            value={password}
            onChange={handlePasswordChange}
        />
        <button type='submit' className='tiktok-btn dark button-flex'>Log in</button>
    </form>
    </>
  )
}

export default Login