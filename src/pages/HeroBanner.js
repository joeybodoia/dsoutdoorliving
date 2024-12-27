import React from 'react';
import heroImage from '../assets/images/hero-banner.jpg'; // Current Hero Banner Image
import adImage2 from '../assets/images/ad_image2.jpg'; // Second Ad Image
import adImage3 from '../assets/images/ad_image3.jpg';



const HeroBanner = () => {
  return (
    <div className="hero-banner">
      {/* Left Side: Text Content */}
      <div className="hero-text">
        <h1>Welcome to D's Outdoor Living</h1>
        <p>Drive a little, save a lot</p>
        <a href="#our-story" className="hero-button">Start Exploring</a>
      </div>

      {/* Center: Logo in Oval */}
      <div className="hero-logo">
        <div className="logo-container">
          <img src={heroImage} alt="D's Outdoor Living Logo" className="logo-image" />
        </div>
      </div>

      {/* Right Side: Ad Image */}
      /*
      <div className="hero-ad">
        <img src={adImage3} alt="Ad" className="ad-image" />
      </div>
      */
    </div>
   
  );
};

export default HeroBanner;
