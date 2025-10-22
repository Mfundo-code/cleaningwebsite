import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = [
    "Termite Control",
    "Rodent Prevention",
    "Eco-Friendly Pest Control",
    "Ant Infestation",
    "Mosquito Control",
    "Bed Bug Treatment"
  ];

  return (
    <section className="search-bar">
      <div className="container">
        <div className="search-container">
          <div className="search-input-group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog posts, tips, and guides..."
              className="search-input"
            />
            <button className="search-button">
              <span className="search-icon">🔍</span>
              Search
            </button>
          </div>
          
          <div className="popular-searches">
            <span className="popular-label">Popular searches:</span>
            <div className="search-tags">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="search-tag"
                  onClick={() => setSearchQuery(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="search-filters">
          <div className="filter-group">
            <label className="filter-label">Filter by:</label>
            <select className="filter-select">
              <option value="">All Categories</option>
              <option value="prevention">Prevention Tips</option>
              <option value="treatment">Treatment Guides</option>
              <option value="diy">DIY Solutions</option>
              <option value="professional">Professional Services</option>
              <option value="seasonal">Seasonal Advice</option>
            </select>
            
            <select className="filter-select">
              <option value="">All Tags</option>
              <option value="ants">Ants</option>
              <option value="rodents">Rodents</option>
              <option value="termites">Termites</option>
              <option value="cockroaches">Cockroaches</option>
              <option value="mosquitoes">Mosquitoes</option>
              <option value="bed-bugs">Bed Bugs</option>
            </select>
            
            <select className="filter-select">
              <option value="">Sort by</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="featured">Featured</option>
            </select>
          </div>
          
          <div className="view-options">
            <button className="view-option active">📄 List</button>
            <button className="view-option">🔄 Grid</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .search-bar {
          padding: 2rem 2rem 1rem;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .search-container {
          margin-bottom: 1.5rem;
        }
        
        .search-input-group {
          display: flex;
          max-width: 600px;
          margin: 0 auto 1.5rem;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          background: white;
        }
        
        .search-input {
          flex: 1;
          padding: 15px 20px;
          border: none;
          outline: none;
          font-size: 1rem;
          background: transparent;
        }
        
        .search-button {
          background: #3498db;
          color: white;
          border: none;
          padding: 15px 25px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.3s ease;
        }
        
        .search-button:hover {
          background: #2980b9;
        }
        
        .popular-searches {
          text-align: center;
        }
        
        .popular-label {
          color: #6c757d;
          font-size: 0.9rem;
          margin-right: 1rem;
        }
        
        .search-tags {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        
        .search-tag {
          background: white;
          border: 1px solid #e9ecef;
          color: #3498db;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .search-tag:hover {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .search-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .filter-group {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .filter-label {
          color: #6c757d;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .filter-select {
          padding: 8px 12px;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          background: white;
          color: #495057;
          font-size: 0.9rem;
          cursor: pointer;
        }
        
        .view-options {
          display: flex;
          gap: 0.5rem;
        }
        
        .view-option {
          padding: 8px 12px;
          border: 1px solid #e9ecef;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .view-option.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .view-option:hover:not(.active) {
          background: #f8f9fa;
        }

        @media (max-width: 768px) {
          .search-bar {
            padding: 1.5rem 1rem 1rem;
          }
          
          .search-input-group {
            flex-direction: column;
            border-radius: 12px;
          }
          
          .search-input {
            border-radius: 12px 12px 0 0;
          }
          
          .search-button {
            border-radius: 0 0 12px 12px;
            justify-content: center;
          }
          
          .search-filters {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-group {
            justify-content: center;
          }
          
          .view-options {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .filter-group {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-select {
            width: 100%;
          }
          
          .popular-label {
            display: block;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SearchBar;