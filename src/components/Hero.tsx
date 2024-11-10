import React from 'react';
import Navbar from './Navbar';
import '../styles/hero.css'; // Import the custom CSS

const Hero = () => {
  return (
    <div id="hero" className="hero-section">
      <Navbar />
      <div className="hero-container">
        <div className="hero-hidden bg-[url(/main.png)]"></div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">
              <span className="hero-accent">Ali </span>Khan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
