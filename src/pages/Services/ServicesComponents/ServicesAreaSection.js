import React from "react";

const ServicesAreaSection = () => {
  const serviceAreas = [
    {
      region: "Gauteng",
      areas: ["Pretoria", "Johannesburg", "Centurion", "Midrand", "Sandton"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      region: "Western Cape",
      areas: ["Cape Town", "Stellenbosch", "Paarl", "Somerset West"],
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      region: "KwaZulu-Natal",
      areas: ["Durban", "Pietermaritzburg", "Ballito", "Umhlanga"],
      image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      region: "Eastern Cape",
      areas: ["Port Elizabeth", "East London", "Grahamstown", "Jeffreys Bay"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Service Areas Across South Africa</h2>
        <p style={styles.subtitle}>
          We provide professional pest control services throughout major regions of South Africa
        </p>
      </div>

      <div style={styles.areasGrid}>
        {serviceAreas.map((area, index) => (
          <div key={index} style={styles.areaCard} className="service-card">
            <div style={styles.imageContainer}>
              <img 
                src={area.image} 
                alt={area.region} 
                style={styles.image}
                className="service-image"
              />
              <div style={styles.imageOverlay} />
              <div style={styles.regionOverlay}>
                <h3 style={styles.regionName}>{area.region}</h3>
              </div>
            </div>
            
            <div style={styles.areaContent}>
              <div style={styles.areasList}>
                {area.areas.map((city, cityIndex) => (
                  <div key={cityIndex} style={styles.areaItem}>
                    <span style={styles.checkmark}>✓</span>
                    <span style={styles.featureText}>{city}</span>
                  </div>
                ))}
              </div>
              
              <button style={styles.serviceButton} className="learn-more-btn">
                Services in {area.region}
                <span style={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.nationalCoverage}>
        <h3 style={styles.coverageTitle}>National Coverage</h3>
        <p style={styles.coverageText}>
          With teams located across South Africa, we can provide rapid response times 
          and local expertise in every region we serve.
        </p>
        <div style={styles.coverageStats}>
          <div style={styles.stat}>
            <div style={styles.statNumber}>9</div>
            <div style={styles.statLabel}>Provinces</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Cities</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Availability</div>
          </div>
        </div>
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
  areasGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto 3rem",
  },
  areaCard: {
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
  regionOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    color: "white",
    padding: "1rem",
  },
  regionName: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  areaContent: {
    padding: "1.5rem",
  },
  areasList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    marginBottom: "1.5rem",
  },
  areaItem: {
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
  serviceButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
  },
  arrow: {
    transition: "transform 0.3s ease",
    fontSize: "0.9rem",
  },
  nationalCoverage: {
    textAlign: "center",
    background: "white",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  coverageTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },
  coverageText: {
    color: "#6c757d",
    margin: "0 0 2rem 0",
    lineHeight: 1.6,
  },
  coverageStats: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: "0.5rem",
  },
  statLabel: {
    color: "#6c757d",
    fontWeight: "600",
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

export default ServicesAreaSection;