import React from 'react'
import Modal from '../Modal'

const ModalPage = ({ viewModal, setViewModal, msg}) => {

    const handleHiddenModal = () => {
        setViewModal(false)
    }

  return (
    <div className={ `page-content-init center-x center-y ${viewModal ? 'view' : 'no-view'}`} >
          <div className={viewModal ? 'view' : 'no-view'} onClick={handleHiddenModal}></div>
        <Modal handleHiddenModal={handleHiddenModal} msg={msg}/>
    </div>
  )
}

export default ModalPage