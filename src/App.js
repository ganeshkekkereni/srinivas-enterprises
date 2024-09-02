import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Business from './components/Business';
import Land from './components/Land';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Land" element={<Land />} />
        <Route path="/Business" element={<Business/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
