import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import './layout.css'

const Layout = (props) => {
  return (
    <div className='layout'>
      <SideBar />
      <div className='mainBar'>
        {props.children}
      </div>
    </div>
    
  )
}


export default Layout