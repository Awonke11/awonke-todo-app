import React from 'react';
import MoreApps from '../components/MoreApps';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import UserProfile from '../components/UserProfile';
import "../styles/css/settings.css";

const Settings = () => {
  return (
    <div className='container' id='light'>
      
      <div className="container-side-navigation">
        <div className="container-side-navigation-nested">
          <Navigation />
          <Theme />
        </div>
      </div>

      <div className='container-main-container'>
        <SearchBar />
        <main className='container-main-content'>
          <h1 className='container-main-content-title'>Settings</h1>
          <UserProfile />
          <MoreApps />
        </main>
      </div>
    </div>
  )
}

export default Settings
