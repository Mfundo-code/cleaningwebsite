import React from "react";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: "📘",
      handle: "@PestControlSA",
      url: "#",
      followers: "12.5K",
      description: "Follow for pest prevention tips and special offers"
    },
    {
      name: "Instagram",
      icon: "📷",
      handle: "@PestControl_SA",
      url: "#",
      followers: "8.3K",
      description: "See our work in action with before/after photos"
    },
    {
      name: "Twitter",
      icon: "🐦",
      handle: "@PestControl_SA",
      url: "#",
      followers: "5.7K",
      description: "Quick tips and emergency service updates"
    },
    {
      name: "YouTube",
      icon: "📹",
      handle: "Pest Control SA",
      url: "#",
      followers: "15.2K",
      description: "Educational videos and treatment demonstrations"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      handle: "Pest Control Professionals",
      url: "#",
      followers: "3.1K",
      description: "Commercial services and business partnerships"
    },
    {
      name: "WhatsApp",
      icon: "💬",
      handle: "+27713055659",
      url: "#",
      followers: "Direct Chat",
      description: "Instant messaging for quick inquiries"
    }
  ];

  return (
    <section className="social-links">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">
            Stay updated with the latest pest control tips, offers, and success stories
          </p>
        </div>
        
        <div className="social-grid">
          {socialPlatforms.map((platform, index) => (
            <a key={index} href={platform.url} className="social-card">
              <div className="social-icon">{platform.icon}</div>
              <h3 className="platform-name">{platform.name}</h3>
              <div className="platform-handle">{platform.handle}</div>
              <div className="platform-followers">{platform.followers} followers</div>
              <p className="platform-description">{platform.description}</p>
              <div className="follow-button">
                Follow on {platform.name}
              </div>
            </a>
          ))}
        </div>
        
        <div className="social-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get monthly pest control tips, seasonal alerts, and exclusive offers delivered to your inbox</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
            <div className="newsletter-features">
              <div className="feature">✅ Seasonal pest alerts</div>
              <div className="feature">✅ DIY prevention tips</div>
              <div className="feature">✅ Exclusive discounts</div>
              <div className="feature">✅ No spam, unsubscribe anytime</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-links {
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
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .social-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid #f8f9fa;
        }
        
        .social-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .social-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .platform-name {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
        }
        
        .platform-handle {
          color: #3498db;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .platform-followers {
          color: #27ae60;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .platform-description {
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0 0 1.5rem 0;
        }
        
        .follow-button {
          background: #3498db;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: background 0.3s ease;
        }
        
        .social-card:hover .follow-button {
          background: #2980b9;
        }
        
        .social-newsletter {
          background: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .newsletter-content h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .newsletter-content p {
          color: #6c757d;
          font-size: 1.1rem;
          margin: 0 0 2rem 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .newsletter-form {
          display: flex;
          max-width: 400px;
          margin: 0 auto 2rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .newsletter-input {
          flex: 1;
          padding: 15px 20px;
          border: none;
          outline: none;
          font-size: 1rem;
          background: #f8f9fa;
        }
        
        .newsletter-button {
          background: #27ae60;
          color: white;
          border: none;
          padding: 15px 25px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .newsletter-button:hover {
          background: #219653;
        }
        
        .newsletter-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .feature {
          color: #27ae60;
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .social-links {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .social-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          
          .social-card {
            padding: 1.5rem;
          }
          
          .social-icon {
            font-size: 2.5rem;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .newsletter-input {
            border-radius: 8px 8px 0 0;
          }
          
          .newsletter-button {
            border-radius: 0 0 8px 8px;
          }
          
          .newsletter-features {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .social-newsletter {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialLinks;