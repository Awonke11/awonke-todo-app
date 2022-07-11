import {useContext} from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import UserProfile from '../components/UserProfile';
import "../styles/css/settings.css";
import AppContextProvider from '../context/AppContextProvider';

const Settings = () => {
  const {theme} = useContext(AppContextProvider)
  return (
    <div className='container' id={theme}>
      
      <div className="container-side-navigation">
        <div className="container-side-navigation-nested">
          <Navigation />
          <Theme/>
        </div>
      </div>

      <div className='container-main-container'>
        <SearchBar />
        <main className='container-main-content'>
          <h1 className='container-main-content-title'>Settings</h1>
          <UserProfile />
        </main>
      </div>
    </div>
  )
}

export default Settings
