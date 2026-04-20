import React, { useState } from 'react';
import './Features.css';

import adminDashboardImg from '../assets/images/admin-dashboard.png';
import feeCollectionImg from '../assets/images/fee-collection.png';
import studentManagementImg from '../assets/images/student-management.png';
import teachersImg from '../assets/images/teachers.png';
import attendanceImg from '../assets/images/attendance.png';

const Features = () => {
  const [isHovered, setIsHovered] = useState(false);

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
                className={`hover-video-container${isHovered ? ' is-hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                {/* IMAGE */}
                <img
                  src={adminDashboardImg}
                  alt="Admin Dashboard"
                  className="hover-image"
                />

                {/* VIDEO — only mounted on hover so autoplay works */}
                {isHovered && (
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