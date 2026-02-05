import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      details: [
        'Legacy System Modernization',
        'Process Automation',
        'Cloud Migration Strategy',
        'Digital Workflow Design',
        'Change Management',
        'ROI Optimization'
      ],
      duration: '3-12 months',
      deliverables: 'Strategy roadmap, implementation plan, training materials'
    },
    {
      icon: '💼',
      title: 'Technology Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your IT investments.',
      details: [
        'Technology Assessment',
        'Architecture Design',
        'Vendor Selection',
        'Cost Optimization',
        'Risk Assessment',
        'Compliance Review'
      ],
      duration: '2-8 weeks',
      deliverables: 'Detailed reports, recommendations, implementation roadmap'
    },
    {
      icon: '🛠️',
      title: 'Implementation & Support',
      description: 'Professional implementation services with ongoing support to ensure your success.',
      details: [
        'System Integration',
        'Data Migration',
        'User Training',
        'Go-live Support',
        'Performance Monitoring',
        'Ongoing Maintenance'
      ],
      duration: '1-6 months',
      deliverables: 'Fully configured systems, documentation, support plan'
    },
    {
      icon: '🔧',
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique business requirements.',
      details: [
        'Requirements Analysis',
        'Custom Application Development',
        'API Development',
        'Database Design',
        'Testing & QA',
        'Deployment & Maintenance'
      ],
      duration: '2-12 months',
      deliverables: 'Custom software, source code, documentation, support'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="fade-in-up">Our Services</h1>
            <p className="services-hero-description fade-in-up-delay">
              Comprehensive technology services to support your journey from strategy to implementation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-detail-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h2>{service.title}</h2>
                </div>
                
                <p className="service-detail-description">{service.description}</p>
                
                <div className="service-details-section">
                  <h4>What's Included</h4>
                  <ul className="service-details-list">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-meta">
                  <div className="service-meta-item">
                    <strong>Duration:</strong> {service.duration}
                  </div>
                  <div className="service-meta-item">
                    <strong>Deliverables:</strong> {service.deliverables}
                  </div>
                </div>
                
                <div className="service-actions">
                  <button className="btn btn-primary">Get Quote</button>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in-up">Our Process</h2>
            <p className="section-description fade-in-up-delay">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="process-steps">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We start by understanding your business needs, current challenges, and future goals.'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Develop a comprehensive strategy and detailed project plan with clear milestones.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the plan with regular check-ins and transparent communication throughout.'
              },
              {
                step: '04',
                title: 'Testing & Optimization',
                description: 'Thorough testing and optimization to ensure everything works perfectly.'
              },
              {
                step: '05',
                title: 'Launch & Support',
                description: 'Smooth launch with ongoing support to ensure long-term success.'
              }
            ].map((process, index) => (
              <div key={index} className="process-step fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="process-step-number">{process.step}</div>
                <div className="process-step-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="services-cta">
            <h2 className="fade-in-up">Ready to Start Your Project?</h2>
            <p className="fade-in-up-delay">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <div className="services-cta-actions fade-in-up-delay">
              <button className="btn btn-primary btn-large">Schedule Consultation</button>
              <button className="btn btn-secondary btn-large">View Case Studies</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;