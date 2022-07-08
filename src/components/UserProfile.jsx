import React from 'react';
import image from '../assets/demo-img.jpg'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src={image} alt='profile-img' className='user-profile-img'/>
      <div className='user-profile-information'>
        <div className='user-profile-information-info'>
            <h2 className='user-profile-information-info-title'>Name</h2>
            <h3 className='user-profile-information-info-name'>Awonke</h3>
        </div>
        <div className='user-profile-information-info'>
            <h2 className='user-profile-information-info-title'>Email</h2>
            <h3 className='user-profile-information-info-email'>mnotozawonke@gmail.com</h3>
        </div>
        <button className='user-profile-information-button'>Logout</button>
      </div>
    </div>
  )
}

export default UserProfile
