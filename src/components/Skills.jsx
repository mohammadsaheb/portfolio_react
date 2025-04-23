import React from 'react';
import './Skills.css';
import photoshopIcon from '../assets/images/icons8-photoshop-240.png';
import htmlIcon from '../assets/images/icons8-html-240.png';
import cssIcon from '../assets/images/icons8-css-240.png';

const Skills = () => {
  return (
    <article className="skills_cont">
      <section className="title_skills">
        <h3>SKILLS</h3>
      </section>
      <section className="skills_contanier">
        <div className="skills_img">
          <img src={photoshopIcon} alt="photoshop" />
          <img src={htmlIcon} alt="html" />
          <img src={cssIcon} alt="CSS" />
        </div>
      </section>
    </article>
  );
};

export default Skills;