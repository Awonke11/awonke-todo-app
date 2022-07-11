import {useContext} from 'react';
import Navigation from '../components/Navigation';
import RegisterPrompt from '../components/RegisterPrompt';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import '../styles/css/register.css';
import AppContextProvider from '../context/AppContextProvider';

const Register = () => {
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
          <h1 className='container-main-content-title'>Register</h1>
          <RegisterPrompt />
        </main>
      </div>
    </div>
  )
}

export default Register;
