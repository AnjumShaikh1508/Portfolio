import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Mongoose", logo: "/api/placeholder/48/48" },
        { name: "RESTful APIs", logo: "/api/placeholder/48/48" },
        { name: "JWT", logo: "/api/placeholder/48/48" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Postman", logo: "/api/placeholder/48/48" },
        { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
      ]
    },
    {
      category: "AI & Design",
      skills: [
        { name: "Responsive Design", logo: "/api/placeholder/48/48" },
        { name: "Prompt Engineering", logo: "/api/placeholder/48/48" },
        { name: "Generative AI", logo: "/api/placeholder/48/48" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      
      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;