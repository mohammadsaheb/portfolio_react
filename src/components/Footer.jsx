import React from 'react';
import './Footer.css';
import githubIcon from '../assets/images/icons8-github-30.png';
import linkedinIcon from '../assets/images/icons8-linkedin-30.png';
import instagramIcon from '../assets/images/icons8-insta-30.png';

const Footer = () => {
  return (
    <footer className="footer_cont">
      <p className="footer_p"> Copy right &copy; 2025 All rights reserved</p>
      <ul className="footer_link">
        <li>
          <a href="https://github.com/mohammadsaheb" target="_blank" rel="noopener noreferrer">
            <img className="icon_img" src={githubIcon} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohammed-saheb-2579992b5/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mohammedt.ph/#" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;