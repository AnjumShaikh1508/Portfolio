import React from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">Anjum Shaikh</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;