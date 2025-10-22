import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Satisfied Customers",
      icon: "😊",
      description: "Happy clients across South Africa"
    },
    {
      number: "99.7%",
      label: "Success Rate",
      icon: "🎯",
      description: "Of pest problems resolved"
    },
    {
      number: "24/7",
      label: "Emergency Response",
      icon: "🚨",
      description: "Always available when you need us"
    },
    {
      number: "15min",
      label: "Average Response Time",
      icon: "⚡",
      description: "For emergency callouts"
    }
  ];

  const achievements = [
    {
      title: "Industry Excellence Award",
      year: "2023",
      organization: "Pest Control Association"
    },
    {
      title: "Environmental Stewardship",
      year: "2022",
      organization: "Green Business Council"
    },
    {
      title: "Customer Service Excellence",
      year: "2021",
      organization: "Service Industry Awards"
    },
    {
      title: "Innovation in Pest Management",
      year: "2020",
      organization: "Technology & Innovation Board"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">By The Numbers</h2>
          <p className="section-subtitle">
            Our track record of excellence and commitment to customer satisfaction
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="achievements-section">
          <h3 className="achievements-title">Awards & Recognition</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-year">{achievement.year}</div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <div className="achievement-organization">{achievement.organization}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="customer-promise">
          <div className="promise-content">
            <h3>Our Customer Promise</h3>
            <div className="promise-stats">
              <div className="promise-stat">
                <div className="promise-number">100%</div>
                <div className="promise-label">Satisfaction Guarantee</div>
              </div>
              <div className="promise-stat">
                <div className="promise-number">30-Day</div>
                <div className="promise-label">Warranty on All Services</div>
              </div>
              <div className="promise-stat">
                <div className="promise-number">Free</div>
                <div className="promise-label">Follow-up Inspections</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
          color: white;
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
          margin: 0 0 1rem 0;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 2.5rem 2rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }
        
        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .stat-description {
          opacity: 0.8;
          font-size: 0.9rem;
        }
        
        .achievements-section {
          margin-bottom: 4rem;
        }
        
        .achievements-title {
          font-size: 2rem;
          text-align: center;
          margin: 0 0 3rem 0;
        }
        
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .achievement-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .achievement-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }
        
        .achievement-year {
          background: #e74c3c;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .achievement-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 0 0 0.5rem 0;
        }
        
        .achievement-organization {
          opacity: 0.8;
          font-size: 0.9rem;
        }
        
        .customer-promise {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          text-align: center;
        }
        
        .customer-promise h3 {
          font-size: 1.8rem;
          margin: 0 0 2rem 0;
        }
        
        .promise-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .promise-stat {
          padding: 1.5rem;
        }
        
        .promise-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .promise-label {
          opacity: 0.9;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .stat-card {
            padding: 2rem 1rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
          
          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .customer-promise {
            padding: 2rem;
          }
          
          .promise-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;