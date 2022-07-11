import React, {useContext} from 'react';
import image from '../assets/demo-img.jpg';
import AppContextProvider from '../context/AppContextProvider';
import {Link} from 'react-router-dom';
import {auth} from '../auth/firebase';
import {signOut } from 'firebase/auth'

const UserProfile = () => {
  const {user, setUser} = useContext(AppContextProvider)

  const handleSubmit = (e) => {
    e.preventDefault();

    signOut(auth).then(() => {
      setUser({
        username: "User",
        email: "user@email.com",
        login: false
      })
      alert("Signed out")
    }).catch(() => {alert("Failed to sign out")})
  }
  
  return (
    <div className="user-profile">
      <img src={image} alt='profile-img' className='user-profile-img'/>
      <div className='user-profile-information'>
        <div className='user-profile-information-info'>
            <h2 className='user-profile-information-info-title'>Name</h2>
            <h3 className='user-profile-information-info-name'>{user.username}</h3>
        </div>
        <div className='user-profile-information-info'>
            <h2 className='user-profile-information-info-title'>Email</h2>
            <h3 className='user-profile-information-info-email'>{user.email}</h3>
        </div>
        {user.login ? 
        <button className='user-profile-information-button' onClick={handleSubmit}>Logout</button>:
        <Link to='/register' className='user-profile-information-button-register'>
          <button className='user-profile-information-button'>Register</button>
        </Link>
      }
      </div>
    </div>
  )
}

export default UserProfile
