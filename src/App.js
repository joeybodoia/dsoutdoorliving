import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Spa from './pages/Spa';
import Swim from './pages/Swim';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
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
