import React from 'react';
import './About.css';

const About = () => {
  return (
    <article id="about" className="about_cont">
      <section className="title_about">
        <h3>ABOUT</h3>
      </section>
      <section className="about_p">
        <p>
          I'm a motivated Computer Information Systems graduate from Al-Balqa 
          Applied University in Jordan. With a strong foundation in web 
          development and programming, I thrive on tackling challenges and 
          crafting solutions that bridge technology and user needs.
        </p>
        <p>
          In addition to my technical expertise, I am a passionate photographer. 
          I love capturing moments that tell stories, blending creativity with 
          precision to create stunning visuals. This artistic side complements 
          my tech skills, allowing me to approach problems with both a creative 
          and analytical mindset.
        </p>
      </section>
      <section className="about_hr">
        <hr />
      </section>
    </article>
  );
};

export default About;