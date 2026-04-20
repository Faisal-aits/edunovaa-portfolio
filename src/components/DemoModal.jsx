import React from 'react';
import { FiMail, FiMessageCircle, FiPhone, FiX } from 'react-icons/fi';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="demo-modal-close" onClick={onClose}>
          <FiX />
        </button>
        <h2 className="demo-modal-title">Book a Demo</h2>
        <p className="demo-modal-subtitle">Choose your preferred way to connect with us:</p>
        
        <div className="demo-modal-options">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@arhamitsolution.in" target="_blank" rel="noopener noreferrer" className="demo-option-card email-card" onClick={onClose}>
            <div className="demo-option-icon"><FiMail /></div>
            <div className="demo-option-text">
              <h3>Email Us</h3>
              <p>Send us a detailed message</p>
            </div>
            <div className="demo-option-arrow">→</div>
          </a>
          
          <a href="https://wa.me/919322195628" target="_blank" rel="noopener noreferrer" className="demo-option-card whatsapp-card" onClick={onClose}>
            <div className="demo-option-icon"><FiMessageCircle /></div>
            <div className="demo-option-text">
              <h3>WhatsApp</h3>
              <p>Chat with us instantly</p>
            </div>
            <div className="demo-option-arrow">→</div>
          </a>

          <a href="tel:+919322195628" className="demo-option-card call-card" onClick={onClose}>
            <div className="demo-option-icon"><FiPhone /></div>
            <div className="demo-option-text">
              <h3>Call Us</h3>
              <p>Speak to us directly</p>
            </div>
            <div className="demo-option-arrow">→</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
