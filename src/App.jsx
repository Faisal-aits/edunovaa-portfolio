import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Modules from './pages/Modules';
import Panels from './pages/Panels';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar onBookDemo={handleBookDemo} />
        <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        
        <Routes>
          <Route path="/" element={<Home onBookDemo={handleBookDemo} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/panels" element={<Panels />} />
        </Routes>
        
        <Footer />

        {showScrollTop && (
          <button className="scroll-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;