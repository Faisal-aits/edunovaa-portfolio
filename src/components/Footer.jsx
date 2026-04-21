import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram, FiFacebook, FiGithub } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-grid-3">
          {/* Column 1: Brand & About */}
          <div className="footer-column brand-column">
            <Link to="/" className="footer-logo">
              Edunovaa
            </Link>
            <p className="footer-about">
              Leading the digital revolution in education. We provide robust, scalable, and intuitive management systems that empower modern educational institutions to drive growth and success.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/919322195628" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp"><FiMail /></a>
              <a href="https://www.linkedin.com/company/arham-it-solution/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><FiLinkedin /></a>
              <a href="https://www.facebook.com/p/Arham-It-Solution-61577270974994/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook"><FiFacebook /></a>
              <a href="https://www.instagram.com/ArhamITSolution" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><FiInstagram /></a>
            </div>
          </div>

          {/* Column 2: Support & Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Support & Links</h4>
            <ul className="footer-links">
              <li><Link to="/features">Core Features</Link></li>
              <li><Link to="/panels">Panels</Link></li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@arhamitsolution.in" target="_blank" rel="noopener noreferrer">Book a Demo (Email)</a></li>
              <li><a href="https://wa.me/919322195628" target="_blank" rel="noopener noreferrer">Book a Demo (WhatsApp)</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-column contact-column">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info-list">
              <a href="https://www.google.com/maps/search/?api=1&query=Gulmohar+Road,+Sambhajinagar+Road,+Ahmednagar" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="icon-box"><FiMapPin /></div>
                <div className="info-text">
                  <span className="info-label">Our Office</span>
                  <p>Gulmohar Road, Sambhajinagar Road, Above Indian Bank, Below Power House Gym, Ahliyanagar</p>
                </div>
              </a>
              <a href="tel:+919322195628" className="contact-info-item">
                <div className="icon-box"><FiPhone /></div>
                <div className="info-text">
                  <span className="info-label">Call Now</span>
                  <p>+91 93221 95628</p>
                </div>
              </a>
              <a href="mailto:info@arhamitsolution.in" className="contact-info-item">
                <div className="icon-box"><FiMail /></div>
                <div className="info-text">
                  <span className="info-label">Email Support</span>
                  <p>info@arhamitsolution.in</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Edunovaa. All rights reserved.</p>
            <div className="bottom-meta">
              <span>Empowering Education Through Innovation</span>
              <span className="divider">|</span>
              <span>Powered by <a href="https://arhamitsolution.in" target="_blank" rel="noopener noreferrer">Arham IT Solution</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
