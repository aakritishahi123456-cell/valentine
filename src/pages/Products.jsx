import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure with enterprise-grade security and 99.9% uptime guarantee.',
      features: ['Auto-scaling Infrastructure', 'Global CDN', 'Load Balancing', 'Disaster Recovery', '24/7 Monitoring', 'API Gateway'],
      pricing: 'Starting at $99/month'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics to transform your business operations.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Workflows', 'Custom Models', 'Real-time Insights'],
      pricing: 'Starting at $199/month'
    },
    {
      icon: '📊',
      title: 'Business Intelligence',
      description: 'Real-time dashboards and advanced analytics for data-driven decision making.',
      features: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Tracking', 'Automated Alerts', 'Mobile Access'],
      pricing: 'Starting at $149/month'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and customer data.',
      features: ['Threat Detection', 'Identity Management', 'Compliance Tools', 'Security Audits', 'Incident Response', 'Employee Training'],
      pricing: 'Starting at $299/month'
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="fade-in-up">Our Products</h1>
            <p className="products-hero-description fade-in-up-delay">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-detail-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="product-header">
                  <div className="product-icon-large">{product.icon}</div>
                  <div className="product-info">
                    <h2>{product.title}</h2>
                    <p className="product-price">{product.pricing}</p>
                  </div>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-features-section">
                  <h4>Key Features</h4>
                  <ul className="product-features-list">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="product-actions">
                  <button className="btn btn-primary">Get Started</button>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in-up">Compare Plans</h2>
            <p className="section-description fade-in-up-delay">
              Choose the perfect solution for your business needs
            </p>
          </div>
          
          <div className="comparison-table fade-in-up">
            <div className="comparison-header">
              <div className="comparison-feature">Features</div>
              <div className="comparison-plan">Starter</div>
              <div className="comparison-plan">Professional</div>
              <div className="comparison-plan popular">Enterprise</div>
            </div>
            
            {[
              { feature: 'Users', starter: '5', professional: '25', enterprise: 'Unlimited' },
              { feature: 'Storage', starter: '10GB', professional: '100GB', enterprise: '1TB+' },
              { feature: 'API Calls', starter: '1K/month', professional: '10K/month', enterprise: 'Unlimited' },
              { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: '24/7 Phone' },
              { feature: 'SLA', starter: '99%', professional: '99.5%', enterprise: '99.9%' },
              { feature: 'Custom Integrations', starter: '❌', professional: '✅', enterprise: '✅' },
              { feature: 'Advanced Analytics', starter: '❌', professional: '✅', enterprise: '✅' },
              { feature: 'White-label', starter: '❌', professional: '❌', enterprise: '✅' }
            ].map((row, index) => (
              <div key={index} className="comparison-row">
                <div className="comparison-feature">{row.feature}</div>
                <div className="comparison-value">{row.starter}</div>
                <div className="comparison-value">{row.professional}</div>
                <div className="comparison-value">{row.enterprise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="products-cta">
            <h2 className="fade-in-up">Ready to Get Started?</h2>
            <p className="fade-in-up-delay">
              Join thousands of companies that trust our solutions to power their digital transformation.
            </p>
            <div className="products-cta-actions fade-in-up-delay">
              <button className="btn btn-primary btn-large">Start Free Trial</button>
              <button className="btn btn-secondary btn-large">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;