import React from 'react';
import './Footer.css';
import gitHub from "./icons/theGitHub.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/Spunky-Sukh/Sun-Breathing-Hand-Sign-Detection" target='blank' className='theColor'>
        <p>&copy; 2023 SpunkySukh
        <img src={gitHub} alt="git-hub" className='theImg'/></p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
