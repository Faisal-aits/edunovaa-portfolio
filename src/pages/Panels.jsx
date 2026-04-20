import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import './Panels.css';
import teachersImg from '../assets/images/teachers.png';
import studentAttendanceImg from '../assets/images/student-attendance.png';

const Panels = () => {
  const [teacherActive, setTeacherActive] = useState(false);
  const [studentActive, setStudentActive] = useState(false);
  const teacherRef = useRef(null);
  const studentRef = useRef(null);

  // Close videos when tapping outside on mobile
  const handleOutsideClick = useCallback((e) => {
    if (teacherRef.current && !teacherRef.current.contains(e.target)) {
      setTeacherActive(false);
    }
    if (studentRef.current && !studentRef.current.contains(e.target)) {
      setStudentActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <div className="portals-page" style={{ paddingTop: '80px' }}>
      <section id="portals" className="portals-section">
        <div className="portals-section-container">
          <div className="portals-section-label">Dedicated Panels</div>
          <h2 className="portals-section-title">Tailored Experience for Every Role</h2>
          <p className="portals-section-intro">
            Teachers manage their classes independently. Students track their own progress — reducing admin burden significantly.
          </p>

          <div className="portals-section-grid">
            {/* Teacher Panel */}
            <div
              ref={teacherRef}
              className={`portals-section-card portals-section-card-teal${teacherActive ? ' is-hovered' : ''}`}
              onMouseEnter={() => setTeacherActive(true)}
              onMouseLeave={() => setTeacherActive(false)}
              onClick={(e) => {
                e.stopPropagation();
                setTeacherActive((prev) => !prev);
              }}
            >
              <div className="portals-card-row">
                <div className="portals-card-info">
                  <div className="portals-section-header portals-section-header-teal">
                    <div className="portals-section-header-icon"><FaChalkboardTeacher /></div>
                    <div>
                      <div className="portals-section-header-title">Teacher Panel</div>
                      <div className="portals-section-header-sub">Manage classes & student progress</div>
                    </div>
                  </div>
                  <div className="portals-section-features">
                    <div className="portals-section-feature">Personal dashboard with assigned classes</div>
                    <div className="portals-section-feature">Mark & view student attendance records</div>
                    <div className="portals-section-feature">Create & manage assignments</div>
                    <div className="portals-section-feature">Track syllabus completion by subject</div>
                    <div className="portals-section-feature">View class timetable & student fees</div>
                  </div>
                </div>
                <div className="portals-section-screen">
                  <img src={teachersImg} alt="Teacher Dashboard" className="portals-section-screen-image" />
                  {!teacherActive && (
                    <div className="tap-to-play-label">▶ Tap to play demo</div>
                  )}
                  {teacherActive && (
                    <iframe
                      className="portals-section-screen-video"
                      src="https://www.youtube.com/embed/ys_k65ez0uE?autoplay=1&mute=1&loop=1&playlist=ys_k65ez0uE"
                      title="Teacher Demo"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>

            {/* Student Panel */}
            <div
              ref={studentRef}
              className={`portals-section-card portals-section-card-gold${studentActive ? ' is-hovered' : ''}`}
              onMouseEnter={() => setStudentActive(true)}
              onMouseLeave={() => setStudentActive(false)}
              onClick={(e) => {
                e.stopPropagation();
                setStudentActive((prev) => !prev);
              }}
            >
              <div className="portals-card-row">
                <div className="portals-card-info">
                  <div className="portals-section-header portals-section-header-gold">
                    <div className="portals-section-header-icon"><FaUserGraduate /></div>
                    <div>
                      <div className="portals-section-header-title">Student Panel</div>
                      <div className="portals-section-header-sub">Track your academic journey</div>
                    </div>
                  </div>
                  <div className="portals-section-features">
                    <div className="portals-section-feature">View daily & monthly attendance records</div>
                    <div className="portals-section-feature">Check fee summary & payment history</div>
                    <div className="portals-section-feature">Access class timetable anytime</div>
                    <div className="portals-section-feature">View & submit assignments</div>
                    <div className="portals-section-feature">Track syllabus progress by subject</div>
                  </div>
                </div>
                <div className="portals-section-screen">
                  <img src={studentAttendanceImg} alt="Student Dashboard" className="portals-section-screen-image" />
                  {!studentActive && (
                    <div className="tap-to-play-label">▶ Tap to play demo</div>
                  )}
                  {studentActive && (
                    <iframe
                      className="portals-section-screen-video"
                      src="https://www.youtube.com/embed/mbwzDjmv1x8?autoplay=1&mute=1&loop=1&playlist=mbwzDjmv1x8"
                      title="Student Demo"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panels;
