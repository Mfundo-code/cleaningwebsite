import React from "react";

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="cta-background-overlay"></div>
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-title">Ready to Experience the Difference?</h2>
          <p className="cta-description">
            Join thousands of satisfied customers who trust us with their pest control needs. 
            Our experienced team is ready to provide you with the same exceptional service that has made us South Africa's most trusted pest control company.
          </p>
          
          <div className="cta-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              Free Inspection & Quote
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              Same-Day Service Available
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
        
        <div className="cta-actions">
          <div className="primary-action">
            <a href="tel:+27713055659" className="cta-button primary">
              <span className="button-icon">📞</span>
              Call Now: +27713055659
            </a>
            <div className="action-note">Available 24/7 for emergencies</div>
          </div>
          
          <div className="secondary-actions">
            <a href="#contact" className="cta-button secondary">
              <span className="button-icon">📧</span>
              Get Free Quote
            </a>
            <a href="#services" className="cta-button outline">
              <span className="button-icon">🔍</span>
              View Services
            </a>
          </div>
        </div>
        
        <div className="trust-badges">
          <div className="trust-badge">
            <div className="badge-icon">🏆</div>
            <div className="badge-text">Award Winning Service</div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-text">Rated 4.9/5 Stars</div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">🔒</div>
            <div className="badge-text">Fully Licensed & Insured</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-cta {
          position: relative;
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
          color: white;
          overflow: hidden;
          text-align: center;
        }
        
        .cta-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          z-index: 1;
        }
        
        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .cta-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .cta-title {
          font-size: 3rem;
          font-weight: bold;
          margin: 0;
          line-height: 1.2;
        }
        
        .cta-description {
          font-size: 1.3rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: 500;
        }
        
        .feature-icon {
          background: #27ae60;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }
        
        .primary-action {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        
        .action-note {
          font-size: 0.9rem;
          opacity: 0.8;
          font-style: italic;
        }
        
        .secondary-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 18px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .cta-button.primary {
          background: #27ae60;
          color: white;
          font-size: 1.2rem;
          padding: 20px 35px;
        }
        
        .cta-button.primary:hover {
          background: #219653;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(39, 174, 96, 0.4);
        }
        
        .cta-button.secondary {
          background: white;
          color: #1a2980;
        }
        
        .cta-button.secondary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
        }
        
        .cta-button.outline {
          background: transparent;
          color: white;
          border-color: white;
        }
        
        .cta-button.outline:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }
        
        .button-icon {
          font-size: 1.2rem;
        }
        
        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .badge-icon {
          font-size: 1.5rem;
        }
        
        .badge-text {
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .about-cta {
            padding: 4rem 1rem;
          }
          
          .cta-title {
            font-size: 2.2rem;
          }
          
          .cta-description {
            font-size: 1.1rem;
          }
          
          .cta-features {
            flex-direction: column;
            gap: 1rem;
          }
          
          .feature {
            justify-content: center;
          }
          
          .cta-content {
            gap: 2rem;
          }
          
          .cta-button {
            padding: 15px 25px;
            font-size: 1rem;
          }
          
          .cta-button.primary {
            font-size: 1.1rem;
            padding: 18px 30px;
          }
          
          .secondary-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
          
          .cta-button.secondary,
          .cta-button.outline {
            justify-content: center;
          }
          
          .trust-badges {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 1.8rem;
          }
          
          .cta-description {
            font-size: 1rem;
          }
          
          .cta-button {
            padding: 14px 20px;
          }
          
          .cta-button.primary {
            padding: 16px 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;