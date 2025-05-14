import React, { useState } from 'react';
import './Navbar.css';
import logo_pg from './assets/logo_pg.png';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-style">
      <div className="navbar-brand-style"><a href="/" style={{textDecoration:'none',color:'white'}}><img src={logo_pg} alt="Logo" className='logo_style'/>StylishPic</a></div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Gallery">Gallery</a>
        </li>
        <li>
          <a href="/Services">Services</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-toggle m-3" onClick={toggleMenu}>
        <span className={`toggle-label ${isOpen ? 'open' : ''}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;