import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header_contanier" id="home">
      <div className="header_title">
      <img src="../assets/images/me.png" width="500px" height="500px" alt="Mohammad Saheb" />

        <a 
          href="/images/Mohammed alsaheb-CV.pdf" 
          download="mohammed alsaheb-CV.pdf" 
          className="download-btn"
        >
          Download CV
        </a>
        <h1>
          Hi! i am Mohammad Tawfiq Saheb Computer Information Systems | 
          Full-Stack Developer | Photographer | Passionate About Problem-Solving and Creativity
        </h1>
      </div>
    </header>
  );
};

export default Header;