import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Theme = () => {
  return (
    <div className="themes">
      <h1 className='themes-title'>Theme</h1>
      <div className='theme' id='light'>
        <FaSun className='theme-icon'/>
        <h2 className='theme-title'>Light</h2>
      </div>
      <div className='theme' id='dark'>
        <FaMoon className='theme-icon'/>
        <h2 className='theme-title'>Dark</h2>
      </div>
    </div>
  )
}

export default Theme
