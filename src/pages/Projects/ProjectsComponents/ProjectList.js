import React, { useState } from "react";

const ProjectList = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Large Hotel Rodent Control",
      type: "commercial",
      location: "Sandton, Johannesburg",
      duration: "3 days",
      pests: ["Rats", "Mice"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Residential Termite Treatment",
      type: "residential",
      location: "Pretoria East",
      duration: "2 days",
      pests: ["Termites", "Wood Borers"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Farm Pest Management",
      type: "agricultural",
      location: "Limpopo Province",
      duration: "1 week",
      pests: ["Locusts", "Crop Pests"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "in-progress",
      date: "2024-01-20"
    },
    {
      id: 4,
      title: "Restaurant Emergency Service",
      type: "emergency",
      location: "Cape Town CBD",
      duration: "1 day",
      pests: ["Cockroaches", "Flies"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-18"
    },
    {
      id: 5,
      title: "Office Building Preventive Care",
      type: "preventive",
      location: "Centurion",
      duration: "Ongoing",
      pests: ["All Common Pests"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "maintenance",
      date: "2024-01-05"
    },
    {
      id: 6,
      title: "School Grounds Pest Control",
      type: "commercial",
      location: "Durban",
      duration: "2 days",
      pests: ["Ants", "Mosquitoes"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-12"
    }
  ]);

  return (
    <section className="project-list">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Recent Projects</h2>
          <p className="projects-count">{projects.length} Projects Completed</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-status ${project.status}`}>
                  {project.status.replace('-', ' ')}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="project-location">📍 {project.location}</span>
                </div>
                
                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{project.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Pests Treated:</span>
                    <span className="detail-value">{project.pests.join(', ')}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{project.date}</span>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button className="view-details-btn">View Details</button>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more">
          <button className="load-more-btn">Load More Projects</button>
        </div>
      </div>

      <style jsx>{`
        .project-list {
          padding: 4rem 2rem;
          background: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }
        
        .projects-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
        }
        
        .projects-count {
          font-size: 1.1rem;
          color: #6c757d;
          font-weight: 600;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .project-item {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .project-status.completed {
          background: #27ae60;
          color: white;
        }
        
        .project-status.in-progress {
          background: #f39c12;
          color: white;
        }
        
        .project-status.maintenance {
          background: #3498db;
          color: white;
        }
        
        .project-content {
          padding: 1.5rem;
        }
        
        .project-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
          line-height: 1.4;
        }
        
        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .project-type {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .project-location {
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        .project-details {
          margin: 1.5rem 0;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }
        
        .detail-label {
          color: #6c757d;
          font-weight: 500;
        }
        
        .detail-value {
          color: #2c3e50;
          font-weight: 600;
        }
        
        .project-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .view-details-btn {
          flex: 1;
          background: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .view-details-btn:hover {
          background: #2980b9;
        }
        
        .learn-more-btn {
          flex: 1;
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .learn-more-btn:hover {
          background: #3498db;
          color: white;
        }
        
        .load-more {
          text-align: center;
        }
        
        .load-more-btn {
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
          padding: 12px 30px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .load-more-btn:hover {
          background: #3498db;
          color: white;
        }

        @media (max-width: 768px) {
          .project-list {
            padding: 3rem 1rem;
          }
          
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .projects-title {
            font-size: 2rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .project-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectList;