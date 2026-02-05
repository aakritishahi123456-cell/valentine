import React from 'react';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure with 99.9% uptime guarantee and enterprise-grade security.',
      features: ['Auto-scaling', 'Global CDN', '24/7 Support']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics to transform your business operations.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: '📊',
      title: 'Business Intelligence',
      description: 'Real-time dashboards and advanced analytics for data-driven decision making.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and customer data.',
      features: ['Threat Detection', 'Identity Management', 'Compliance Tools']
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="fade-in-up">Our Products</h2>
          <p className="section-description fade-in-up-delay">
            Discover our comprehensive suite of enterprise solutions designed to accelerate your digital transformation
          </p>
        </div>
        
        <div className="grid grid-2 products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline product-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;