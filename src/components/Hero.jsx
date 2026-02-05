import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in-up">
              Empowering Innovation Through 
              <span className="text-gradient"> Technology</span>
            </h1>
            <p className="hero-description fade-in-up-delay">
              Transform your business with cutting-edge solutions designed for the modern enterprise. 
              We deliver scalable, secure, and intelligent technology that drives growth and innovation.
            </p>
            <div className="hero-actions fade-in-up-delay">
              <button className="btn btn-primary btn-large">
                Get Started Today
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn btn-secondary btn-large">
                Watch Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <h4>Analytics</h4>
                <p>Real-time insights</p>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🔒</div>
                <h4>Security</h4>
                <p>Enterprise-grade</p>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">⚡</div>
                <h4>Performance</h4>
                <p>Lightning fast</p>
              </div>
              <div className="hero-main-visual">
                <div className="visual-grid">
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item active"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;