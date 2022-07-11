import {useContext} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import AppContextProvider from '../context/AppContextProvider';

const Theme = () => {

  const {
    setTheme, 
    selectedLight, 
    selectedDark, 
    setSelectedDark, 
    setSelectedLight
  } = useContext(AppContextProvider)

  return (
    <div className="themes">
      <h1 className='themes-title'>Theme</h1>
      <div 
        className={`theme ${selectedLight}`} 
        onClick={() => {
          setTheme('light')
          setSelectedDark('')
          setSelectedLight('clicked')
        }}>
        <FaSun className='theme-icon'/>
        <h2 className='theme-title'>Light</h2>
      </div>
      <div 
        className={`theme ${selectedDark}`} 
        onClick={() => {
          setTheme('dark')
          setSelectedDark("click")
          setSelectedLight('')
        }}>
        <FaMoon className='theme-icon'/>
        <h2 className='theme-title'>Dark</h2>
      </div>
    </div>
  )
}

export default Theme
