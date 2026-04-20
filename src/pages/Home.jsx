import React from 'react';
import { FiShield, FiBookOpen, FiUser, FiClock, FiDollarSign, FiMessageCircle, FiFolder, FiBarChart2, FiLock } from 'react-icons/fi';
import './Home.css';

import homeImg from '../assets/images/homeimage.jpeg';
import schoolLogo from '../assets/images/edunovaa.png';

const roles = [
  { icon: <FiShield />, name: 'School Administrator', desc: 'Full control students, staff, fees, salaries & reports' },
  { icon: <FiBookOpen />, name: 'Teachers', desc: 'Classes, attendance, assignments & syllabus' },
  { icon: <FiUser />, name: 'Students', desc: 'Fees, timetable, attendance & assignments' },
];

const benefits = [
  { icon: <FiClock />, title: 'Save Hours Every Day', desc: 'Automate attendance, fee reminders, salary generation, and report printing tasks that took hours now take minutes.' },
  { icon: <FiDollarSign />, title: 'Zero Revenue Leakage', desc: 'Track every rupee fee collections, pending dues, expenses, and salary outflows all in one transparent financial dashboard.' },
  { icon: <FiMessageCircle />, title: 'Parent Communication', desc: 'Send fee reminders, attendance updates, and notices directly to parents via WhatsApp no extra app needed.' },
  { icon: <FiFolder />, title: 'Paperless Records', desc: 'Store student documents, Aadhaar, birth certificates, and staff records digitally find anything in seconds, not hours.' },
  { icon: <FiBarChart2 />, title: 'Instant Reports for Audit', desc: 'Generate financial summaries, attendance reports, and student lists instantly always audit-ready without last minute panic.' },
  { icon: <FiLock />, title: 'Data Privacy & Security', desc: 'Role based access ensures staff only see what they need no data leaks, no unauthorized access to sensitive records.' },
];

const reasons = [
  {
    title: 'Cloud-Based Access',
    desc: 'Access your school data from anywhere, on any device — mobile, tablet, or desktop.',
  },
  {
    title: 'Highly Scalable',
    desc: 'Whether you have 100 students or 10,000, Edunovaa grows with your institution.',
  },
  {
    title: 'No Extra Apps Required',
    desc: 'Communicate directly with parents via global tools like WhatsApp and standard SMS.',
  },
  {
    title: 'Built-in Security',
    desc: 'Enterprise-grade encryption and role-based access to keep sensitive school data safe.',
  },
];

const Home = ({ onBookDemo }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content" >
            <h1 className="hero-title">
              Edunovaa
            </h1>
            <p className="hero-subtitle">
              A complete web-based platform to digitize and streamline every aspect
              of school administration — from student enrollment to financial reporting.
            </p>
            <div className="hero-tagline">
              "Transforming school administration from paperwork to clicks."
            </div>
            <button onClick={onBookDemo} className="hero-cta-btn">
              Book a Live Demo →
            </button>
          </div>

          <div className="hero-image-area">
            <img src={homeImg} alt="Edunovaa Mockup" className="hero-mockup-img" />
          </div>
        </div>
      </section>

      {/* Role Strip */}
      <section className="role-strip">
        <div className="role-strip-container">
          {roles.map((role, index) => (
            <div key={index} className="role-strip-item">
              <div className="role-strip-icon">{role.icon}</div>
              <div>
                <div className="role-strip-name">{role.name}</div>
                <div className="role-strip-desc">{role.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefits-container">
          <div className="benefits-header">
            <h2 className="benefits-title">What Schools Gain with Edunovaa</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefits-card">
                <div className="benefits-card-icon">{benefit.icon}</div>
                <div>
                  <div className="benefits-card-title">{benefit.title}</div>
                  <div className="benefits-card-desc">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack
      <section className="tech-stack">
        <div className="tech-stack-container">
          <div className="tech-stack-label">Crafted with Modern Tech:</div>
          <div className="tech-stack-pills">
            <span className="tech-pill">React.js</span>
            <span className="tech-pill">Django Rest Framework</span>
            <span className="tech-pill">PostgreSQL</span>
            <span className="tech-pill">Cloud Infrastructure</span>
          </div>
        </div>
      </section> */}

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <h2 className="why-choose-title">Why Schools Choose Edunovaa</h2>
          </div>
          <div className="why-choose-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="why-choose-card">
                <h3 className="why-choose-card-title">{reason.title}</h3>
                <p className="why-choose-card-desc">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
