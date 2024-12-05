import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Spa from './pages/Spa';
import Swim from './pages/Swim';
import Gazebo from './pages/Gazebo';  // Import the new Gazebo page
import SpaDetail from './pages/SpaDetail'; // Import SpaDetail
import SwimDetail from './pages/SwimDetail';
import GazeboDetail from './pages/GazeboDetail';
import './assets/css/App.css';
// import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Router>
      {/* Top Nav Bar */}
      <nav className="top-navbar">
        <div className="top-navbar-left">
          Call to schedule a private appointment to view our showroom @ (480) 716-4277
        </div>
        <div className="top-navbar-right">
          <a href="#our-story">Our Story</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </nav>

      {/* Main Nav Bar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/spa">Spas</Link></li>
          <li><Link to="/swimspas">Swim Spas</Link></li>
          <li><Link to="/gazebo">Gazebos</Link></li> {/* Add Gazebo to the nav */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/swimspas" element={<Swim />} />
        <Route path="/swimspas/:productName" element={<SwimDetail />} />
        <Route path="/gazebo" element={<Gazebo />} /> {/* Add Gazebo route */}
      <Route path="/gazebos/:productName" element={<GazeboDetail />} />
        <Route path="/spa/:productName" element={<SpaDetail />} /> {/* Add SpaDetail route */}
      </Routes>
    </Router>
  );  
};

export default App;
