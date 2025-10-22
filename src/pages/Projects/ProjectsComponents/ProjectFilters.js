import React, { useState } from "react";

const ProjectFilters = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "agricultural", label: "Agricultural" },
    { key: "emergency", label: "Emergency" },
    { key: "preventive", label: "Preventive Care" }
  ];

  return (
    <section className="filters-section">
      <div className="filters-container">
        <div className="filters-header">
          <h2 className="filters-title">Browse Our Projects</h2>
          <p className="filters-subtitle">
            Filter by project type to see specific case studies and success stories
          </p>
        </div>
        
        <div className="filters-grid">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search projects by location or pest type..."
            className="search-input"
          />
          <button className="search-btn">
            🔍
          </button>
        </div>
      </div>

      <style jsx>{`
        .filters-section {
          padding: 3rem 2rem;
          background: #f8f9fa;
        }
        
        .filters-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .filters-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .filters-title {
          font-size: 2rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .filters-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin: 0;
        }
        
        .filters-grid {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        
        .filter-btn {
          padding: 12px 24px;
          border: 2px solid #3498db;
          background: transparent;
          color: #3498db;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        
        .filter-btn:hover {
          background: rgba(52, 152, 219, 0.1);
          transform: translateY(-2px);
        }
        
        .filter-btn.active {
          background: #3498db;
          color: white;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }
        
        .search-box {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          background: white;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .search-input {
          flex: 1;
          padding: 15px 20px;
          border: none;
          outline: none;
          font-size: 1rem;
          background: transparent;
        }
        
        .search-btn {
          padding: 15px 20px;
          background: #3498db;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          transition: background 0.3s ease;
        }
        
        .search-btn:hover {
          background: #2980b9;
        }

        @media (max-width: 768px) {
          .filters-section {
            padding: 2rem 1rem;
          }
          
          .filters-title {
            font-size: 1.5rem;
          }
          
          .filters-subtitle {
            font-size: 1rem;
          }
          
          .filters-grid {
            gap: 0.5rem;
          }
          
          .filter-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .filters-grid {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .filter-btn {
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectFilters;