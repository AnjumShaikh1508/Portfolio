import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';
import Home from '../Components/Home'

const Navbar = () => {
    const handleLinkClick = () => {
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            navToggle.checked = false;
        }
    };

    return (

        
        <nav className="navbar">
            <div className="logo">
                <h1>Portfolio</h1>
            </div>
            
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div className="nav-div">
                <NavLink to='/home' className='nav-link' onClick={handleLinkClick}>Home</NavLink>
                <NavLink to='/about' className='nav-link' onClick={handleLinkClick}>About Me</NavLink>
                <NavLink to='/skills' className='nav-link' onClick={handleLinkClick}>Skills</NavLink>
                <NavLink to='/projects' className='nav-link' onClick={handleLinkClick}>Projects</NavLink>
                <NavLink to='/github' className='nav-link' onClick={handleLinkClick}>Github</NavLink>
                <NavLink to='/contact' className='nav-link' onClick={handleLinkClick}>Contact</NavLink>
                <NavLink to='/resume' className='nav-link' onClick={handleLinkClick}>Resume</NavLink>
            </div>

            
        </nav>
        
    );
}

export default Navbar;
