import React from 'react';
import './Footer.css'; 
import logo_pg from './assets/logo_pg.png';
import p25 from './assets/p25.jpg';
import p26 from './assets/p26.jpg';
import p27 from './assets/p27.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-box">
          <h3 className="footer-logo"><a href="/" style={{textDecoration:'none',color:'white'}}><img src={logo_pg} alt="Logo" className='logo_style'/> StylishPic</a></h3>
          <p>
          "Capturing Moments, Creating Memories,Timeless Photography <br/>for Life’s Stories,Frame the Extraordinary"
          </p>
          
        </div>

        {/* Instagram */}
        <div className="footer-box">
          <h4>INSTAGRAM</h4>
          <div className="insta-images">
            <img src={p25} alt="insta1" />
            <img src={p26} alt="insta2" />
            <img src={p27} alt="insta3" />
          
            
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h4>QUICK LINKS</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-box">
          <h4>SUBSCRIBE</h4>
          <p>"Join my newsletter for photo tips and updates."</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Email" />
            <button type="submit"><i class="bi bi-send"></i></button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>©2025 All rights reserved | This made with <span>♥</span> by <a href="/">StylishPic</a></p>
      </div>
    </footer>
  );
};

export default Footer;
