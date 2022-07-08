import React from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
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
          <h1>Settings</h1>
        </main>
      </div>
    </div>
  )
}

export default Settings
