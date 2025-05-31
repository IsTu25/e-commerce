import React from 'react';
import './Navbar.css';
import navprofile from '../../assets/nav-profile.svg';
import navlogo from '../../assets/nav-logo.svg';

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={navlogo} alt="Logo" className="nav-logo" />
      <img src={navprofile} alt="Profile" className="nav-profile" />
    </div>
  );
};
