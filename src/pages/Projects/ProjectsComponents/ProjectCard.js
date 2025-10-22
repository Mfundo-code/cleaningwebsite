import React from "react";

const ProjectCard = ({ project }) => {
  const {
    title,
    type,
    location,
    duration,
    pests,
    image,
    status,
    date,
    description = "Professional pest control treatment using eco-friendly methods and advanced technology."
  } = project;

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#27ae60';
      case 'in-progress': return '#f39c12';
      case 'maintenance': return '#3498db';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div 
          className="status-badge"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status.replace('-', ' ')}
        </div>
        <div className="type-badge">{type}</div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-details">
          <div className="detail">
            <span className="detail-icon">📍</span>
            <span className="detail-text">{location}</span>
          </div>
          <div className="detail">
            <span className="detail-icon">⏱</span>
            <span className="detail-text">{duration}</span>
          </div>
          <div className="detail">
            <span className="detail-icon">📅</span>
            <span className="detail-text">{date}</span>
          </div>
        </div>
        
        <div className="pests-treated">
          <h4>Pests Treated:</h4>
          <div className="pests-list">
            {pests.map((pest, index) => (
              <span key={index} className="pest-tag">{pest}</span>
            ))}
          </div>
        </div>
        
        <div className="card-actions">
          <button className="primary-btn">View Case Study</button>
          <button className="secondary-btn">Quick View</button>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .project-card:hover .card-image img {
          transform: scale(1.05);
        }
        
        .status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .type-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255,255,255,0.9);
          color: #2c3e50;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .card-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
          line-height: 1.4;
        }
        
        .card-description {
          color: #6c757d;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          flex: 1;
        }
        
        .card-details {
          margin: 1rem 0;
        }
        
        .detail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }
        
        .detail-icon {
          font-size: 1rem;
        }
        
        .detail-text {
          color: #495057;
          font-weight: 500;
        }
        
        .pests-treated {
          margin: 1rem 0;
        }
        
        .pests-treated h4 {
          font-size: 1rem;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }
        
        .pests-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .pest-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .card-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }
        
        .primary-btn {
          flex: 2;
          background: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .primary-btn:hover {
          background: #2980b9;
        }
        
        .secondary-btn {
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
        
        .secondary-btn:hover {
          background: #3498db;
          color: white;
        }

        @media (max-width: 768px) {
          .card-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;