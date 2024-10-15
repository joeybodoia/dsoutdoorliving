import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Spa from './pages/Spa';
import Swim from './pages/Swim';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Router>
      {/* New Top Nav Bar */}
      <nav className="top-navbar">
        <div className="top-navbar-left">
          Call to schedule a private appointment to view our showroom @ 253-696-9696
        </div>
        <div className="top-navbar-right">
          <a href="#our-story">Our Story</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </nav>

      {/* Existing Nav Bar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/spa">Spa</Link></li>
          <li><Link to="/swim">Swim</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/swim" element={<Swim />} />
      </Routes>
    </Router>
  );  
};

export default App;

