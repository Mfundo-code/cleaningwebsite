import React from "react";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-title">Our Mission & Vision</h2>
            <p className="section-subtitle">
              Driving excellence in pest control through innovation, expertise, and unwavering commitment to our customers
            </p>
            
            <div className="mission-cards">
              <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To provide exceptional pest control solutions that protect homes, businesses, and communities 
                  while maintaining the highest standards of safety, effectiveness, and environmental responsibility.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="card-icon">👁️</div>
                <h3>Our Vision</h3>
                <p>
                  To be South Africa's most trusted pest management partner, setting industry standards for 
                  innovation, customer service, and sustainable pest control practices.
                </p>
              </div>
              
              <div className="mission-card">
                <div className="card-icon">💪</div>
                <h3>Our Promise</h3>
                <p>
                  Guaranteed results, transparent pricing, and customer satisfaction. We stand behind our work 
                  with comprehensive warranties and ongoing support.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mission-image">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Pest Control Mission"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <div className="overlay-stat">
                  <div className="stat-number">99.7%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
                <div className="overlay-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="core-principles">
          <h3>Core Principles That Guide Us</h3>
          <div className="principles-grid">
            <div className="principle">
              <h4>Excellence</h4>
              <p>Uncompromising quality in every service we deliver</p>
            </div>
            <div className="principle">
              <h4>Innovation</h4>
              <p>Continuously improving our methods and technologies</p>
            </div>
            <div className="principle">
              <h4>Integrity</h4>
              <p>Honest, transparent, and ethical in all we do</p>
            </div>
            <div className="principle">
              <h4>Safety</h4>
              <p>Protecting people, property, and the environment</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 5rem 2rem;
          background: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          line-height: 1.6;
          margin: 0 0 3rem 0;
        }
        
        .mission-cards {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .mission-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid #3498db;
          transition: transform 0.3s ease;
        }
        
        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .mission-card h3 {
          font-size: 1.3rem;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .mission-card p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }
        
        .mission-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .mission-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
        
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem;
        }
        
        .overlay-content {
          display: flex;
          justify-content: space-around;
        }
        
        .overlay-stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .core-principles {
          text-align: center;
          background: #f8f9fa;
          padding: 3rem;
          border-radius: 12px;
        }
        
        .core-principles h3 {
          font-size: 2rem;
          color: #2c3e50;
          margin: 0 0 2rem 0;
        }
        
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .principle {
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .principle h4 {
          font-size: 1.3rem;
          color: #3498db;
          margin: 0 0 1rem 0;
        }
        
        .principle p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 968px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .mission-image {
            order: -1;
          }
          
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .mission-card {
            padding: 1.5rem;
          }
          
          .core-principles {
            padding: 2rem;
          }
          
          .core-principles h3 {
            font-size: 1.5rem;
          }
          
          .principles-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .overlay-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .mission-image img {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionSection;