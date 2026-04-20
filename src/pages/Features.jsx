import React, { useRef, useState } from 'react';
import './Features.css';
import adminDashboardImg from '../assets/images/admin-dashboard.png';
import feeCollectionImg from '../assets/images/fee-collection.png';
import studentManagementImg from '../assets/images/student-management.png';
import teachersImg from '../assets/images/teachers.png';
import attendanceImg from '../assets/images/attendance.png';


const Features = () => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="features-page" style={{ paddingTop: '80px' }}>
      <section id="features" className="admin-section">
        <div className="admin-section-container">
          <div className="admin-section-label">Administrator Portal</div>
          <h2 className="admin-section-title">Complete Control at Your Fingertips</h2>
          <p className="admin-section-intro">
            Real-time overview of every metric — students, teachers, staff, and fee collections — from a single dashboard.
          </p>

          <div className="admin-section-screens-grid">
            <div 
              className="admin-section-screen-card admin-section-screen-card-hover"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="admin-section-screen-label">Admin Dashboard — Real-Time Overview</div>
              <div className="admin-section-screen-card-frame admin-section-screen-card-frame-main">
                <img 
                  src={adminDashboardImg} 
                  alt="Admin Dashboard" 
                  className={`admin-section-screen-image admin-section-screen-image-main ${isHovered ? 'hidden' : ''}`} 
                />
                <video 
                  ref={videoRef}
                  className={`admin-section-screen-video ${isHovered ? 'visible' : ''}`}
                  src={adminVideo} 
                  muted 
                  loop 
                  playsInline
                />
              </div>
            </div>
            
            <div className="admin-section-screens-two">
              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">Fee Collection & Finance</div>
                <div className="admin-section-screen-card-frame-small">
                  <img src={feeCollectionImg} alt="Fee Collection" className="admin-section-screen-image" />
                </div>
              </div>
              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">Student Management</div>
                <div className="admin-section-screen-card-frame-small">
                  <img src={studentManagementImg} alt="Student Management" className="admin-section-screen-image" />
                </div>
              </div>
            </div>

            <div className="admin-section-screens-two">
              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">Teacher Directory</div>
                <div className="admin-section-screen-card-frame-small">
                  <img src={teachersImg} alt="Teachers" className="admin-section-screen-image" />
                </div>
              </div>
              <div className="admin-section-screen-card-small">
                <div className="admin-section-screen-label-gold">Attendance Management</div>
                <div className="admin-section-screen-card-frame-small">
                  <img src={attendanceImg} alt="Attendance" className="admin-section-screen-image" />
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
