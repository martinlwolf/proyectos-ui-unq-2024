import React, { useState }from 'react'
import "../styles/form.css"
import "../styles/inputText.css"
import { postRegister } from '../service/Api.js'
import { useNavigate } from 'react-router-dom'
import ModalPage from './pages/ModalPage.jsx'

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [viewModal, setViewModal] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        
        postRegister(username, password, email, image)
        .then(() => {navigate(`/form/login`)}) 
        .catch((error)=>{
          setViewModal(true)
          setErrorMsg(error.response.data.message)})
        
      }

      const handleUsernameChange = (e) => {
        const username = e.target.value
        setUsername(username)
      }
    
      const handlePasswordChange = (e) => {
        const password = e.target.value
        setPassword(password)
      }

      const handleEmailChange = (e) => {
        const email = e.target.value
        setEmail(email)
      }
    
      const handleImageChange = (e) => {
        const image = e.target.value
        setImage(image)
      }

    return (
      <><ModalPage viewModal={viewModal} setViewModal={setViewModal} msg={errorMsg}/>
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
            <label>Email</label>
            <input
                type='email'
                className='inputBar'
                placeholder='email'
                value={email}
                onChange={handleEmailChange}
            />
            <label>Image</label>
            <input
                type='text'
                className='inputBar'
                placeholder='image'
                value={image}
                onChange={handleImageChange}
            />
            <button className='tiktok-btn dark button-flex'>Register</button>
        </form>
        </>
    )
}

export default Register