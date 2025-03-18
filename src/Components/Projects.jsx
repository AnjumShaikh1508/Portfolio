import React from 'react';
import '../styles/Projects.css';
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'MIT Marketplace', 
      description: 'A brief description of Project 1. This is where you can add more details about the project, technologies used, and your role in development.', 
      
      images: [
        img6,
        img7
      ],
      liveLink: 'https://mit-marketplace.netlify.app/',
      githubLink: 'https://github.com/AnjumShaikh1508/3634'
    },
    { 
      id: 2, 
      title: 'Yogasana Tracker', 
      description: 'A brief description of Project 2. Explain the purpose of the project, challenges you faced, and solutions you implemented.', 
      images: [
        img4,
        img5
      ],
      liveLink: 'https://the-code-warriers.vercel.app/',
      githubLink: 'https://github.com/pratikzajam/The-Code-Warriers'
    },
    { 
      id: 3, 
      title: 'Connecthub', 
      description: 'A brief description of Project 3. Highlight the key features, technology stack, and what you learned from working on this project.', 
      images: [
        img1,
        img3
      ],
      liveLink: 'https://connect-hubb.netlify.app/',
      githubLink: 'https://github.com/Nishant1207/Pixel_Pushers/tree/main/Niche_Community'
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                  GitHub Code
                </a>
              </div>
            </div>
            
            <div className="project-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="project-image">
                  <img 
                    src={image} 
                    alt={`${project.title} - screenshot ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;