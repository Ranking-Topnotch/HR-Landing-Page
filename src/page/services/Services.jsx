import React from 'react';
import './services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Talent Management</h3>
          <p>Efficient strategies for talent acquisition and retention.</p>
        </div>
        <div className="service-item">
          <h3>Payroll Solutions</h3>
          <p>Accurate and streamlined payroll services.</p>
        </div>
        <div className="service-item">
          <h3>Compliance Assistance</h3>
          <p>Stay compliant with all relevant employment laws.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
