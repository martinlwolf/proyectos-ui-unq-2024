import React from 'react'
import "../styles/modal.css"

const Modal = ({ handleHiddenModal , msg}) => {

  return (
    <div className='box-modal'>
        <div className='box-button'>
            <button className='tiktok-btn btn-auto' onClick={handleHiddenModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#FE2C55" d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" /></svg>
            </button>
        </div>
        <div className='box-msg'>
                <p>{msg}</p>    
        </div>
    </div>
  )
}

export default Modal