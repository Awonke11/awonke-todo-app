import {useContext} from 'react';
import LoginPrompt from '../components/LoginPrompt';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import AppContextProvider from '../context/AppContextProvider';
import "../styles/css/login.css";

const Login = () => {
  const {theme} = useContext(AppContextProvider)
  return (
    <div className='container' id={theme}>
      
      <div className="container-side-navigation">
        <div className="container-side-navigation-nested">
          <Navigation />
          <Theme />
        </div>
      </div>

      <div className='container-main-container'>
        <SearchBar />
        <main className='container-main-content'>
        <h1 className='container-main-content-title'>Login</h1>
        <LoginPrompt />
        </main>
      </div>
    </div>
  )
}

export default Login
