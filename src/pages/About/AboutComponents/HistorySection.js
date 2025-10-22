import React from "react";

const HistorySection = () => {
  const milestones = [
    {
      year: "1995",
      title: "Company Founded",
      description: "Started as a small family business with a single van and big dreams",
      icon: "🚀"
    },
    {
      year: "2000",
      title: "First Major Contract",
      description: "Secured our first commercial contract with a hotel chain",
      icon: "🏨"
    },
    {
      year: "2005",
      title: "National Expansion",
      description: "Expanded services to all major cities in South Africa",
      icon: "🇿🇦"
    },
    {
      year: "2010",
      title: "Eco-Friendly Initiative",
      description: "Introduced our green pest control program",
      icon: "🌿"
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Implemented advanced monitoring and treatment technologies",
      icon: "💻"
    },
    {
      year: "2020",
      title: "Emergency Response",
      description: "Launched 24/7 emergency pest control services",
      icon: "🚨"
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as South Africa's leading pest control provider",
      icon: "👑"
    }
  ];

  return (
    <section className="history-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Journey Through Time</h2>
          <p className="section-subtitle">
            From humble beginnings to industry leadership - our story of growth, innovation, and commitment
          </p>
        </div>
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-icon">{milestone.icon}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="history-stats">
          <div className="stat-card">
            <div className="stat-number">28+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Cities Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .history-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .history-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          z-index: 1;
        }
        
        .container {
          position: relative;
          z-index: 2;
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
        
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto 4rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: rgba(255,255,255,0.3);
          transform: translateX(-50%);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 100%;
        }
        
        .timeline-item.left {
          padding-right: 50%;
        }
        
        .timeline-item.right {
          padding-left: 50%;
        }
        
        .timeline-content {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }
        
        .timeline-year {
          position: absolute;
          top: -15px;
          background: #e74c3c;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        .timeline-item.left .timeline-year {
          right: -80px;
        }
        
        .timeline-item.right .timeline-year {
          left: -80px;
        }
        
        .timeline-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .timeline-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin: 0 0 1rem 0;
        }
        
        .timeline-description {
          opacity: 0.9;
          line-height: 1.6;
          margin: 0;
        }
        
        .history-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        
        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          opacity: 0.9;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .history-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .timeline::before {
            left: 30px;
          }
          
          .timeline-item {
            padding-left: 80px !important;
            padding-right: 0 !important;
          }
          
          .timeline-item.left .timeline-year,
          .timeline-item.right .timeline-year {
            left: -60px;
            right: auto;
          }
          
          .history-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .stat-card {
            padding: 1.5rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .history-stats {
            grid-template-columns: 1fr;
          }
          
          .timeline-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HistorySection;