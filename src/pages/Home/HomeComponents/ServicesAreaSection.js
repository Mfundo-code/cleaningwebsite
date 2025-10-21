import React from "react";

const ServicesAreaSection = () => {
  const services = [
    {
      id: 1,
      title: "Urban Homes & Apartments",
      description: "Pest control solutions designed for city living, from cockroaches to rodents in flats, complexes, and residential estates.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "🏙️"
    },
    {
      id: 2,
      title: "Rural & Agricultural Properties",
      description: "Protecting farms, smallholdings, and rural homes from termites, flies, rodents, and other pests that threaten crops and livestock.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
      icon: "🌾"
    },
    {
      id: 3,
      title: "Commercial & Industrial Spaces",
      description: "Pest management for offices, factories, warehouses, and retail spaces to keep businesses compliant and pest-free.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: "🏢"
    },
    {
      id: 4,
      title: "Hospitality & Public Facilities",
      description: "Tailored pest control for hotels, restaurants, schools, and healthcare facilities, ensuring safe, clean, and welcoming environments.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "🏨"
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Service Areas</h2>
        <p style={styles.subtitle}>
          Comprehensive pest control solutions for every environment
        </p>
      </div>

      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={service.id} style={styles.serviceCard}>
            <div style={styles.imageContainer}>
              <img 
                src={service.image} 
                alt={service.title}
                style={styles.image}
              />
              <div style={styles.imageOverlay} />
              <div style={styles.iconBadge}>
                <span style={styles.icon}>{service.icon}</span>
              </div>
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              
              <div style={styles.features}>
                {getServiceFeatures(service.id).map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span style={styles.checkmark}>✓</span>
                    <span style={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button style={styles.learnMoreButton}>
                Learn More
                <span style={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper function to return features based on service type
const getServiceFeatures = (serviceId) => {
  const features = {
    1: ["Apartment Complexes", "Condominiums", "Townhouses", "Residential Estates"],
    2: ["Farmlands", "Barns & Silos", "Livestock Areas", "Crop Storage"],
    3: ["Office Buildings", "Manufacturing Plants", "Storage Facilities", "Retail Centers"],
    4: ["Hotels & Resorts", "Restaurants", "Schools & Universities", "Healthcare Facilities"]
  };
  return features[serviceId] || [];
};

export default ServicesAreaSection;

/* =========================
   Styles - 40% Smaller Cards
   ========================= */
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
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(44,62,80,0.7) 0%, rgba(52,152,219,0.4) 100%)",
  },
  iconBadge: {
    position: "absolute",
    top: "0.8rem",
    right: "0.8rem",
    width: "45px",
    height: "45px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
  },
  icon: {
    fontSize: "1.4rem",
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
    margin: "0 0 1.2rem 0",
    fontSize: "0.85rem",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    marginBottom: "1.5rem",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  checkmark: {
    color: "#27ae60",
    fontWeight: "bold",
    fontSize: "0.9rem",
    minWidth: "16px",
  },
  featureText: {
    color: "#495057",
    fontSize: "0.8rem",
    fontWeight: "500",
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
        if (btn.style.background && btn.style.background.includes('linear-gradient')) {
          btn.classList.add('learn-more-btn');
        }
      });
      
      const arrows = document.querySelectorAll('[style*="transition: transform 0.3s ease"]');
      arrows.forEach(arrow => {
        arrow.classList.add('arrow');
      });
    }, 100);
  }
};

addServiceClassNames();