import React from "react";
import "../CSS/Skills.css"; // Import the CSS file

const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript(basic)"],
  },
  {
    category: "Front-End",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Data Structure & Algorithms"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL"],
  },
  {
    category: "General Tools",
    skills: [
      "Git, GitHub",
      "VS Code",
      "CodePen ",
      "ChatGPT",
      "Prompt Engineering",
    ],
  },
  {
    category: "Deployment Tools",
    skills: ["Render", "Netlify"],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Technical Skills</h1>
      <h3>Skills & Tools</h3>
      <div className="skills-grid">
        {skillsData.map((section, index) => (
          <div key={index} className="skill-category">
            <h2>{section.category}</h2>
            <div className="skill-items">
              {section.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
