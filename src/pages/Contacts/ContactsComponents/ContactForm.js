import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "normal"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const services = [
    "General Inquiry",
    "Residential Pest Control",
    "Commercial Pest Control",
    "Emergency Service",
    "Preventive Care",
    "Termite Control",
    "Rodent Control",
    "Other"
  ];

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-header">
          <h2 className="form-title">Send Us a Message</h2>
          <p className="form-subtitle">
            Fill out the form below and our team will get back to you within 30 minutes
          </p>
        </div>
        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service" className="form-label">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Urgency Level</label>
              <div className="urgency-options">
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="low"
                    checked={formData.urgency === "low"}
                    onChange={handleChange}
                  />
                  <span className="urgency-label">
                    <span className="urgency-icon">💬</span>
                    General Inquiry
                  </span>
                </label>
                
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="normal"
                    checked={formData.urgency === "normal"}
                    onChange={handleChange}
                  />
                  <span className="urgency-label">
                    <span className="urgency-icon">📅</span>
                    Schedule Service
                  </span>
                </label>
                
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="emergency"
                    checked={formData.urgency === "emergency"}
                    onChange={handleChange}
                  />
                  <span className="urgency-label">
                    <span className="urgency-icon">🚨</span>
                    Emergency Service
                  </span>
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                rows="5"
                placeholder="Describe your pest problem or inquiry..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          
          <div className="form-sidebar">
            <h3 className="sidebar-title">Why Choose Us?</h3>
            <div className="sidebar-features">
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <div className="feature-content">
                  <h4>Quick Response</h4>
                  <p>We respond to all inquiries within 30 minutes</p>
                </div>
              </div>
              
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <div className="feature-content">
                  <h4>Expert Advice</h4>
                  <p>Get professional recommendations from certified technicians</p>
                </div>
              </div>
              
              <div className="feature">
                <span className="feature-icon">💲</span>
                <div className="feature-content">
                  <h4>Free Inspection</h4>
                  <p>Complimentary property inspection with no obligation</p>
                </div>
              </div>
              
              <div className="feature">
                <span className="feature-icon">🛡️</span>
                <div className="feature-content">
                  <h4>Guaranteed Service</h4>
                  <p>100% satisfaction guarantee on all our services</p>
                </div>
              </div>
            </div>
            
            <div className="emergency-contact">
              <h4>Emergency Pest Control</h4>
              <p>Need immediate assistance?</p>
              <a href="tel:+27713055659" className="emergency-button">
                🚨 Call Now: +27713055659
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form-section {
          padding: 4rem 2rem;
          background: #f8f9fa;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .form-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .form-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .form-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-label {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        
        .form-input,
        .form-select,
        .form-textarea {
          padding: 12px 16px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .urgency-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .urgency-option {
          position: relative;
        }
        
        .urgency-option input {
          position: absolute;
          opacity: 0;
        }
        
        .urgency-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .urgency-option input:checked + .urgency-label {
          border-color: #3498db;
          background: #e3f2fd;
        }
        
        .urgency-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .submit-button {
          background: #3498db;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        
        .submit-button:hover {
          background: #2980b9;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
        }
        
        .form-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .sidebar-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .sidebar-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .feature {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .feature-content h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-size: 1rem;
        }
        
        .feature-content p {
          margin: 0;
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .emergency-contact {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
        }
        
        .emergency-contact h4 {
          margin: 0 0 0.5rem 0;
          color: #856404;
        }
        
        .emergency-contact p {
          margin: 0 0 1rem 0;
          color: #856404;
        }
        
        .emergency-button {
          display: block;
          background: #e74c3c;
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .emergency-button:hover {
          background: #c0392b;
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          .form-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .urgency-options {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form-section {
            padding: 3rem 1rem;
          }
          
          .form-title {
            font-size: 2rem;
          }
          
          .form-container {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .form-header {
            margin-bottom: 2rem;
          }
          
          .form-title {
            font-size: 1.75rem;
          }
          
          .form-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;