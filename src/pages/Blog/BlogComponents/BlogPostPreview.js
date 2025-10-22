import React from "react";

const BlogPostPreview = () => {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Year-Round Pest Prevention",
    excerpt: "Comprehensive strategies to keep your home pest-free throughout all seasons. Learn about common pests, prevention methods, and when to seek professional help.",
    category: "Prevention Tips",
    author: "Dr. Sarah Chen",
    authorRole: "Lead Entomologist",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    date: "2024-01-15",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    views: "15.2K",
    comments: 89,
    likes: 423
  };

  const sections = [
    {
      title: "Understanding Pest Behavior",
      content: "Learn how different pests behave throughout the year and what attracts them to your property."
    },
    {
      title: "Seasonal Prevention Strategies",
      content: "Tailored approaches for each season to address specific pest threats effectively."
    },
    {
      title: "DIY Prevention Methods",
      content: "Simple yet effective do-it-yourself techniques that anyone can implement."
    },
    {
      title: "When to Call Professionals",
      content: "Recognize the signs that indicate it's time to seek expert pest control services."
    }
  ];

  return (
    <section className="blog-post-preview">
      <div className="container">
        <div className="preview-header">
          <h2 className="preview-title">Featured Post Preview</h2>
          <p className="preview-subtitle">
            Get a sneak peek into our most comprehensive pest prevention guide
          </p>
        </div>
        
        <div className="featured-post">
          <div className="post-hero">
            <img src={featuredPost.image} alt={featuredPost.title} className="hero-image" />
            <div className="hero-overlay">
              <div className="post-category">{featuredPost.category}</div>
              <h1 className="post-title">{featuredPost.title}</h1>
              <div className="post-meta">
                <div className="author-info">
                  <img src={featuredPost.authorImage} alt={featuredPost.author} className="author-image" />
                  <div className="author-details">
                    <div className="author-name">{featuredPost.author}</div>
                    <div className="author-role">{featuredPost.authorRole}</div>
                  </div>
                </div>
                <div className="post-stats">
                  <span className="stat">{featuredPost.date}</span>
                  <span className="stat">{featuredPost.readTime}</span>
                  <span className="stat">👁️ {featuredPost.views}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="post-preview-content">
            <div className="preview-excerpt">
              <p>{featuredPost.excerpt}</p>
            </div>
            
            <div className="preview-sections">
              <h3>What You'll Learn:</h3>
              <div className="sections-grid">
                {sections.map((section, index) => (
                  <div key={index} className="section-card">
                    <div className="section-number">{index + 1}</div>
                    <div className="section-content">
                      <h4>{section.title}</h4>
                      <p>{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="preview-actions">
              <button className="read-full-btn">Read Full Article</button>
              <div className="social-share">
                <span>Share this post:</span>
                <div className="share-buttons">
                  <button className="share-btn">📘</button>
                  <button className="share-btn">🐦</button>
                  <button className="share-btn">💼</button>
                  <button className="share-btn">📧</button>
                </div>
              </div>
            </div>
            
            <div className="engagement-stats">
              <div className="engagement-item">
                <div className="engagement-number">{featuredPost.views}</div>
                <div className="engagement-label">Views</div>
              </div>
              <div className="engagement-item">
                <div className="engagement-number">{featuredPost.comments}</div>
                <div className="engagement-label">Comments</div>
              </div>
              <div className="engagement-item">
                <div className="engagement-number">{featuredPost.likes}</div>
                <div className="engagement-label">Likes</div>
              </div>
              <div className="engagement-item">
                <div className="engagement-number">98%</div>
                <div className="engagement-label">Helpful</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-post-preview {
          padding: 4rem 2rem;
          background: white;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .preview-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .preview-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .preview-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .featured-post {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .post-hero {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        
        .post-category {
          background: #3498db;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          align-self: flex-start;
          margin-bottom: 1rem;
        }
        
        .post-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }
        
        .post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .author-details .author-name {
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .author-details .author-role {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .post-stats {
          display: flex;
          gap: 1.5rem;
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .post-preview-content {
          padding: 2rem;
        }
        
        .preview-excerpt {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #495057;
          margin-bottom: 2rem;
          border-left: 4px solid #3498db;
          padding-left: 1.5rem;
        }
        
        .preview-sections {
          margin: 3rem 0;
        }
        
        .preview-sections h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0 0 2rem 0;
        }
        
        .sections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .section-card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }
        
        .section-number {
          width: 40px;
          height: 40px;
          background: #3498db;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .section-content h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }
        
        .section-content p {
          margin: 0;
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .preview-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 2rem 0;
          padding: 2rem 0;
          border-top: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
        }
        
        .read-full-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .read-full-btn:hover {
          background: #2980b9;
        }
        
        .social-share {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .social-share span {
          color: #6c757d;
          font-weight: 500;
        }
        
        .share-buttons {
          display: flex;
          gap: 0.5rem;
        }
        
        .share-btn {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .share-btn:hover {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .engagement-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          text-align: center;
        }
        
        .engagement-item {
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .engagement-number {
          font-size: 2rem;
          font-weight: bold;
          color: #3498db;
          margin-bottom: 0.5rem;
        }
        
        .engagement-label {
          color: #6c757d;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .blog-post-preview {
            padding: 3rem 1rem;
          }
          
          .preview-title {
            font-size: 2rem;
          }
          
          .post-hero {
            height: 300px;
          }
          
          .post-title {
            font-size: 1.8rem;
          }
          
          .post-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .preview-actions {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .social-share {
            flex-direction: column;
            gap: 1rem;
          }
          
          .sections-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .post-title {
            font-size: 1.5rem;
          }
          
          .preview-excerpt {
            font-size: 1rem;
            padding-left: 1rem;
          }
          
          .section-card {
            flex-direction: column;
            text-align: center;
          }
          
          .engagement-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default BlogPostPreview;