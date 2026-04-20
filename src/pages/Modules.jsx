import React from 'react';
import { FiDollarSign, FiCheckCircle, FiCalendar, FiClock, FiBarChart2, FiArrowUp } from 'react-icons/fi';
import './Modules.css';

const modules = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
];

const moduleNames = [
  'Student Management', 'Teacher Management', 'Non-Teaching Staff', 'Attendance System',
  'Fee & Finance', 'Salary Management', 'Timetable', 'Syllabus Tracking',
  'Assignments', 'Holiday Calendar', 'External Schools', 'Reports & Print'
];

const featuresList = [
  { icon: <FiDollarSign />, title: 'Fee & Finance', desc: 'Full-cycle fee management with receipts, ledgers, WhatsApp reminders, expense tracking, and financial reports.' },
  { icon: <FiCheckCircle />, title: 'Smart Attendance', desc: 'One click marking for students, teachers and staff. Holiday detection, monthly summaries, and filterable reports.' },
  { icon: <FiCalendar />, title: 'Timetable Builder', desc: 'Period configuration, class-wise and teacher wise schedules with built in conflict detection.' },
  { icon: <FiClock />, title: 'Salary Module', desc: 'Auto generate monthly salaries, track payments, and produce professional salary slips for all staff.' },
  { icon: <FiBarChart2 />, title: 'Reports & Analytics', desc: '10 plus report types financial summaries, attendance charts, fee receipts, and student report cards.' },
  { icon: <FiArrowUp />, title: 'Batch Promotion', desc: 'Promote entire classes in one click with automatic fee balance carry forward to the next academic year.' },
];

const Modules = () => {
  return (
    <div className="modules-page" style={{ paddingTop: '80px' }}>
      <section id="modules" className="modules-section">
        <div className="modules-section-container">
          <div className="modules-section-label">Core Modules</div>
          <h2 className="modules-section-title">Everything a School Needs</h2>
          <p className="modules-section-intro">12+ purpose-built modules covering every operational aspect of school management.</p>

          <div className="modules-section-grid">
            {modules.map((num, index) => (
              <div key={index} className="modules-section-module">
                <div className="modules-section-module-num">{num}</div>
                <div className="modules-section-module-name">{moduleNames[index]}</div>
              </div>
            ))}
          </div>

          <div className="modules-section-features-grid">
            {featuresList.map((feature, index) => (
              <div key={index} className="modules-section-feature">
                <div className="modules-section-feature-icon">{feature.icon}</div>
                <div className="modules-section-feature-title">{feature.title}</div>
                <div className="modules-section-feature-desc">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
