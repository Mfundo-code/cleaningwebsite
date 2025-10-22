import React from "react";

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      city: "Johannesburg",
      address: "123 Pest Control Street, Sandton, Johannesburg, 2196",
      phone: "+27713055659",
      email: "jhb@pestcontrol.co.za",
      hours: "Mon-Fri: 7AM-9PM | Sat: 8AM-6PM | Sun: 9AM-4PM",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      services: ["Residential", "Commercial", "Emergency"]
    },
    {
      id: 2,
      city: "Cape Town",
      address: "45 Coastal Road, Sea Point, Cape Town, 8005",
      phone: "+27713055660",
      email: "ct@pestcontrol.co.za",
      hours: "Mon-Fri: 7AM-8PM | Sat: 8AM-5PM | Sun: 9AM-3PM",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      services: ["Residential", "Commercial", "Agricultural"]
    },
    {
      id: 3,
      city: "Durban",
      address: "78 Beachfront Avenue, Umhlanga, Durban, 4320",
      phone: "+27713055661",
      email: "dbn@pestcontrol.co.za",
      hours: "Mon-Fri: 7AM-8PM | Sat: 8AM-5PM | Sun: 9AM-3PM",
      image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      services: ["Residential", "Commercial", "Termite Control"]
    },
    {
      id: 4,
      city: "Pretoria",
      address: "34 Government Avenue, Arcadia, Pretoria, 0083",
      phone: "+27713055662",
      email: "pta@pestcontrol.co.za",
      hours: "Mon-Fri: 7AM-9PM | Sat: 8AM-6PM | Sun: 9AM-4PM",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      services: ["Residential", "Government", "Emergency"]
    }
  ];

  return (
    <section className="office-locations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Office Locations</h2>
          <p className="section-subtitle">
            Multiple locations across South Africa to serve you better
          </p>
        </div>
        
        <div className="locations-grid">
          {offices.map((office) => (
            <div key={office.id} className="office-card">
              <div className="office-image">
                <img src={office.image} alt={office.city} />
                <div className="office-badge">{office.city}</div>
              </div>
              
              <div className="office-content">
                <h3 className="office-city">{office.city} Office</h3>
                <div className="office-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span className="detail-text">{office.address}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-icon">📞</span>
                    <span className="detail-text">{office.phone}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-icon">📧</span>
                    <span className="detail-text">{office.email}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-icon">🕒</span>
                    <span className="detail-text">{office.hours}</span>
                  </div>
                </div>
                
                <div className="office-services">
                  <h4>Specialized Services:</h4>
                  <div className="services-tags">
                    {office.services.map((service, index) => (
                      <span key={index} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>
                
                <div className="office-actions">
                  <a href={`tel:${office.phone}`} className="action-button primary">
                    Call Office
                  </a>
                  <a href={`mailto:${office.email}`} className="action-button secondary">
                    Email Office
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="locations-cta">
          <div className="cta-content">
            <h3>Can't Find Your Area?</h3>
            <p>We offer mobile services throughout South Africa. Contact us to check coverage in your area.</p>
            <div className="cta-buttons">
              <a href="tel:+27713055659" className="cta-button primary">
                Check Coverage
              </a>
              <a href="#contact" className="cta-button secondary">
                Request Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .office-locations {
          padding: 4rem 2rem;
          background: white;
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
        
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .office-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .office-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .office-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .office-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .office-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #3498db;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        .office-content {
          padding: 1.5rem;
        }
        
        .office-city {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .office-details {
          margin: 1.5rem 0;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin: 0.75rem 0;
        }
        
        .detail-icon {
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        
        .detail-text {
          color: #495057;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .office-services {
          margin: 1.5rem 0;
        }
        
        .office-services h4 {
          font-size: 1rem;
          color: #2c3e50;
          margin: 0 0 0.75rem 0;
        }
        
        .services-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .service-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .office-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        
        .action-button {
          flex: 1;
          text-align: center;
          padding: 10px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .action-button.primary {
          background: #3498db;
          color: white;
        }
        
        .action-button.primary:hover {
          background: #2980b9;
        }
        
        .action-button.secondary {
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
        }
        
        .action-button.secondary:hover {
          background: #3498db;
          color: white;
        }
        
        .locations-cta {
          background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          text-align: center;
        }
        
        .cta-content h3 {
          font-size: 2rem;
          margin: 0 0 1rem 0;
        }
        
        .cta-content p {
          font-size: 1.1rem;
          margin: 0 0 2rem 0;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button {
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .cta-button.primary {
          background: white;
          color: #1a2980;
        }
        
        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255,255,255,0.3);
        }
        
        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cta-button.secondary:hover {
          background: white;
          color: #1a2980;
        }

        @media (max-width: 768px) {
          .office-locations {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .locations-grid {
            grid-template-columns: 1fr;
          }
          
          .office-actions {
            flex-direction: column;
          }
          
          .cta-content h3 {
            font-size: 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 200px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .office-content {
            padding: 1rem;
          }
          
          .locations-cta {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default OfficeLocations;