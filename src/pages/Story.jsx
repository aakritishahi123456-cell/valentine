import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <div className="story-page">
      {/* Hero Section */}
      <section className="story-hero">
        <div className="container">
          <div className="story-hero-content">
            <h1 className="fade-in-up">Our Story</h1>
            <p className="story-hero-description fade-in-up-delay">
              Founded with a vision to democratize technology and empower businesses of all sizes 
              to achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="fade-in-up">Our Mission</h2>
              <p className="fade-in-up-delay">
                To empower organizations worldwide with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We believe that technology should be accessible, 
                reliable, and transformative for businesses of every size.
              </p>
              <p className="fade-in-up-delay">
                Our commitment extends beyond just providing software – we're dedicated to building 
                lasting partnerships that help our clients navigate the complexities of digital transformation 
                and emerge stronger in an ever-evolving technological landscape.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-icon">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section section-light">
        <div className="container">
          <div className="vision-content">
            <div className="vision-visual">
              <div className="vision-icon">🚀</div>
            </div>
            <div className="vision-text">
              <h2 className="fade-in-up">Our Vision</h2>
              <p className="fade-in-up-delay">
                To be the world's most trusted technology partner, recognized for our innovation, 
                reliability, and unwavering commitment to customer success. We envision a future 
                where every organization, regardless of size or industry, has access to enterprise-grade 
                technology solutions.
              </p>
              <p className="fade-in-up-delay">
                We're building towards a world where technology barriers are eliminated, enabling 
                businesses to focus on what they do best while we handle the complexities of 
                modern digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in-up">Our Values</h2>
            <p className="section-description fade-in-up-delay">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-3 values-grid">
            {[
              {
                icon: '🤝',
                title: 'Trust & Transparency',
                description: 'We build lasting relationships through honest communication and reliable service delivery.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We continuously push boundaries to deliver cutting-edge solutions that drive real business value.'
              },
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
              },
              {
                icon: '🌱',
                title: 'Growth Mindset',
                description: 'We embrace challenges as opportunities to learn, improve, and deliver better outcomes.'
              },
              {
                icon: '🤲',
                title: 'Customer-Centric',
                description: 'Our customers\' success is our success. We go above and beyond to exceed expectations.'
              },
              {
                icon: '🌍',
                title: 'Global Impact',
                description: 'We strive to make a positive impact on businesses and communities worldwide.'
              }
            ].map((value, index) => (
              <div key={index} className="value-card card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in-up">Our Journey</h2>
            <p className="section-description fade-in-up-delay">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="timeline">
            {[
              {
                year: '2018',
                title: 'Company Founded',
                description: 'Started with a small team and a big vision to transform how businesses use technology.'
              },
              {
                year: '2019',
                title: 'First Major Client',
                description: 'Successfully delivered our first enterprise solution, establishing our reputation for excellence.'
              },
              {
                year: '2020',
                title: 'Global Expansion',
                description: 'Expanded operations to serve clients across multiple continents and time zones.'
              },
              {
                year: '2021',
                title: 'AI Integration',
                description: 'Launched our AI-powered solutions, helping clients automate and optimize their operations.'
              },
              {
                year: '2022',
                title: '100K+ Users',
                description: 'Reached a major milestone with over 100,000 active users across our platform.'
              },
              {
                year: '2023',
                title: 'Industry Recognition',
                description: 'Received multiple awards for innovation and customer satisfaction in the tech industry.'
              }
            ].map((milestone, index) => (
              <div key={index} className="timeline-item fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;