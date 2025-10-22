import React from "react";

const CallToActionSection = () => (
  <section className="cta-container">
    <div className="cta-content">
      {/* Left section - Text content */}
      <div className="cta-text-section">
        <h2 className="cta-title">We're The Dust Busters!</h2>
        <p className="cta-description">
          Don't let pests invade your peace of mind! From ants and cockroaches to termites and rodents, 
          we eliminate pests quickly and prevent them from coming back—so you can feel safe and comfortable again.
        </p>
      </div>

      {/* Spacer between sections */}
      <div className="cta-spacer"></div>

      {/* Right section - Phone number */}
      <div className="cta-contact-section">
        <div className="cta-phone-wrapper">
          <div className="cta-phone-icon">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="cta-phone-content">
            <div className="cta-call-text">Call Us!</div>
            <div className="cta-phone-number">+27713055659</div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .cta-container {
        padding: 4rem 2rem;
        background: #ffffff;
        color: #333333;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      }
      
      .cta-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      
      .cta-text-section {
        flex: 1;
        min-width: 300px;
        max-width: 65%;
      }
      
      .cta-spacer {
        width: 5%;
        min-width: 40px;
      }
      
      .cta-contact-section {
        flex: 0 0 auto;
        min-width: 250px;
      }
      
      .cta-title {
        font-size: 3rem;
        font-weight: bold;
        margin: 0 0 1.5rem 0;
        color: #2c3e50;
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        line-height: 1.2;
      }
      
      .cta-description {
        font-size: 1.2rem;
        line-height: 1.6;
        opacity: 0.9;
        margin: 0;
        color: #555555;
      }
      
      .cta-phone-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 2rem;
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        transition: all 0.3s ease;
      }
      
      .cta-phone-wrapper:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 30px rgba(52, 152, 219, 0.4);
      }
      
      .cta-phone-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        color: white;
      }
      
      .cta-phone-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      
      .cta-call-text {
        font-size: 0.9rem;
        opacity: 0.8;
        font-weight: 500;
      }
      
      .cta-phone-number {
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
        letter-spacing: 0.5px;
      }

      /* Tablet and Below - Center everything */
      @media (max-width: 768px) {
        .cta-container {
          padding: 3rem 1rem;
        }
        
        .cta-content {
          flex-direction: column;
          text-align: center;
          gap: 2rem;
        }
        
        .cta-text-section {
          max-width: 100%;
          text-align: center;
        }
        
        .cta-title {
          font-size: 1.8rem;
          text-align: center;
        }
        
        .cta-description {
          font-size: 1.1rem;
          text-align: center;
          padding: 0 1rem;
        }
        
        .cta-spacer {
          display: none;
        }
        
        .cta-phone-wrapper {
          flex-direction: column;
          text-align: center;
          padding: 1.5rem;
          margin: 0 auto;
        }
        
        .cta-phone-content {
          align-items: center;
        }
        
        .cta-phone-number {
          font-size: 1.3rem;
        }
      }

      /* Small Mobile */
      @media (max-width: 480px) {
        .cta-title {
          font-size: 1.6rem;
        }
        
        .cta-description {
          font-size: 1rem;
        }
        
        .cta-phone-wrapper {
          padding: 1.25rem;
        }
      }
    `}</style>
  </section>
);

export default CallToActionSection;