import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Features.css';

import adminDashboardImg from '../assets/images/admin-dashboard.png';
import feeCollectionImg from '../assets/images/fee-collection.png';
import studentManagementImg from '../assets/images/student-management.png';
import teachersImg from '../assets/images/teachers.png';
import attendanceImg from '../assets/images/attendance.png';

const Features = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  // Close video when tapping outside on mobile
  const handleOutsideClick = useCallback((e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <div className="features-page" style={{ paddingTop: '80px' }}>
      <section id="features" className="admin-section">

        <div className="admin-section-container">

          <div className="admin-section-label">Administrator Portal</div>

          <h2 className="admin-section-title">
            Complete Control at Your Fingertips
          </h2>

          <p className="admin-section-intro">
            Real-time overview of every metric — students, teachers, staff, and fee collections — from a single dashboard.
          </p>

          <div className="admin-section-screens-grid">

            {/* MAIN CARD */}
            <div className="admin-section-screen-card">

              <div className="admin-section-screen-label">
                Admin Dashboard — Real-Time Overview
              </div>

              <div
                ref={containerRef}
                className={`hover-video-container${isActive ? ' is-hovered' : ''}`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsActive((prev) => !prev);
                }}
              >

                {/* IMAGE */}
                <img
                  src={adminDashboardImg}
                  alt="Admin Dashboard"
                  className="hover-image"
                />

                {/* Tap to play label on mobile */}
                {!isActive && (
                  <div className="tap-to-play-label">▶ Tap to play demo</div>
                )}

                {/* VIDEO — only mounted when active */}
                {isActive && (
                  <iframe
                    className="hover-video"
                    src="https://www.youtube.com/embed/q__MX2JkfWQ?autoplay=1&mute=1&loop=1&playlist=q__MX2JkfWQ"
                    title="Admin Demo"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}

              </div>

            </div>

            {/* OTHER CARDS */}
            <div className="admin-section-screens-two">

              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">
                  Fee Collection & Finance
                </div>
                <div className="small-img-box">
                  <img src={feeCollectionImg} alt="Fee Collection" />
                </div>
              </div>

              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">
                  Student Management
                </div>
                <div className="small-img-box">
                  <img src={studentManagementImg} alt="Student Management" />
                </div>
              </div>

            </div>

            <div className="admin-section-screens-two">

              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">
                  Teacher Directory
                </div>
                <div className="small-img-box">
                  <img src={teachersImg} alt="Teachers" />
                </div>
              </div>

              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">
                  Attendance Management
                </div>
                <div className="small-img-box">
                  <img src={attendanceImg} alt="Attendance" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Features;