import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Hotel Manager",
      company: "Grand Plaza Hotel",
      rating: 5,
      comment: "The team completely eliminated our rodent problem within 48 hours. Professional service with outstanding results!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      project: "Hotel Pest Control"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Restaurant Owner",
      company: "Dragon Palace",
      rating: 5,
      comment: "Fast response and effective treatment. Our kitchen is now pest-free and we passed health inspection with flying colors.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      project: "Restaurant Emergency Service"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Homeowner",
      company: "",
      rating: 5,
      comment: "After struggling with termites for years, these experts solved our problem permanently. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      project: "Residential Termite Treatment"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Farm Manager",
      company: "Green Valley Farms",
      rating: 5,
      comment: "Saved our crops from locust destruction. The aerial spraying program was incredibly effective and eco-friendly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      project: "Agricultural Pest Control"
    }
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-info">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="client-avatar"
                  />
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-role">
                      {testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <div className="project-reference">
                  Project: <strong>{testimonial.project}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 4rem 2rem;
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
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .testimonial-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid #3498db;
          transition: transform 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .client-info {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .client-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .client-details h4 {
          margin: 0 0 0.25rem 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }
        
        .client-role {
          margin: 0;
          color: #6c757d;
          font-size: 0.9rem;
        }
        
        .rating {
          font-size: 1rem;
        }
        
        .testimonial-content {
          color: #495057;
        }
        
        .testimonial-text {
          font-style: italic;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .project-reference {
          font-size: 0.9rem;
          color: #3498db;
          font-weight: 500;
        }
        
        .testimonials-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          text-align: center;
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }
        
        .stat-item {
          padding: 1rem;
        }
        
        .stat-number {
          font-size: 2.5rem;
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
          .testimonials {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .testimonials-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .testimonial-header {
            flex-direction: column;
            gap: 1rem;
          }
          
          .testimonials-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;