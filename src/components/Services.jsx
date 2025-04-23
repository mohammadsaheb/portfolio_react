import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <article id="service" className="services_cont">
      <section className="title_services"> 
        <h3>SERVICES</h3>
      </section>
      <section className="service_div">
        <div className="first_service">
          <h4>Full Stack Development Services:</h4>
          <h5>Custom Web Application Development:</h5>
          <p>"Building fully functional and scalable web applications using modern front-end (HTML,CSS,JavaScript) and back-end (PHP,Node.js) technologies."</p>

          <h5>E-commerce Solutions:</h5>
          <p>"Creating secure and user-friendly e-commerce platforms with features like product management, payment integration, and analytics."</p>
          
          <h5>Database Design and Management:</h5>
          <p>"Designing and optimizing databases using MySQL for efficient data handling and storage."</p>
        </div>
        
        <div className="secound_service">
          <h4>Photography Services</h4>
          <h5>Portrait Photography:</h5>
          <p>"Capturing professional headshots, family portraits, and creative personal photography with a touch of artistry."</p>
          
          <h5>Event Photography:</h5>
          <p>"Documenting special moments at weddings, parties, or corporate events with attention to detail and emotion."</p>
          
          <h5>Product Photography:</h5>
          <p id="skills">"Showcasing your products in the best light for e-commerce, catalogs, or promotional campaigns."</p>
        </div>
      </section>
    </article>
  );
};

export default Services;