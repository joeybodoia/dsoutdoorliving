import React from 'react';
import heroImage from '../assets/images/hero-banner.jpg'; // Ensure the correct path

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      {/* Left Side: Text Content */}
      <div className="hero-text">
        <h1>Welcome to D's Outdoor Living</h1>
        <p>Drive a little, save alot</p>
        <a href="#our-story" className="hero-button">Start Exploring</a>
      </div>

      {/* Right Side: Logo in Oval */}
      <div className="hero-logo">
        <div className="logo-container">
          <img src={heroImage} alt="D's Outdoor Living Logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

