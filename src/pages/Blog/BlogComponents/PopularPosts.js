import React from "react";

const PopularPosts = () => {
  const popularPosts = [
    {
      id: 1,
      title: "5 Signs You Have a Rodent Problem",
      category: "Detection",
      views: "25.4K",
      likes: "1.2K",
      date: "2024-01-10",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      trending: true
    },
    {
      id: 2,
      title: "Natural Ways to Repel Mosquitoes",
      category: "Eco-Friendly",
      views: "18.7K",
      likes: "893",
      date: "2024-01-08",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      trending: true
    },
    {
      id: 3,
      title: "The Truth About DIY Pest Control",
      category: "DIY Solutions",
      views: "15.3K",
      likes: "756",
      date: "2024-01-05",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1556909114-4d0d853e5e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      trending: false
    },
    {
      id: 4,
      title: "Termite Damage: Early Warning Signs",
      category: "Prevention",
      views: "12.9K",
      likes: "621",
      date: "2024-01-03",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      trending: false
    },
    {
      id: 5,
      title: "Bed Bug Treatment: Complete Guide",
      category: "Treatment",
      views: "11.2K",
      likes: "534",
      date: "2024-01-01",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      trending: true
    }
  ];

  return (
    <section className="popular-posts">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Most Popular Posts</h2>
          <p className="section-subtitle">
            Discover what other readers are finding most helpful
          </p>
        </div>
        
        <div className="popular-posts-grid">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="popular-post-card">
              <div className="post-rank">#{index + 1}</div>
              
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                {post.trending && <div className="trending-badge">🔥 Trending</div>}
              </div>
              
              <div className="post-content">
                <div className="post-category">{post.category}</div>
                <h3 className="post-title">{post.title}</h3>
                
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                
                <div className="post-stats">
                  <div className="stat">
                    <span className="stat-icon">👁️</span>
                    <span className="stat-value">{post.views}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">❤️</span>
                    <span className="stat-value">{post.likes}</span>
                  </div>
                </div>
                
                <button className="read-post-btn">Read Post</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="popular-topics">
          <h3 className="topics-title">Hot Topics This Week</h3>
          <div className="topics-list">
            <div className="topic-tag">#TermiteSeason</div>
            <div className="topic-tag">#WinterPests</div>
            <div className="topic-tag">#EcoFriendly</div>
            <div className="topic-tag">#DIYPrevention</div>
            <div className="topic-tag">#RodentControl</div>
            <div className="topic-tag">#MosquitoTips</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popular-posts {
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
        
        .popular-posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .popular-post-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .popular-post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .post-rank {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #3498db;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
          z-index: 2;
        }
        
        .post-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }
        
        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .popular-post-card:hover .post-image img {
          transform: scale(1.05);
        }
        
        .trending-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #e74c3c;
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }
        
        .post-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .post-category {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          align-self: flex-start;
          margin-bottom: 1rem;
        }
        
        .post-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
          line-height: 1.4;
          flex: 1;
        }
        
        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: #6c757d;
        }
        
        .post-stats {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        .stat-icon {
          font-size: 1rem;
        }
        
        .stat-value {
          font-weight: 600;
        }
        
        .read-post-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
          margin-top: auto;
        }
        
        .read-post-btn:hover {
          background: #2980b9;
        }
        
        .popular-topics {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .topics-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0 0 1.5rem 0;
        }
        
        .topics-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        
        .topic-tag {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .topic-tag:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .popular-posts {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .popular-posts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .post-rank {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .topics-list {
            gap: 0.5rem;
          }
          
          .topic-tag {
            font-size: 0.8rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularPosts;