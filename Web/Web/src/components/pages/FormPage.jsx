import React from 'react'
import { Outlet } from 'react-router-dom'

const FormPage = () => {
  return (
    <div className='page-content-init center-x center-y'>
        <Outlet/>
    </div>
  )
}

export default FormPage