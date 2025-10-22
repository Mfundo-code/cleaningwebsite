import React from "react";

const ValuesSection = () => {
  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We deliver superior quality in every service, exceeding customer expectations through attention to detail and continuous improvement.",
      color: "#3498db"
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Honesty and transparency guide our actions. We build trust through reliable service and ethical business practices.",
      color: "#27ae60"
    },
    {
      icon: "🌿",
      title: "Sustainability",
      description: "We prioritize environmentally responsible solutions that protect both your property and our planet.",
      color: "#2ecc71"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Embracing cutting-edge technology and methods to provide the most effective pest control solutions available.",
      color: "#9b59b6"
    },
    {
      icon: "❤️",
      title: "Care",
      description: "We treat every customer's property as if it were our own, with respect, compassion, and genuine concern.",
      color: "#e74c3c"
    },
    {
      icon: "⚡",
      title: "Responsiveness",
      description: "Quick to act and always available when you need us most, especially in emergency situations.",
      color: "#f39c12"
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide every decision we make and every service we provide
          </p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="value-card"
              style={{ '--value-color': value.color }}
            >
              <div 
                className="value-icon"
                style={{ backgroundColor: `${value.color}20`, color: value.color }}
              >
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-decoration"></div>
            </div>
          ))}
        </div>
        
        <div className="values-commitment">
          <div className="commitment-content">
            <h3>Our Commitment to You</h3>
            <p>
              These values aren't just words on a page - they're the foundation of everything we do. 
              From the moment you contact us to the completion of our service, you can expect:
            </p>
            <div className="commitment-points">
              <div className="point">
                <span className="point-icon">✅</span>
                <span>Transparent pricing with no hidden fees</span>
              </div>
              <div className="point">
                <span className="point-icon">✅</span>
                <span>Certified, background-checked technicians</span>
              </div>
              <div className="point">
                <span className="point-icon">✅</span>
                <span>Eco-friendly and pet-safe treatment options</span>
              </div>
              <div className="point">
                <span className="point-icon">✅</span>
                <span>Comprehensive warranties on all services</span>
              </div>
              <div className="point">
                <span className="point-icon">✅</span>
                <span>24/7 emergency response availability</span>
              </div>
              <div className="point">
                <span className="point-icon">✅</span>
                <span>Ongoing support and preventive advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .values-section {
          padding: 5rem 2rem;
          background: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
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
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .value-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid #f8f9fa;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          border-color: var(--value-color);
        }
        
        .value-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .value-card:hover .value-icon {
          transform: scale(1.1);
        }
        
        .value-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .value-description {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }
        
        .value-decoration {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--value-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .value-card:hover .value-decoration {
          transform: scaleX(1);
        }
        
        .values-commitment {
          background: #f8f9fa;
          padding: 3rem;
          border-radius: 12px;
          text-align: center;
        }
        
        .commitment-content h3 {
          font-size: 2rem;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .commitment-content p {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.6;
          margin: 0 0 2rem 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .commitment-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .point {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          text-align: left;
        }
        
        .point-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .point span:last-child {
          color: #495057;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .values-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .value-card {
            padding: 2rem 1.5rem;
          }
          
          .values-commitment {
            padding: 2rem;
          }
          
          .commitment-content h3 {
            font-size: 1.5rem;
          }
          
          .commitment-points {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .value-icon {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;