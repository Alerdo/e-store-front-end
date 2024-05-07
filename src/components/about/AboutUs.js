import React from 'react';
import './AboutUs.css';
import { FaReact, FaNodeJs, FaDatabase, FaWrench, FaBook } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title"><FaBook /> Welcome to NextBuy</h1>
      <p className="about-us-text">
        NextBuy isn't just another e-commerce platform. It's a virtual storefront, exemplifying state-of-the-art technology through a full-stack web app sample. As an initiative to showcase the power and synergy of modern web development technologies, we're proud to introduce you to NextBuy.
      </p>

      <h2 className="about-us-subtitle"><FaWrench /> Our Technology Stack</h2>
      <p className="about-us-text">
        Built upon a robust foundation, NextBuy leverages some of the most powerful tools available in the web development ecosystem:
        <ul>
          <li><FaReact color="#61DBFB" /> React: Facilitating interactive UIs with efficiency and scalability.</li>
          <li><FaNodeJs color="#68A063" /> Node.js and Express: Powering our backend with a lightweight, fast, and scalable framework.</li>
          <li><FaDatabase color="#316192" /> PostgreSQL: Managing and querying data with one of the most advanced open-source databases.</li>
          <li><FaWrench color="#F7DF1E" /> Sequelize: Bridging our application and database with a promise-based ORM.</li>
          
        </ul> 
        

      </p>


      <h2 className="about-us-subtitle"><FaWrench /> Personalization and Flexibility</h2>
      <p  className="about-us-text">
        One of the primary strengths of NextBuy lies in its adaptability. It's crafted with customization in mind. Whether you have specific functionalities in mind, unique workflows, or particular design aesthetics, NextBuy can be tailored to cater to those exact needs. This flexibility makes it not just a sample but a potential starting point for numerous e-commerce applications.
      </p>

      <h2 className="about-us-subtitle"><FaWrench /> Our Commitment</h2>
      <p className="about-us-text">
        Beyond the tech, our commitment remains to provide an example that's coherent, functional, and educative. Whether you're a business looking to adapt NextBuy or a developer hoping to learn from it, we're here to support and assist.
      </p>
    </div>
  );
};

export default AboutUs;
