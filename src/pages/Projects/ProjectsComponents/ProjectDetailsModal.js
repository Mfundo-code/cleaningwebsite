import React from "react";

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="project-badge">{project.type}</div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.location}</p>
        </div>
        
        <div className="modal-body">
          <div className="project-gallery">
            <img src={project.image} alt={project.title} className="main-image" />
            <div className="gallery-thumbnails">
              <img src={project.image} alt="Thumbnail 1" />
              <img src={project.image} alt="Thumbnail 2" />
              <img src={project.image} alt="Thumbnail 3" />
            </div>
          </div>
          
          <div className="project-details">
            <div className="details-grid">
              <div className="detail-card">
                <h4>Project Overview</h4>
                <p>Comprehensive pest control treatment using eco-friendly methods and advanced technology to eliminate pest infestation.</p>
              </div>
              
              <div className="detail-card">
                <h4>Challenge</h4>
                <p>Severe pest infestation affecting daily operations and posing health risks to occupants.</p>
              </div>
              
              <div className="detail-card">
                <h4>Solution</h4>
                <p>Implemented integrated pest management strategy with regular monitoring and preventive measures.</p>
              </div>
              
              <div className="detail-card">
                <h4>Results</h4>
                <p>100% elimination of target pests with ongoing maintenance to prevent recurrence.</p>
              </div>
            </div>
            
            <div className="technical-specs">
              <h3>Technical Specifications</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Duration:</span>
                  <span className="spec-value">{project.duration}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Pests Treated:</span>
                  <span className="spec-value">{project.pests.join(', ')}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Methods Used:</span>
                  <span className="spec-value">Eco-friendly, Chemical, Physical</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Success Rate:</span>
                  <span className="spec-value">100%</span>
                </div>
              </div>
            </div>
            
            <div className="client-testimonial">
              <h3>Client Feedback</h3>
              <div className="testimonial-content">
                <p>"The team was professional, efficient, and completely eliminated our pest problem. Highly recommended!"</p>
                <div className="client-info">
                  <strong>John Smith</strong>
                  <span>Property Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary">Download Case Study</button>
          <button className="btn-primary">Schedule Similar Service</button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }
        
        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          width: 100%;
        }
        
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .close-btn:hover {
          background: rgba(0,0,0,0.7);
        }
        
        .modal-header {
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .project-badge {
          display: inline-block;
          background: #3498db;
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
          margin-bottom: 1rem;
        }
        
        .modal-title {
          font-size: 2rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
        }
        
        .modal-subtitle {
          color: #6c757d;
          font-size: 1.1rem;
          margin: 0;
        }
        
        .modal-body {
          padding: 1rem 2rem;
        }
        
        .project-gallery {
          margin-bottom: 2rem;
        }
        
        .main-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        
        .gallery-thumbnails {
          display: flex;
          gap: 1rem;
        }
        
        .gallery-thumbnails img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 6px;
          cursor: pointer;
          border: 2px solid transparent;
        }
        
        .gallery-thumbnails img:hover {
          border-color: #3498db;
        }
        
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .detail-card {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }
        
        .detail-card h4 {
          margin: 0 0 1rem 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }
        
        .detail-card p {
          margin: 0;
          color: #6c757d;
          line-height: 1.6;
        }
        
        .technical-specs {
          margin: 2rem 0;
        }
        
        .technical-specs h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .spec-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #dee2e6;
        }
        
        .spec-item:last-child {
          border-bottom: none;
        }
        
        .spec-label {
          color: #6c757d;
          font-weight: 500;
        }
        
        .spec-value {
          color: #2c3e50;
          font-weight: 600;
        }
        
        .client-testimonial {
          background: #e3f2fd;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 2rem 0;
        }
        
        .client-testimonial h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .testimonial-content p {
          font-style: italic;
          color: #495057;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .client-info {
          display: flex;
          flex-direction: column;
        }
        
        .client-info strong {
          color: #2c3e50;
        }
        
        .client-info span {
          color: #6c757d;
          font-size: 0.9rem;
        }
        
        .modal-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid #e9ecef;
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }
        
        .btn-primary, .btn-secondary {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid #3498db;
          transition: all 0.3s ease;
        }
        
        .btn-primary {
          background: #3498db;
          color: white;
        }
        
        .btn-primary:hover {
          background: #2980b9;
          border-color: #2980b9;
        }
        
        .btn-secondary {
          background: transparent;
          color: #3498db;
        }
        
        .btn-secondary:hover {
          background: #3498db;
          color: white;
        }

        @media (max-width: 768px) {
          .modal-overlay {
            padding: 1rem;
          }
          
          .modal-header {
            padding: 1.5rem 1.5rem 1rem;
          }
          
          .modal-body {
            padding: 1rem 1.5rem;
          }
          
          .modal-title {
            font-size: 1.5rem;
          }
          
          .details-grid {
            grid-template-columns: 1fr;
          }
          
          .specs-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-footer {
            flex-direction: column;
          }
          
          .main-image {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailsModal;