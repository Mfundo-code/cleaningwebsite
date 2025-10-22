import React from "react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "1995",
      event: "Company Foundation",
      description: "Founded as a small family business with focus on residential pest control",
      milestone: "Start"
    },
    {
      year: "1998",
      event: "First Expansion",
      description: "Opened second location and expanded service area",
      milestone: "Growth"
    },
    {
      year: "2002",
      event: "Commercial Division",
      description: "Launched dedicated commercial pest management services",
      milestone: "Diversification"
    },
    {
      year: "2007",
      event: "Green Initiative",
      description: "Introduced eco-friendly pest control options",
      milestone: "Innovation"
    },
    {
      year: "2012",
      event: "National Coverage",
      description: "Expanded to serve all major South African cities",
      milestone: "Expansion"
    },
    {
      year: "2018",
      event: "Technology Upgrade",
      description: "Implemented advanced digital monitoring systems",
      milestone: "Modernization"
    },
    {
      year: "2023",
      event: "Industry Leadership",
      description: "Recognized as market leader in pest control services",
      milestone: "Excellence"
    }
  ];

  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Growth Journey</h2>
          <p className="section-subtitle">
            Milestones that shaped our company and defined our path to excellence
          </p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="event-marker">
                <div className="marker-dot"></div>
                <div className="marker-year">{event.year}</div>
              </div>
              
              <div className="event-content">
                <div className="event-milestone">{event.milestone}</div>
                <h3 className="event-title">{event.event}</h3>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="journey-highlights">
          <h3>Key Journey Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight">
              <div className="highlight-icon">🚀</div>
              <h4>Rapid Growth</h4>
              <p>From single location to national presence in under 10 years</p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🌱</div>
              <h4>Sustainable Practices</h4>
              <p>Pioneered eco-friendly pest control in South Africa</p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">💡</div>
              <h4>Continuous Innovation</h4>
              <p>Always adopting the latest technologies and methods</p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">⭐</div>
              <h4>Industry Recognition</h4>
              <p>Multiple awards for excellence and customer service</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          padding: 5rem 2rem;
          background: #f8f9fa;
        }
        
        .container {
          max-width: 1000px;
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
        
        .timeline-container {
          position: relative;
          margin-bottom: 4rem;
        }
        
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #3498db;
          transform: translateX(-50%);
        }
        
        .timeline-event {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .timeline-event:nth-child(odd) {
          flex-direction: row-reverse;
        }
        
        .timeline-event:nth-child(odd) .event-content {
          margin-left: 0;
          margin-right: 3rem;
          text-align: right;
        }
        
        .event-marker {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }
        
        .marker-dot {
          width: 20px;
          height: 20px;
          background: #3498db;
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 0 0 3px #3498db;
        }
        
        .marker-year {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #3498db;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          white-space: nowrap;
        }
        
        .timeline-event:nth-child(even) .marker-year {
          right: calc(100% + 20px);
        }
        
        .timeline-event:nth-child(odd) .marker-year {
          left: calc(100% + 20px);
        }
        
        .event-content {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          margin-left: 3rem;
          flex: 1;
          transition: transform 0.3s ease;
        }
        
        .event-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .event-milestone {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .event-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .event-description {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }
        
        .journey-highlights {
          text-align: center;
        }
        
        .journey-highlights h3 {
          font-size: 2rem;
          color: #2c3e50;
          margin: 0 0 2rem 0;
        }
        
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .highlight {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .highlight:hover {
          transform: translateY(-5px);
        }
        
        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .highlight h4 {
          font-size: 1.2rem;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .highlight p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .timeline-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .timeline-line {
            left: 30px;
          }
          
          .timeline-event {
            flex-direction: row !important;
            margin-bottom: 2rem;
          }
          
          .timeline-event .event-content {
            margin-left: 3rem !important;
            margin-right: 0 !important;
            text-align: left !important;
          }
          
          .marker-year {
            position: static;
            transform: none;
            margin-bottom: 1rem;
          }
          
          .timeline-event:nth-child(even) .marker-year,
          .timeline-event:nth-child(odd) .marker-year {
            right: auto;
            left: auto;
          }
          
          .event-content {
            padding: 1.5rem;
          }
          
          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .event-content {
            margin-left: 2rem !important;
          }
          
          .marker-dot {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;