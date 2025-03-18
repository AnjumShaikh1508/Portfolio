import React from 'react';
import '../styles/Home.css';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/Anjum_Shaikh_Image.png';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Hi, I'm Anjum Shaikh</h1>
          <p>
            Full Stack Developer
            <span className="typed-text"> specializing in modern web applications</span>
          </p>
          <div className="buttons-container">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="https://drive.google.com/file/d/16fu6U5gykxUvZ7ZQw-u6QSorXHeRo_S5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn resume-btn">
              <FontAwesomeIcon icon={faFileAlt} className="btn-icon" /> Resume
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/AnjumShaikh1508" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/anjum-shaikh1508/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        
        <div className="photo-container">
          <img 
            src={profileImage}
            alt="Anjum Shaikh" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;