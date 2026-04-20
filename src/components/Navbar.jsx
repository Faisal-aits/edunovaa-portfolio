import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import schoolLogo from '../assets/images/school.png';

const Navbar = ({ onBookDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Modules', path: '/modules' },
    { name: 'Panels', path: '/panels' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={schoolLogo} alt="Edunovaa Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`navbar-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={onBookDemo} className="navbar-demo-btn">
            Book Demo →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`navbar-mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={onBookDemo} className="navbar-mobile-demo-btn">
            Book Demo →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;