import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="fade-in-up">Ready to Transform Your Business?</h2>
            <p className="fade-in-up-delay">
              Join thousands of companies that trust us to deliver innovative technology solutions. 
              Start your digital transformation journey today.
            </p>
          </div>
          <div className="cta-actions fade-in-up-delay">
            <button className="btn btn-primary btn-large">
              Get Started Free
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-outline btn-large cta-secondary">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;