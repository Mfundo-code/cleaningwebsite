import React from "react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Hotel Chain Pest Management",
      client: "Luxury Hotels Group",
      challenge: "Rodent infestation affecting 5-star ratings",
      solution: "Integrated pest management system",
      results: "100% pest-free for 12+ months",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Agricultural Pest Control",
      client: "Green Valley Farms",
      challenge: "Crop destruction by locusts",
      solution: "Aerial spraying and monitoring",
      results: "85% crop preservation",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Residential Termite Elimination",
      client: "Private Homeowner",
      challenge: "Structural damage from termites",
      solution: "Complete termite barrier system",
      results: "Property value preserved",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Case Studies</h2>
          <p className="section-subtitle">
            In-depth look at how we solved complex pest control challenges
          </p>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
              </div>
              
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <div className="case-study-client">Client: {study.client}</div>
                
                <div className="case-study-details">
                  <div className="detail-section">
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Our Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Results</h4>
                    <p className="results-highlight">{study.results}</p>
                  </div>
                </div>
                
                <button className="read-full-study">Read Full Case Study</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="case-studies-cta">
          <h3>Need a Custom Solution?</h3>
          <p>Let's discuss your specific pest control challenges</p>
          <button className="cta-button">Get Free Consultation</button>
        </div>
      </div>

      <style jsx>{`
        .case-studies {
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
        
        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .case-study-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .case-study-card:hover {
          transform: translateY(-5px);
        }
        
        .case-study-image {
          height: 200px;
          overflow: hidden;
        }
        
        .case-study-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .case-study-content {
          padding: 1.5rem;
        }
        
        .case-study-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
        }
        
        .case-study-client {
          color: #3498db;
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        
        .case-study-details {
          margin: 1.5rem 0;
        }
        
        .detail-section {
          margin-bottom: 1.5rem;
        }
        
        .detail-section h4 {
          font-size: 1rem;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }
        
        .detail-section p {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }
        
        .results-highlight {
          color: #27ae60 !important;
          font-weight: 600;
        }
        
        .read-full-study {
          width: 100%;
          background: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .read-full-study:hover {
          background: #2980b9;
        }
        
        .case-studies-cta {
          text-align: center;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .case-studies-cta h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .case-studies-cta p {
          color: #6c757d;
          margin: 0 0 2rem 0;
        }
        
        .cta-button {
          background: #27ae60;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: background 0.3s ease;
        }
        
        .cta-button:hover {
          background: #219653;
        }

        @media (max-width: 768px) {
          .case-studies {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .case-studies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;