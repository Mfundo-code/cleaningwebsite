import React, { useState } from "react";

const ServiceCard = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = {
    residential: [
      {
        id: 1,
        title: "Ant & Cockroach Control",
        description: "Complete elimination of common household pests with safe, effective treatments.",
        price: "From $89",
        duration: "1-2 hours",
        features: ["Safe for pets", "Eco-friendly", "30-day guarantee"],
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: 2,
        title: "Rodent Control",
        description: "Professional rodent removal and prevention to keep your home pest-free.",
        price: "From $129",
        duration: "2-3 hours",
        features: ["Humane methods", "Prevention plan", "Follow-up inspection"],
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    commercial: [
      {
        id: 3,
        title: "Restaurant Pest Control",
        description: "Health code compliant solutions for food service establishments.",
        price: "From $299",
        duration: "3-4 hours",
        features: ["Health certified", "After-hours service", "Monthly maintenance"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    emergency: [
      {
        id: 4,
        title: "24/7 Emergency Response",
        description: "Immediate pest control for urgent situations and critical infestations.",
        price: "From $199",
        duration: "1-3 hours",
        features: ["Same-day service", "Rapid response", "Complete solution"],
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  };

  const allServices = [...services.residential, ...services.commercial, ...services.emergency];

  const filteredServices = activeCategory === "all" 
    ? allServices 
    : services[activeCategory];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Our Service Packages</h2>
        <p style={styles.subtitle}>
          Choose from our comprehensive pest control packages designed for your specific needs
        </p>
      </div>

      <div style={styles.filterTabs}>
        {["all", "residential", "commercial", "emergency"].map(category => (
          <button
            key={category}
            style={{
              ...styles.filterTab,
              ...(activeCategory === category ? styles.activeFilterTab : {})
            }}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.servicesGrid}>
        {filteredServices.map(service => (
          <div key={service.id} style={styles.serviceCard} className="service-card">
            <div style={styles.imageContainer}>
              <img src={service.image} alt={service.title} style={styles.image} className="service-image" />
              <div style={styles.priceBadge}>{service.price}</div>
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              
              <div style={styles.duration}>
                <span style={styles.durationIcon}>⏱</span>
                Duration: {service.duration}
              </div>
              
              <div style={styles.features}>
                {service.features.map((feature, index) => (
                  <div key={index} style={styles.feature}>
                    <span style={styles.checkmark}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div style={styles.cardActions}>
                <button style={styles.learnMoreBtn} className="learn-more-btn">
                  Learn More
                  <span style={styles.arrow}>→</span>
                </button>
                <button style={styles.bookNowBtn} className="learn-more-btn">
                  Book Now
                  <span style={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "3rem 1.5rem",
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
    maxWidth: "700px",
    margin: "0 auto 3rem",
  },
  title: {
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 0.8rem 0",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#6c757d",
    lineHeight: 1.5,
    margin: 0,
  },
  filterTabs: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap",
  },
  filterTab: {
    padding: "10px 18px",
    border: "2px solid #3498db",
    background: "transparent",
    color: "#3498db",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    fontSize: "0.85rem",
  },
  activeFilterTab: {
    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    color: "white",
    border: "2px solid transparent",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  serviceCard: {
    background: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  imageContainer: {
    position: "relative",
    height: "180px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  priceBadge: {
    position: "absolute",
    top: "0.8rem",
    right: "0.8rem",
    background: "#27ae60",
    color: "white",
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
  cardContent: {
    padding: "1.5rem",
  },
  serviceTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 0.8rem 0",
    lineHeight: 1.3,
  },
  serviceDescription: {
    color: "#6c757d",
    lineHeight: 1.5,
    margin: "0 0 1rem 0",
    fontSize: "0.85rem",
  },
  duration: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#3498db",
    fontWeight: "600",
    margin: "0 0 1rem 0",
    fontSize: "0.8rem",
  },
  durationIcon: {
    fontSize: "0.9rem",
  },
  features: {
    margin: "1.2rem 0",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    margin: "0.4rem 0",
    color: "#495057",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  checkmark: {
    color: "#27ae60",
    fontWeight: "bold",
    fontSize: "0.9rem",
    minWidth: "16px",
  },
  cardActions: {
    display: "flex",
    gap: "0.8rem",
    marginTop: "1.5rem",
  },
  learnMoreBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    background: "transparent",
    color: "#3498db",
    border: "2px solid #3498db",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    fontSize: "0.85rem",
  },
  bookNowBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    fontSize: "0.85rem",
    boxShadow: "0 3px 12px rgba(52, 152, 219, 0.25)",
  },
  arrow: {
    transition: "transform 0.3s ease",
    fontSize: "0.9rem",
  },
};

// Add hover effects
const hoverStyles = `
  @media (hover: hover) {
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.12);
    }
    
    .service-card:hover .service-image {
      transform: scale(1.05);
    }
    
    .learn-more-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(52, 152, 219, 0.35);
    }
    
    .learn-more-btn:hover .arrow {
      transform: translateX(2px);
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
    
    .service-card {
      margin: 0 0.8rem;
    }
    
    .image-container {
      height: 160px;
    }
    
    .card-content {
      padding: 1.2rem;
    }
    
    .card-actions {
      flex-direction: column;
      gap: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 2rem 1rem;
    }
    
    .header {
      margin-bottom: 2rem;
    }
    
    .service-card {
      margin: 0;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .filter-tabs {
      gap: 0.6rem;
    }
    
    .filter-tab {
      padding: 8px 14px;
      font-size: 0.8rem;
    }
  }
`;

// Inject styles and add class names
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = hoverStyles;
  document.head.appendChild(styleElement);
}

// Add class names to elements for CSS targeting
const addServiceClassNames = () => {
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      const cards = document.querySelectorAll('[style*="background: #ffffff"]');
      cards.forEach(card => {
        if (card.style.borderRadius === '16px') {
          card.classList.add('service-card');
        }
      });
      
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.style.objectFit === 'cover') {
          img.classList.add('service-image');
        }
      });
      
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        if (btn.style.background && (btn.style.background.includes('linear-gradient') || btn.style.border === '2px solid rgb(52, 152, 219)')) {
          btn.classList.add('learn-more-btn');
        }
      });
      
      const arrows = document.querySelectorAll('[style*="transition: transform 0.3s ease"]');
      arrows.forEach(arrow => {
        arrow.classList.add('arrow');
      });

      const grids = document.querySelectorAll('[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"]');
      grids.forEach(grid => {
        grid.classList.add('services-grid');
      });

      const filterContainers = document.querySelectorAll('[style*="justifyContent: center"]');
      filterContainers.forEach(container => {
        if (container.style.display === 'flex' && container.style.flexWrap === 'wrap') {
          container.classList.add('filter-tabs');
        }
      });

      const filterButtons = document.querySelectorAll('[style*="border: 2px solid rgb(52, 152, 219)"]');
      filterButtons.forEach(button => {
        button.classList.add('filter-tab');
      });
    }, 100);
  }
};

addServiceClassNames();

export default ServiceCard;