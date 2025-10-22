import React, { useState } from "react";

const BlogList = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "10 Effective Ways to Prevent Termite Infestation",
      excerpt: "Learn the most effective strategies to protect your home from termite damage before it's too late.",
      category: "Prevention Tips",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      tags: ["Termites", "Prevention", "Home Protection"]
    },
    {
      id: 2,
      title: "The Complete Guide to Rodent Control in Winter",
      excerpt: "As temperatures drop, rodents seek shelter indoors. Here's how to keep them out of your home.",
      category: "Seasonal Advice",
      author: "Mike Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      tags: ["Rodents", "Winter", "Prevention"]
    },
    {
      id: 3,
      title: "Eco-Friendly Pest Control: Safe Solutions for Your Family",
      excerpt: "Discover natural and environmentally friendly methods to control pests without harmful chemicals.",
      category: "Eco-Friendly",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556909114-4d0d853e5e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      tags: ["Eco-Friendly", "Natural", "Safe"]
    },
    {
      id: 4,
      title: "DIY Ant Control: When to Handle It Yourself vs. Call Professionals",
      excerpt: "Not all ant problems require professional help. Learn when DIY solutions work and when to call experts.",
      category: "DIY Solutions",
      author: "David Thompson",
      date: "2024-01-08",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556909114-4d0d853e5e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      tags: ["Ants", "DIY", "Professional"]
    },
    {
      id: 5,
      title: "Understanding Mosquito Breeding Habits for Effective Control",
      excerpt: "Learn about mosquito life cycles and breeding grounds to implement targeted control strategies.",
      category: "Treatment Guides",
      author: "Dr. Lisa Wang",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      tags: ["Mosquitoes", "Breeding", "Control"]
    },
    {
      id: 6,
      title: "Emergency Pest Situations: What Requires Immediate Attention",
      excerpt: "Some pest problems can't wait. Learn which situations demand immediate professional intervention.",
      category: "Emergency Tips",
      author: "Emergency Response Team",
      date: "2024-01-03",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      tags: ["Emergency", "Urgent", "Safety"]
    }
  ]);

  return (
    <section className="blog-list">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Stay updated with the newest pest control insights and expert advice
          </p>
        </div>
        
        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.id} className={`post-card ${post.featured ? 'featured' : ''}`}>
              {post.featured && <div className="featured-badge">Featured</div>}
              
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <div className="post-category">{post.category}</div>
              </div>
              
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-author">By {post.author}</span>
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag">#{tag}</span>
                  ))}
                </div>
                
                <div className="post-actions">
                  <button className="read-more-btn">Read More</button>
                  <div className="post-stats">
                    <span className="stat">👁️ 2.4K</span>
                    <span className="stat">💬 42</span>
                    <span className="stat">❤️ 128</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="load-more">
          <button className="load-more-btn">Load More Articles</button>
        </div>
      </div>

      <style jsx>{`
        .blog-list {
          padding: 3rem 2rem;
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
        
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .post-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          position: relative;
        }
        
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .post-card.featured {
          border: 2px solid #3498db;
        }
        
        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #3498db;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }
        
        .post-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .post-card:hover .post-image img {
          transform: scale(1.05);
        }
        
        .post-category {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(52, 152, 219, 0.9);
          color: white;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .post-content {
          padding: 1.5rem;
        }
        
        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: #6c757d;
          flex-wrap: wrap;
        }
        
        .post-author {
          font-weight: 600;
          color: #3498db;
        }
        
        .post-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
          line-height: 1.4;
        }
        
        .post-excerpt {
          color: #6c757d;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .post-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .post-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .read-more-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .read-more-btn:hover {
          background: #2980b9;
        }
        
        .post-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: #6c757d;
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
          .blog-list {
            padding: 2rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .posts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .post-actions {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .post-stats {
            align-self: flex-end;
          }
        }

        @media (max-width: 480px) {
          .post-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .post-content {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogList;