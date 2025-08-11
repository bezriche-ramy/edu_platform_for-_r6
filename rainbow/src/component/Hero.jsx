import React from 'react';
import './Hero.css';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>RAINBOW SIX SIEGE</h1>
        
        <button>discover it now</button>
      </div>
    </div>
  );
};

export default Hero;