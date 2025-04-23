import React from 'react';
import './Projects.css';
import projectImage from '../assets/images/programming-background-collage.jpg';

const Projects = () => {
  return (
    <article className="project_cont">
      <section className="title_project"> 
        <h3>PROJECTS</h3>
      </section>
      <section className="first_project">
        <div className="container">
          <div className="project">
            <a href="https://github.com/mohammadsaheb/Solve_HTML_CSS_Task_" target="_blank" rel="noopener noreferrer">
              <img src={projectImage} alt="First web page" />
              <div className="overlay" style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
                First web page
              </div>
            </a>
          </div>
          <div className="project">
            <a href="#">
              <img src={projectImage} alt="Coming soon" />
              <div style={{fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}} className="overlay">
                COMING SOON
              </div>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Projects;