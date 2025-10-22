import React from "react";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="hero-background-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Protecting Homes & Businesses
            <span className="hero-highlight"> Since 1995</span>
          </h1>
          <p className="hero-subtitle">
            For nearly three decades, we've been South Africa's trusted partner in pest control. 
            Our commitment to excellence, innovation, and customer satisfaction has made us 
            the leading choice for residential and commercial pest management.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">28+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50,000+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">24/7</div>
              <div className="hero-stat-label">Service</div>
            </div>
          </div>
          <div className="hero-cta-buttons">
            <button className="hero-primary-button">
              Our Story
            </button>
            <button className="hero-secondary-button">
              Meet Our Team
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Professional Pest Control Team"
            className="hero-image"
          />
          <div className="experience-badge">
            <div className="badge-years">28</div>
            <div className="badge-text">Years of Excellence</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          position: relative;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
          color: white;
          overflow: hidden;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        }
        
        .hero-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .hero-text-container {
          padding-right: 2rem;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }
        
        .hero-highlight {
          background: linear-gradient(45deg, #26d0ce, #1a2980);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
          opacity: 0.9;
        }
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .hero-stat {
          text-align: center;
        }
        
        .hero-stat-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .hero-stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .hero-cta-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .hero-primary-button {
          background: linear-gradient(45deg, #26d0ce, #1a2980);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .hero-primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(38, 208, 206, 0.4);
        }
        
        .hero-secondary-button {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .hero-secondary-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .hero-image-container {
          position: relative;
        }
        
        .hero-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: #e74c3c;
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(231, 76, 60, 0.4);
        }
        
        .badge-years {
          font-size: 2.5rem;
          font-weight: bold;
          line-height: 1;
        }
        
        .badge-text {
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .hero-text-container {
            padding-right: 0;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-cta-buttons {
            justify-content: center;
          }
          
          .hero-image {
            height: 300px;
          }
          
          .experience-badge {
            bottom: -15px;
            right: -15px;
            padding: 1rem;
          }
          
          .badge-years {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 3rem 1rem;
          }
          
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-stats {
            gap: 1.5rem;
            margin: 1.5rem 0;
          }
          
          .hero-stat-number {
            font-size: 1.6rem;
          }
          
          .hero-stat-label {
            font-size: 0.85rem;
          }
          
          .hero-cta-buttons {
            flex-direction: column;
            gap: 0.75rem;
            margin-top: 1.5rem;
          }
          
          .hero-primary-button,
          .hero-secondary-button {
            width: 100%;
            padding: 14px 24px;
          }
          
          .hero-image {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: 2rem 1rem;
          }
          
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 0.95rem;
          }
          
          .hero-stats {
            gap: 1rem;
            flex-wrap: wrap;
          }
          
          .hero-stat {
            flex: 1;
            min-width: 80px;
          }
          
          .hero-stat-number {
            font-size: 1.4rem;
          }
          
          .hero-image {
            height: 200px;
          }
          
          .experience-badge {
            position: relative;
            bottom: 0;
            right: 0;
            margin: 1rem auto 0;
            max-width: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;