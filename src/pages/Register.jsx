import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import RegisterPrompt from '../components/RegisterPrompt';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import '../styles/css/register.css';

const Register = () => {
  const [theme, setTheme] = useState('')
  const toggleLightTheme = () => {setTheme('light')}
  const toggleDarkTheme = () => {setTheme('dark')}

  return (
    <div className='container' id={theme}>
      
      <div className="container-side-navigation">
        <div className="container-side-navigation-nested">
          <Navigation />
          <Theme toggleLight={toggleLightTheme} toggleDark={toggleDarkTheme}/>
        </div>
      </div>

      <div className='container-main-container'>
        <SearchBar />
        <main className='container-main-content'>
          <h1 className='container-main-content-title'>Register</h1>
          <RegisterPrompt />
        </main>
      </div>
    </div>
  )
}

export default Register;
