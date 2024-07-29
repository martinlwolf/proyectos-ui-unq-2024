import React, { useEffect, useState } from 'react'
import CommentSection from '../CommentSection'
import { getPostById } from '../../service/Api';
import { useParams } from 'react-router-dom';
import '../../styles/post.css'
import ModalPage from './ModalPage';

const PostUserPage = ({ followings }) => {

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const param = useParams();
  const [viewModal,setViewModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")

  useEffect (() => {
      getPostById(param.idpost).then((data)=> {
          setPost(data)
          setLoading(false)
      })
  },[post, followings])

  return (
    <>
      { !loading && 
      <>
          <ModalPage viewModal={viewModal} setViewModal={setViewModal} msg={errorMsg}/> 
           <div className='page-content-init'>
           <div className='post-content'>
               <div className='post-element'>
                 <video className='video-post-page c-tiktok-post' controls>
                   <source src={post.video} type="video/mp4" />
                   Tu navegador no soporta la etiqueta de video.
                 </video>
               </div>
               <CommentSection post={post} followings={followings} setViewModal={setViewModal} setErrorMsg={setErrorMsg} />
           </div>
         </div>  
      </>
      }
    </>
  )
}

export default PostUserPage