import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>

      {/* Box Links Section */}
      <div className="box-links">
        <Link to="/spa" className="box-link spa-box">
          <div className="box-overlay">
            <h2>Spa</h2>
          </div>
        </Link>
        <Link to="/swimspas" className="box-link swim-box">
          <div className="box-overlay">
            <h2>Swim Spa</h2>
          </div>
        </Link>
        <Link to="/gazebo" className="box-link gazebo-box">
          <div className="box-overlay">
            <h2>Gazebo</h2>
          </div>
        </Link>
      </div>

      {/* Our Story Section */}
      <section id="our-story" className="our-story">
        <h2>Our Story</h2>
        <p>
          Welcome to Outdoor Leisure! We started with a simple goal: to provide top-quality spas, swim spas, and gazebos to enhance your outdoor living experience.
        </p>
        <p>
          Over the years, we’ve expanded our offerings and built a reputation for exceptional customer service. Whether you’re looking for a tranquil spa or a stylish gazebo, Outdoor Leisure is here to help you create the perfect outdoor oasis.
        </p>
        <p>
          We are proud to be a trusted name in the industry and look forward to helping you find the perfect addition to your outdoor space.
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="contact-us">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> contact@outdoorleisure.com</p>
        <p><strong>Address:</strong> 1234 Leisure Lane, Relaxation City, RL 12345</p>
      </section>
    </div>
  );
};

export default Home;

