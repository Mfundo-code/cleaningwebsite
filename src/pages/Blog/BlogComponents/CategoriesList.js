import React, { useState } from "react";

const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "all",
      name: "All Posts",
      count: 127,
      icon: "📝",
      color: "#3498db"
    },
    {
      id: "prevention",
      name: "Prevention Tips",
      count: 42,
      icon: "🛡️",
      color: "#27ae60"
    },
    {
      id: "treatment",
      name: "Treatment Guides",
      count: 35,
      icon: "🔧",
      color: "#e74c3c"
    },
    {
      id: "diy",
      name: "DIY Solutions",
      count: 28,
      icon: "🏠",
      color: "#9b59b6"
    },
    {
      id: "professional",
      name: "Professional Services",
      count: 15,
      icon: "👨‍💼",
      color: "#f39c12"
    },
    {
      id: "seasonal",
      name: "Seasonal Advice",
      count: 22,
      icon: "🌦️",
      color: "#1abc9c"
    },
    {
      id: "eco-friendly",
      name: "Eco-Friendly",
      count: 18,
      icon: "🌿",
      color: "#2ecc71"
    },
    {
      id: "emergency",
      name: "Emergency Tips",
      count: 12,
      icon: "🚨",
      color: "#e67e22"
    }
  ];

  return (
    <section className="categories-list">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Find exactly what you're looking for with our organized categories
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ '--category-color': category.color }}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <div className="category-count">{category.count} posts</div>
              </div>
              <div className="active-indicator"></div>
            </button>
          ))}
        </div>
        
        <div className="categories-stats">
          <div className="stat">
            <div className="stat-number">15+</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat">
            <div className="stat-number">127</div>
            <div className="stat-label">Total Posts</div>
          </div>
          <div className="stat">
            <div className="stat-number">Weekly</div>
            <div className="stat-label">New Content</div>
          </div>
          <div className="stat">
            <div className="stat-number">Expert</div>
            <div className="stat-label">Authors</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .categories-list {
          padding: 3rem 2rem;
          background: white;
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
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .category-card {
          position: relative;
          background: white;
          border: 2px solid #f8f9fa;
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .category-card:hover {
          border-color: var(--category-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .category-card.active {
          border-color: var(--category-color);
          background: var(--category-color);
          color: white;
        }
        
        .category-card.active .category-name,
        .category-card.active .category-count {
          color: white;
        }
        
        .category-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .category-content {
          flex: 1;
        }
        
        .category-name {
          font-size: 1.1rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
          transition: color 0.3s ease;
        }
        
        .category-count {
          color: #6c757d;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .active-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--category-color);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .category-card.active .active-indicator {
          opacity: 1;
        }
        
        .categories-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          text-align: center;
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }
        
        .stat {
          padding: 1rem;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #3498db;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #6c757d;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .categories-list {
            padding: 2rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }
          
          .category-card {
            padding: 1rem;
          }
          
          .categories-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
          
          .categories-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoriesList;