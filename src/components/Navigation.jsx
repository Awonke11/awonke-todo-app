import React from 'react';
import Widget from './Widget';
import { NavLink } from "react-router-dom";
import { FaRegEdit, FaCog, FaRegUserCircle, FaRegUser } from 'react-icons/fa';
import image from "../assets/demo-img.jpg"

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation-profile-and-widget'>
        <img src={image} alt='profile-img' className='navigation-profile-and-widget-logo'/>
        <Widget />
      </div>
      <div className='navigation-links'>
        <h1 className='navigation-links-title'>Pages</h1>
        <NavLink to='/' className='navigation-links-link'>
          <FaRegEdit className='icon'/>
          <h2 className='navigation-links-link-title'>Todo</h2>
        </NavLink>
        <NavLink to='/login' className='navigation-links-link'>
          <FaRegUser className='icon'/>
          <h2 className='navigation-links-link-title'>Login</h2>
        </NavLink>
        <NavLink to='/register' className='navigation-links-link'>
          <FaRegUserCircle className='icon'/>
          <h2 className='navigation-links-link-title'>Register</h2>
        </NavLink>
        <NavLink to='/settings' className='navigation-links-link'>
          <FaCog className='icon'/>
          <h2 className='navigation-links-link-title'>Settings</h2>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
