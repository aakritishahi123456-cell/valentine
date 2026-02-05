import React from 'react';
import './ServiceGrid.css';

const ServiceGrid = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.'
    },
    {
      icon: '💼',
      title: 'Consulting Services',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your IT investments.'
    },
    {
      icon: '🛠️',
      title: 'Implementation & Support',
      description: 'Professional implementation services with ongoing support to ensure your success.'
    },
    {
      icon: '📈',
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to maximize performance and minimize costs.'
    },
    {
      icon: '🎓',
      title: 'Training & Education',
      description: 'Comprehensive training programs to upskill your team on the latest technologies.'
    },
    {
      icon: '🔧',
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique business requirements.'
    }
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in-up">Our Services</h2>
          <p className="section-description fade-in-up-delay">
            Comprehensive services to support your technology journey from strategy to implementation
          </p>
        </div>
        
        <div className="grid grid-3 services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-link">
                <span>Learn more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;