import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // Contact information
  const contactInfo = [
    {
      platform: "GitHub",
      link: "https://github.com/AnjumShaikh1508/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      text: "github.com/AnjumShaikh1508"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/anjum-shaikh1508/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      text: "linkedin.com/in/anjum-shaikh1508"
    },
    {
      platform: "Email",
      link: "mailto:your.email@.com",
      // No logo provided - will display platform name instead
      text: "anjumshaikh0310@gmail.com"
    },
    {
      platform: "Phone",
      link: "tel:+1234567890",
      // No logo provided - will display platform name instead
      text: "+91 8767923819"
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        {contactInfo.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="contact-item" 
            target={item.platform === "Email" || item.platform === "Phone" ? "_self" : "_blank"} 
            rel={item.platform !== "Email" && item.platform !== "Phone" ? "noopener noreferrer" : ""}
          >
            {item.logo ? (
              <img 
                src={item.logo} 
                alt={`${item.platform} icon`} 
                className="contact-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  // Instead of replacing with default logo, replace with platform name
                  const span = document.createElement('span');
                  span.className = 'contact-logo-text';
                  span.textContent = item.platform.charAt(0);
                  e.target.parentNode.replaceChild(span, e.target);
                }}
              />
            ) : (
              <span className="contact-logo-text">{item.platform.charAt(0)}</span>
            )}
            <span className="contact-text">{item.text}</span>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Contact;