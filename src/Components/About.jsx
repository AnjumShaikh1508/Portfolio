import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a skilled full-stack web developer proficient in HTML, CSS, JavaScript, Express.js, and Node.js. 
          I've completed a comprehensive 1000+ hour web development and Generative AI/Prompt Engineering 
          course at Masai School with hands-on experience in individual and collaborative projects.
        </p>
        <p>
          I'm seeking an opportunity to apply my skills and knowledge while continuing to learn 
          and grow in this dynamic field.
        </p>
        
        <div className="contact-info">
          <h3>Contact</h3>
          <ul>
            <li>
              <strong>Name:</strong> Anjum Rahiman Shaikh
            </li>
            <li>
              <strong>Phone:</strong> +91-8767923819
            </li>
            <li>
              <strong>Email:</strong> anjumshaikh0310@gmail.com
            </li>
            <li className="social-links">
              <a href="https://www.linkedin.com/in/anjum-shaikh1508/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
              <a href="https://github.com/AnjumShaikh1508" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;