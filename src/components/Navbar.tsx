import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../styles/navbar.css'; // Import the custom CSS

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   };

   return (
    <div className="navbar-container">
        <div className="navbar">
            <div className="navbar-logo">Ali <span>Khan</span></div>
            <ul className="navbar-links">
                <li className="menu-link"><a href="#hero">Home</a></li>
                <li className="menu-link"><a href="#about">About</a></li>
                <li className="menu-link"><a href="#projects">Projects</a></li>
                <li className="menu-link"><a href="#skills">Skills</a></li>
                <li className="menu-link"><a href="#contact">Contact</a></li>
            </ul>
           <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
           </div>            
        </div>
        {isMenuOpen && (
          <ul className="mobile-menu">
            <li className="menu-link">
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className="menu-link">
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className="menu-link">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="menu-link">
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="menu-link">
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )}
    </div>
  );
};

export default Navbar;
