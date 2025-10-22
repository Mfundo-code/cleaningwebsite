import React from "react";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Find Our Location</h2>
          <p className="section-subtitle">
            Visit our main office or use our mobile services that cover the entire region
          </p>
        </div>
        
        <div className="map-container">
          <div className="map-wrapper">
            {/* Replace with actual Google Maps embed */}
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Pest Control Headquarters</h3>
                <p>123 Pest Control Street<br />Johannesburg, 2000<br />South Africa</p>
                <div className="map-features">
                  <div className="feature">
                    <span className="feature-icon">🅿️</span>
                    Free Parking
                  </div>
                  <div className="feature">
                    <span className="feature-icon">♿</span>
                    Wheelchair Accessible
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🕒</span>
                    Open 7 Days
                  </div>
                </div>
                <button className="directions-button">
                  📍 Get Directions
                </button>
              </div>
            </div>
          </div>
          
          <div className="map-sidebar">
            <h3 className="sidebar-title">Service Coverage</h3>
            <div className="coverage-list">
              <div className="coverage-item">
                <span className="coverage-badge primary">50km</span>
                <div className="coverage-content">
                  <h4>Immediate Response Zone</h4>
                  <p>Same-day service within 50km radius</p>
                </div>
              </div>
              
              <div className="coverage-item">
                <span className="coverage-badge secondary">100km</span>
                <div className="coverage-content">
                  <h4>Extended Service Area</h4>
                  <p>Next-day service within 100km radius</p>
                </div>
              </div>
              
              <div className="coverage-item">
                <span className="coverage-badge tertiary">Nationwide</span>
                <div className="coverage-content">
                  <h4>National Coverage</h4>
                  <p>Service available across South Africa</p>
                </div>
              </div>
            </div>
            
            <div className="mobile-units">
              <h4>Mobile Response Units</h4>
              <p>Our fleet of mobile pest control units can reach any location in the region</p>
              <div className="units-stats">
                <div className="unit-stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Vehicles</div>
                </div>
                <div className="unit-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Operation</div>
                </div>
                <div className="unit-stat">
                  <div className="stat-number">30min</div>
                  <div className="stat-label">Avg. Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-section {
          padding: 4rem 2rem;
          background: #f8f9fa;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .map-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .map-wrapper {
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .map-placeholder {
          text-align: center;
          padding: 2rem;
        }
        
        .map-content h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
        }
        
        .map-content p {
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }
        
        .map-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        
        .feature-icon {
          font-size: 1.5rem;
        }
        
        .directions-button {
          background: rgba(255,255,255,0.2);
          color: white;
          border: 2px solid white;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .directions-button:hover {
          background: white;
          color: #667eea;
        }
        
        .map-sidebar {
          padding: 2rem;
          background: white;
        }
        
        .sidebar-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0 0 1.5rem 0;
        }
        
        .coverage-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .coverage-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .coverage-badge {
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          color: white;
          flex-shrink: 0;
        }
        
        .coverage-badge.primary {
          background: #27ae60;
        }
        
        .coverage-badge.secondary {
          background: #3498db;
        }
        
        .coverage-badge.tertiary {
          background: #9b59b6;
        }
        
        .coverage-content h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-size: 1rem;
        }
        
        .coverage-content p {
          margin: 0;
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .mobile-units {
          background: #e3f2fd;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }
        
        .mobile-units h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
        }
        
        .mobile-units p {
          margin: 0 0 1.5rem 0;
          color: #6c757d;
          font-size: 0.9rem;
        }
        
        .units-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          text-align: center;
        }
        
        .unit-stat {
          padding: 1rem;
          background: white;
          border-radius: 6px;
        }
        
        .stat-number {
          font-size: 1.2rem;
          font-weight: bold;
          color: #3498db;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: #6c757d;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .map-container {
            grid-template-columns: 1fr;
          }
          
          .map-wrapper {
            height: 300px;
          }
          
          .map-features {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .map-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .units-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .map-sidebar {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MapSection;