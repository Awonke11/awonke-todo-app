import React, {useState} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Theme = ({toggleLight, toggleDark}) => {
  const [lightClicked, setLightClicked] = useState('')
  const [darkClicked, setDarkClicked] = useState('')

  return (
    <div className="themes">
      <h1 className='themes-title'>Theme</h1>
      <div 
        className={`theme ${lightClicked}`} 
        onClick={() => {
          toggleLight()
          setLightClicked('clicked')
          setDarkClicked('')
        }}>
        <FaSun className='theme-icon'/>
        <h2 className='theme-title'>Light</h2>
      </div>
      <div 
        className={`theme ${darkClicked}`} 
        onClick={() => {
          toggleDark()
          setDarkClicked('clicked')
          setLightClicked('')
        }}>
        <FaMoon className='theme-icon'/>
        <h2 className='theme-title'>Dark</h2>
      </div>
    </div>
  )
}

export default Theme
