import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="fade-in-up">Get in Touch</h1>
            <p className="contact-hero-description fade-in-up-delay">
              Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="fade-in-up">Let's Start a Conversation</h2>
              <p className="fade-in-up-delay">
                We're here to help you navigate your digital transformation journey. 
                Reach out to us through any of the channels below.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method fade-in-up">
                  <div className="contact-method-icon">📧</div>
                  <div className="contact-method-content">
                    <h4>Email Us</h4>
                    <p>hello@techcorp.com</p>
                    <p>support@techcorp.com</p>
                  </div>
                </div>
                
                <div className="contact-method fade-in-up">
                  <div className="contact-method-icon">📞</div>
                  <div className="contact-method-content">
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="contact-method fade-in-up">
                  <div className="contact-method-icon">📍</div>
                  <div className="contact-method-content">
                    <h4>Visit Us</h4>
                    <p>123 Tech Street</p>
                    <p>San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="contact-method fade-in-up">
                  <div className="contact-method-icon">💬</div>
                  <div className="contact-method-content">
                    <h4>Live Chat</h4>
                    <p>Available 24/7</p>
                    <button className="btn btn-outline btn-small">Start Chat</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Request Demo</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or how we can help you..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in-up">Frequently Asked Questions</h2>
            <p className="section-description fade-in-up-delay">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="faq-grid">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-12 months. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide comprehensive support packages including 24/7 monitoring, regular maintenance, updates, and dedicated support channels. Our support plans are tailored to your specific needs.'
              },
              {
                question: 'Can you work with our existing systems?',
                answer: 'Absolutely. We specialize in integrating with existing systems and can work with virtually any technology stack. We conduct thorough assessments to ensure seamless integration.'
              },
              {
                question: 'What industries do you serve?',
                answer: 'We serve clients across various industries including healthcare, finance, retail, manufacturing, education, and more. Our solutions are adaptable to meet industry-specific requirements and compliance needs.'
              },
              {
                question: 'How do you ensure data security?',
                answer: 'Security is our top priority. We implement enterprise-grade security measures, follow industry best practices, maintain compliance certifications, and conduct regular security audits.'
              },
              {
                question: 'Do you offer training for our team?',
                answer: 'Yes, we provide comprehensive training programs tailored to your team\'s needs. This includes hands-on workshops, documentation, video tutorials, and ongoing educational support.'
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;