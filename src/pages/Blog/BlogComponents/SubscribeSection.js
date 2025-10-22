import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("weekly");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic
    console.log("Subscribed:", { email, frequency });
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const benefits = [
    {
      icon: "🎯",
      title: "Expert Tips",
      description: "Professional pest control advice"
    },
    {
      icon: "🆓",
      title: "Free Resources",
      description: "Downloadable guides and checklists"
    },
    {
      icon: "⚡",
      title: "Early Access",
      description: "Be the first to read new articles"
    },
    {
      icon: "💝",
      title: "Exclusive Offers",
      description: "Special discounts for subscribers"
    }
  ];

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-content">
          <div className="subscribe-text">
            <h2 className="subscribe-title">Stay Pest-Informed</h2>
            <p className="subscribe-description">
              Join thousands of homeowners and get the latest pest control tips, 
              seasonal advice, and exclusive content delivered directly to your inbox.
            </p>
            
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="subscriber-stats">
              <div className="stat">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Subscribers</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Open Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="subscribe-form-container">
            <form onSubmit={handleSubmit} className="subscribe-form">
              <h3 className="form-title">Join Our Community</h3>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Frequency</label>
                <div className="frequency-options">
                  <label className="frequency-option">
                    <input
                      type="radio"
                      name="frequency"
                      value="weekly"
                      checked={frequency === "weekly"}
                      onChange={(e) => setFrequency(e.target.value)}
                    />
                    <span className="frequency-label">
                      <span className="frequency-icon">📅</span>
                      Weekly Digest
                    </span>
                  </label>
                  
                  <label className="frequency-option">
                    <input
                      type="radio"
                      name="frequency"
                      value="monthly"
                      checked={frequency === "monthly"}
                      onChange={(e) => setFrequency(e.target.value)}
                    />
                    <span className="frequency-label">
                      <span className="frequency-icon">📊</span>
                      Monthly Roundup
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  I agree to receive pest control tips and updates. I can unsubscribe at any time.
                </label>
              </div>
              
              <button type="submit" className="subscribe-button">
                Subscribe Now
              </button>
              
              <div className="privacy-note">
                🔒 We respect your privacy. No spam, ever.
              </div>
            </form>
            
            <div className="subscription-benefits">
              <h4>What to expect:</h4>
              <ul>
                <li>✅ Weekly pest prevention tips</li>
                <li>✅ Seasonal pest alerts</li>
                <li>✅ DIY solution guides</li>
                <li>✅ Expert Q&A sessions</li>
                <li>✅ Exclusive subscriber discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .subscribe-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
          color: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .subscribe-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .subscribe-text {
          padding-right: 2rem;
        }
        
        .subscribe-title {
          font-size: 3rem;
          font-weight: bold;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }
        
        .subscribe-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0 0 3rem 0;
          opacity: 0.9;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 2rem 0 3rem;
        }
        
        .benefit-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .benefit-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .benefit-content h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }
        
        .benefit-content p {
          margin: 0;
          opacity: 0.8;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .subscriber-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .subscribe-form-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .subscribe-form {
          margin-bottom: 2rem;
        }
        
        .form-title {
          color: #2c3e50;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 0 1.5rem 0;
          text-align: center;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #3498db;
        }
        
        .frequency-options {
          display: flex;
          gap: 1rem;
        }
        
        .frequency-option {
          flex: 1;
        }
        
        .frequency-option input {
          position: absolute;
          opacity: 0;
        }
        
        .frequency-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          color: #495057;
        }
        
        .frequency-option input:checked + .frequency-label {
          border-color: #3498db;
          background: #e3f2fd;
          color: #3498db;
        }
        
        .frequency-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.4;
          cursor: pointer;
        }
        
        .checkbox-label input {
          margin-top: 0.2rem;
        }
        
        .subscribe-button {
          width: 100%;
          background: #27ae60;
          color: white;
          border: none;
          padding: 15px 20px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          margin: 1rem 0;
        }
        
        .subscribe-button:hover {
          background: #219653;
        }
        
        .privacy-note {
          text-align: center;
          color: #6c757d;
          font-size: 0.9rem;
        }
        
        .subscription-benefits {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .subscription-benefits h4 {
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .subscription-benefits ul {
          margin: 0;
          padding-left: 1rem;
          color: #495057;
        }
        
        .subscription-benefits li {
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .subscribe-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .subscribe-text {
            padding-right: 0;
            text-align: center;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .subscriber-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .subscribe-section {
            padding: 3rem 1rem;
          }
          
          .subscribe-title {
            font-size: 2.2rem;
          }
          
          .subscribe-description {
            font-size: 1.1rem;
          }
          
          .frequency-options {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .subscribe-title {
            font-size: 1.8rem;
          }
          
          .subscribe-form-container {
            padding: 1.5rem;
          }
          
          .subscriber-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SubscribeSection;