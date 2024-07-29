import React from 'react'
import { Outlet } from 'react-router-dom'


const Page = () => {
  return (
    <div className='page-init'>
      <div className='page-nav'></div>
      <div className='page-body'>
        <div className='page-sidebar'></div>
        <div className='page-body-right'>
          {<Outlet/>}
        </div>
      </div>
    </div>
  )
}

export default Page