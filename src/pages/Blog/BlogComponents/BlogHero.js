import React from "react";

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <div className="hero-background-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Pest Control
            <span className="hero-highlight"> Insights & Tips</span>
          </h1>
          <p className="hero-subtitle">
            Expert advice, prevention tips, and the latest news in pest control. 
            Learn how to protect your property and stay informed about pest management solutions.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">100+</div>
              <div className="hero-stat-label">Articles Published</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50K+</div>
              <div className="hero-stat-label">Monthly Readers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">Expert</div>
              <div className="hero-stat-label">Written</div>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Pest Control Blog"
            className="hero-image"
          />
          <div className="featured-badge">
            <span>🔥 Featured Content</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-hero {
          position: relative;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
          color: white;
          overflow: hidden;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        }
        
        .hero-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .hero-text-container {
          padding-right: 2rem;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }
        
        .hero-highlight {
          background: linear-gradient(45deg, #26d0ce, #1a2980);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
          opacity: 0.9;
        }
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .hero-stat {
          text-align: center;
        }
        
        .hero-stat-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .hero-stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .hero-image-container {
          position: relative;
        }
        
        .hero-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #e74c3c;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .hero-text-container {
            padding-right: 0;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-image {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .blog-hero {
            padding: 3rem 1rem;
          }
          
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-stats {
            gap: 1.5rem;
            margin: 1.5rem 0;
          }
          
          .hero-stat-number {
            font-size: 1.6rem;
          }
          
          .hero-stat-label {
            font-size: 0.85rem;
          }
          
          .hero-image {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .blog-hero {
            padding: 2rem 1rem;
          }
          
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 0.95rem;
          }
          
          .hero-stats {
            gap: 1rem;
            flex-wrap: wrap;
          }
          
          .hero-stat {
            flex: 1;
            min-width: 80px;
          }
          
          .hero-stat-number {
            font-size: 1.4rem;
          }
          
          .hero-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogHero;