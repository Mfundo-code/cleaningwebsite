import React, { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Pretoria",
      rating: 5,
      text: "Outstanding service! The team arrived on time and completely eliminated our ant problem. Highly recommended!",
      service: "Residential Pest Control"
    },
    {
      id: 2,
      name: "Mike van der Merwe",
      location: "Johannesburg",
      rating: 5,
      text: "Their commercial package has kept our kitchen completely pest-free. Knowledgeable and reliable staff.",
      service: "Commercial Solutions"
    },
    {
      id: 3,
      name: "Thandiwe Ndlovu",
      location: "Cape Town",
      rating: 5,
      text: "Emergency service saved our wedding! They came within 2 hours and handled the wasp nest professionally.",
      service: "Emergency Response"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => {
    return (
      <div style={styles.starRating}>
        {[...Array(5)].map((_, index) => (
          <span key={index} style={styles.star}>
            {index < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>What Our Customers Say</h2>
        <p style={styles.subtitle}>
          Real feedback from satisfied customers across South Africa
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div style={styles.carouselContainer}>
        <div style={styles.carousel}>
          {/* Testimonial Card */}
          <div style={styles.testimonialCard}>
            <StarRating rating={testimonials[currentTestimonial].rating} />
            <p style={styles.testimonialText}>
              "{testimonials[currentTestimonial].text}"
            </p>
            <div style={styles.customerInfo}>
              <div style={styles.customerDetails}>
                <h4 style={styles.customerName}>{testimonials[currentTestimonial].name}</h4>
                <p style={styles.customerLocation}>{testimonials[currentTestimonial].location}</p>
                <div style={styles.serviceBadge}>
                  {testimonials[currentTestimonial].service}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={styles.navigation}>
            <button style={styles.navButton} onClick={prevTestimonial}>
              ‹
            </button>
            
            <div style={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.dot,
                    background: index === currentTestimonial ? '#3498db' : '#e0e0e0'
                  }}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <button style={styles.navButton} onClick={nextTestimonial}>
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Simple Stats */}
      <div style={styles.stats}>
        <div style={styles.stat}>
          <div style={styles.statNumber}>2,500+</div>
          <div style={styles.statLabel}>Happy Customers</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>98%</div>
          <div style={styles.statLabel}>Success Rate</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

/* =========================
   Mobile-First Styles
   ========================= */
const styles = {
  container: {
    padding: "3rem 1rem",
    background: "#f8f9fa",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },

  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },

  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },

  subtitle: {
    fontSize: "1rem",
    color: "#6c757d",
    maxWidth: "400px",
    margin: "0 auto",
    lineHeight: 1.5,
  },

  carouselContainer: {
    maxWidth: "500px",
    margin: "0 auto 2rem",
  },

  carousel: {
    position: "relative",
  },

  testimonialCard: {
    background: "white",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginBottom: "1.5rem",
  },

  starRating: {
    marginBottom: "1rem",
  },

  star: {
    color: "#FFD700",
    fontSize: "1.2rem",
    margin: "0 2px",
  },

  testimonialText: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#495057",
    margin: "0 0 1.5rem 0",
    fontStyle: "italic",
  },

  customerInfo: {
    display: "flex",
    justifyContent: "center",
  },

  customerDetails: {
    textAlign: "center",
  },

  customerName: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 0.2rem 0",
  },

  customerLocation: {
    color: "#6c757d",
    margin: "0 0 0.5rem 0",
    fontSize: "0.9rem",
  },

  serviceBadge: {
    background: "#3498db",
    color: "white",
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
    display: "inline-block",
  },

  navigation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },

  navButton: {
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "1.2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dots: {
    display: "flex",
    gap: "0.5rem",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    textAlign: "center",
  },

  stat: {
    flex: 1,
    maxWidth: "120px",
  },

  statNumber: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: "0.3rem",
  },

  statLabel: {
    color: "#6c757d",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
};

// Add basic hover effects
const styleElement = document.createElement('style');
styleElement.textContent = `
  @media (min-width: 768px) {
    .testimonial-card {
      padding: 2rem;
    }
    
    .testimonial-text {
      font-size: 1.1rem;
    }
    
    .stats {
      gap: 3rem;
    }
    
    .stat-number {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 2rem 1rem;
    }
    
    .title {
      font-size: 1.7rem;
    }
    
    .testimonial-card {
      padding: 1.2rem;
    }
    
    .navigation {
      padding: 0;
    }
    
    .stats {
      flex-direction: column;
      gap: 1rem;
    }
    
    .stat {
      max-width: none;
    }
  }

  .nav-button:hover {
    background: #2980b9;
    transform: scale(1.05);
  }

  .dot:hover {
    transform: scale(1.2);
  }
`;

// Add class names
if (typeof document !== 'undefined') {
  document.head.appendChild(styleElement);
  
  // Add class names after render
  setTimeout(() => {
    const navButtons = document.querySelectorAll('[style*="background: #3498db"]');
    navButtons.forEach(btn => btn.classList.add('nav-button'));
    
    const dots = document.querySelectorAll('[style*="width: 8px"]');
    dots.forEach(dot => dot.classList.add('dot'));
  }, 100);
}