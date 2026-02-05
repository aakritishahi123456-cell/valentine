import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      number: '500K+',
      label: 'Active Users',
      icon: '👥'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      icon: '⚡'
    },
    {
      number: '150+',
      label: 'Countries',
      icon: '🌍'
    },
    {
      number: '24/7',
      label: 'Support',
      icon: '🛟'
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;