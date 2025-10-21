import React, { useState, useEffect } from "react";

const ServicesSection = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  const services = [
    {
      id: 1,
      title: "Residential Pest Control",
      description: "Complete protection for your home and family from common household pests.",
      icon: "🏠",
      features: ["Ants & Cockroaches", "Rodents", "Spiders", "Bed Bugs"],
      images: [
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1556909114-4d0d853e5e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1584622650114-1f81d0b41b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      title: "Commercial Solutions",
      description: "Protect your business and maintain compliance with our commercial pest management.",
      icon: "🏢",
      features: ["Restaurants", "Offices", "Warehouses", "Retail Stores"],
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 3,
      title: "Agricultural Protection",
      description: "Safeguard your crops and livestock from destructive pests and insects.",
      icon: "🌾",
      features: ["Crop Protection", "Livestock Safety", "Storage Facilities", "Greenhouses"],
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
        "https://images.unsplash.com/photo-1625246339666-2a81e6d4e2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 4,
      title: "Emergency Response",
      description: "24/7 emergency pest control for urgent infestations and critical situations.",
      icon: "🚨",
      features: ["24/7 Service", "Same Day Response", "Critical Infestations", "Rapid Treatment"],
      images: [
        "https://images.unsplash.com/photo-1589656384667-54f5e5a6a2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
      ]
    },
    {
      id: 5,
      title: "Termite Control",
      description: "Professional termite inspection, treatment, and prevention services.",
      icon: "🐜",
      features: ["Termite Inspection", "Wood Treatment", "Soil Treatment", "Prevention"],
      images: [
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1589656384667-54f5e5a6a2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
      ]
    },
    {
      id: 6,
      title: "Mosquito & Fly Management",
      description: "Effective control of flying insects for comfortable outdoor and indoor spaces.",
      icon: "🦟",
      features: ["Mosquito Control", "Fly Elimination", "Outdoor Treatment", "Preventive Sprays"],
      images: [
        "https://images.unsplash.com/photo-1556909114-4d0d853e5e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551887377-1a7c2e5954ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80",
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    }
  ];

  // Initialize current image indexes
  useEffect(() => {
    const initialIndexes = {};
    services.forEach(service => {
      initialIndexes[service.id] = 0;
    });
    setCurrentImageIndexes(initialIndexes);
  }, []);

  // Auto-rotate images for each service with RANDOM independent timing
  useEffect(() => {
    const intervals = services.map(service => {
      // Random interval between 3000ms and 8000ms for each service
      const randomInterval = 3000 + Math.random() * 5000;
      
      return setInterval(() => {
        setCurrentImageIndexes(prev => ({
          ...prev,
          [service.id]: (prev[service.id] + 1) % service.images.length
        }));
      }, randomInterval);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const handleDotClick = (serviceId, index) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [serviceId]: index
    }));
  };

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Our Premium Services</h2>
        <p style={styles.subtitle}>
          Professional pest control solutions tailored to your specific needs. 
          We use eco-friendly methods and cutting-edge technology.
        </p>
      </div>

      <div style={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            {/* Image Carousel Container */}
            <div style={styles.imageCarousel}>
              {service.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  style={{
                    ...styles.carouselImage,
                    opacity: imgIndex === currentImageIndexes[service.id] ? 1 : 0,
                    transform: `scale(${imgIndex === currentImageIndexes[service.id] ? 1 : 1.05})`,
                    zIndex: imgIndex === currentImageIndexes[service.id] ? 1 : 0,
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${service.title} ${imgIndex + 1}`}
                    style={styles.image}
                  />
                  <div style={styles.imageOverlay} />
                </div>
              ))}
              
              {/* Service Icon */}
              <div style={styles.serviceIcon}>
                <span style={styles.icon}>{service.icon}</span>
              </div>

              {/* Image Navigation Dots */}
              <div style={styles.carouselDots}>
                {service.images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    style={{
                      ...styles.dot,
                      background: dotIndex === currentImageIndexes[service.id] 
                        ? '#3498db' 
                        : 'rgba(255,255,255,0.6)'
                    }}
                    onClick={() => handleDotClick(service.id, dotIndex)}
                  />
                ))}
              </div>
            </div>

            {/* Card Content */}
            <div style={styles.cardContent}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              
              <div style={styles.features}>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} style={styles.featureItem}>
                    <div style={styles.featureDot}></div>
                    <span style={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={styles.cardFooter}>
                <button style={styles.learnMoreButton}>
                  <span>Learn More</span>
                  <div style={styles.buttonIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div style={styles.priceTag}>
                  <span style={styles.price}>From $89</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA - Updated */}
      <div style={styles.bottomCTA}>
        <div style={styles.ctaContent}>
          <h3 style={styles.ctaTitle}>Need Immediate Assistance?</h3>
          <p style={styles.ctaText}>Our team is available 24/7 for emergency pest control services</p>
          <button style={styles.emergencyButton}>
            <span style={styles.emergencyIcon}>🚨</span>
            Emergency Call: +27713055659
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

/* =========================
   Clean White Styles - Updated for 6 Cards with Green Emergency Button
   ========================= */
const styles = {
  container: {
    position: "relative",
    padding: "5rem 2rem",
    background: "#ffffff",
    overflow: "hidden",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },

  header: {
    textAlign: "center",
    marginBottom: "4rem",
    position: "relative",
  },

  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: "0 0 1rem 0",
    letterSpacing: "-0.02em",
  },

  subtitle: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#6c757d",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1400px",
    margin: "0 auto 4rem",
  },

  serviceCard: {
    position: "relative",
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #e9ecef",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },

  imageCarousel: {
    position: "relative",
    height: "220px",
    overflow: "hidden",
  },

  carouselImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(44, 62, 80, 0.2) 0%, rgba(52, 152, 219, 0.1) 100%)",
  },

  serviceIcon: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    width: "45px",
    height: "45px",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
  },

  icon: {
    fontSize: "1.3rem",
  },

  carouselDots: {
    position: "absolute",
    bottom: "0.8rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "0.4rem",
  },

  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  cardContent: {
    padding: "1.5rem",
  },

  serviceTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 0.8rem 0",
  },

  serviceDescription: {
    color: "#6c757d",
    lineHeight: 1.5,
    margin: "0 0 1.2rem 0",
    fontSize: "0.9rem",
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    marginBottom: "1.5rem",
  },

  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },

  featureDot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3498db, #2ecc71)",
    flexShrink: 0,
  },

  featureText: {
    color: "#495057",
    fontSize: "0.85rem",
    fontWeight: "500",
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  learnMoreButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "0.85rem",
    boxShadow: "0 3px 12px rgba(52, 152, 219, 0.3)",
  },

  buttonIcon: {
    transition: "transform 0.3s ease",
  },

  priceTag: {
    background: "#f8f9fa",
    padding: "6px 12px",
    borderRadius: "5px",
    border: "1px solid #e9ecef",
  },

  price: {
    color: "#27ae60",
    fontWeight: "bold",
    fontSize: "0.85rem",
  },

  bottomCTA: {
    background: "linear-gradient(135deg, #f8fbfe 0%, #f0f7ff 100%)",
    border: "1px solid #e1f0ff",
    borderRadius: "16px",
    padding: "2.5rem 2rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  },

  ctaContent: {
    maxWidth: "500px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  ctaTitle: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: "0 0 0.8rem 0",
  },

  ctaText: {
    color: "#5a6c7d",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.5,
    fontSize: "0.95rem",
    fontWeight: "500",
  },

  emergencyButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    background: "linear-gradient(135deg, #27ae60 0%, #219653 100%)",
    color: "white",
    border: "none",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    boxShadow: "0 5px 18px rgba(39, 174, 96, 0.3)",
  },

  emergencyIcon: {
    fontSize: "1.2rem",
  },
};

// Add CSS animations and hover effects
const styleElement = document.createElement('style');
styleElement.textContent = `
  @keyframes smoothFade {
    0% {
      opacity: 0;
      transform: scale(1.05);
    }
    20% {
      opacity: 1;
      transform: scale(1);
    }
    80% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.05);
    }
  }

  /* Add decorative background elements for bottom CTA */
  .bottom-cta::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(39, 174, 96, 0.05) 100%);
    border-radius: 50%;
    z-index: 1;
  }

  .bottom-cta::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, rgba(39, 174, 96, 0.05) 0%, rgba(52, 152, 219, 0.05) 100%);
    border-radius: 50%;
    z-index: 1;
  }

  @media (hover: hover) {
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
      border-color: #3498db;
      transition: all 0.4s ease;
    }
    
    .learn-more-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
      transition: all 0.3s ease;
    }
    
    .learn-more-btn:hover .button-icon {
      transform: translateX(2px);
      transition: transform 0.3s ease;
    }
    
    .emergency-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
      background: linear-gradient(135deg, #219653 0%, #1e8749 100%);
      transition: all 0.3s ease;
    }
    
    .dot:hover {
      transform: scale(1.3);
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 1200px) {
    .services-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.2rem;
    }
    
    .service-card {
      margin: 0 0.5rem;
    }
    
    .image-carousel {
      height: 200px;
    }
    
    .card-content {
      padding: 1.2rem;
    }
    
    .bottom-cta {
      padding: 2rem 1.5rem;
      margin: 0 1rem;
    }
    
    .emergency-btn {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 3rem 1rem;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .service-card {
      margin: 0;
    }
    
    .card-footer {
      flex-direction: column;
      gap: 0.8rem;
      align-items: flex-start;
    }
    
    .price-tag {
      align-self: flex-end;
    }
  }
`;

// Add class names for CSS targeting
const addClassNames = () => {
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      const cards = document.querySelectorAll('[style*="border: 1px solid #e9ecef"]');
      cards.forEach(card => card.classList.add('service-card'));
      
      const buttons = document.querySelectorAll('[style*="linear-gradient(135deg, #3498db 0%, #2980b9 100%)"]');
      buttons.forEach(btn => {
        btn.classList.add('learn-more-btn');
        const icon = btn.querySelector('[style*="transition: transform 0.3s ease"]');
        if (icon) icon.classList.add('button-icon');
      });
      
      const emergencyBtn = document.querySelector('[style*="linear-gradient(135deg, #27ae60 0%, #219653 100%)"]');
      if (emergencyBtn) emergencyBtn.classList.add('emergency-btn');
      
      const dots = document.querySelectorAll('[style*="width: 6px"]');
      dots.forEach(dot => dot.classList.add('dot'));
      
      // Add class for bottom CTA
      const bottomCTA = document.querySelector('[style*="linear-gradient(135deg, #f8fbfe 0%, #f0f7ff 100%)"]');
      if (bottomCTA) bottomCTA.classList.add('bottom-cta');
    }, 100);
  }
};

// Inject styles and add class names
if (typeof document !== 'undefined') {
  document.head.appendChild(styleElement);
  addClassNames();
}