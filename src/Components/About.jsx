import React from 'react';
import '../CSS/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <div className="about-image">
        <img src="https://imarticus.org/blog/wp-content/uploads/2021/12/djbwgfw.gif" alt="Animated GIF" />
      </div>
      <div className="about-content">
        <p className="about-description">
          A dedicated full-stack web developer skilled in HTML, CSS, JavaScript, React.js, Express.js, and Node.js. 
          Completed an intensive 1000+ hour web development and Generative AI/Prompt Engineering program at Masai School, 
          gaining hands-on experience through both individual and team projects. Passionate about creating efficient web 
          solutions and eager to contribute technical expertise while embracing new challenges in this evolving field.
        </p>
        <h2 className="about-name">Anjum Rahiman Shaikh</h2>
        <p className="about-contact">8767923819</p>
        <p className="about-contact">anjumshaikh0310@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
