import React, { useState }from 'react'
import "../styles/form.css"
import "../styles/inputText.css"
import { addPost } from '../service/Api.js'
import { useNavigate } from 'react-router-dom'
import ModalPage from './pages/ModalPage.jsx'

const CreatePost = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [video, setVideo] = useState("")
  const [viewModal, setViewModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    addPost(title, description, video).then(() => {
      const id = localStorage.getItem('id');
      navigate(`/user/${id}`);
    } ).catch((error)=>{
        setViewModal(true)
        setErrorMsg(error.response.data.message)})
      
    }

  const handleTitleChange = (e) => {
    const title = e.target.value
    setTitle(title)
  }

  const handleDescriptionChange = (e) => {
    const description = e.target.value
    setDescription(description)
  }

  const handleVideoChange = (e) => {
    const video = e.target.value
    setVideo(video)
  }

  return (
    <>
    <ModalPage viewModal={viewModal} setViewModal={setViewModal} msg={errorMsg}/>
    <form className='form' onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type='text'
                className='inputBar'
                placeholder='title'
                value={title}
                onChange={handleTitleChange}
            />
            <label>Description</label>
            <input
                type='text'
                className='inputBar'
                placeholder='description'
                value={description}
                onChange={handleDescriptionChange}
            />
            <label>Video</label>
            <input
                type='text'
                className='inputBar'
                placeholder='video'
                value={video}
                onChange={handleVideoChange}
            />
            <button className='tiktok-btn dark button-flex'>Create Post </button>
        </form>
    </>
  )
}

export default CreatePost