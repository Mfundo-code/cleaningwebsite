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
        image: "https://images.unsplash.com/photo-1556909114-4d0d853e5e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
          <div key={service.id} style={styles.serviceCard}>
            <div style={styles.imageContainer}>
              <img src={service.image} alt={service.title} style={styles.image} />
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
                <button style={styles.learnMoreBtn}>Learn More</button>
                <button style={styles.bookNowBtn}>Book Now</button>
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
    padding: "4rem 2rem",
    background: "#f8f9fa",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#6c757d",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  filterTabs: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap",
  },
  filterTab: {
    padding: "12px 24px",
    border: "2px solid #3498db",
    background: "transparent",
    color: "#3498db",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  activeFilterTab: {
    background: "#3498db",
    color: "white",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  serviceCard: {
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  imageContainer: {
    position: "relative",
    height: "200px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  priceBadge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "#27ae60",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  cardContent: {
    padding: "1.5rem",
  },
  serviceTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },
  serviceDescription: {
    color: "#6c757d",
    lineHeight: 1.6,
    margin: "0 0 1rem 0",
  },
  duration: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#3498db",
    fontWeight: "600",
    margin: "0 0 1rem 0",
  },
  durationIcon: {
    fontSize: "1rem",
  },
  features: {
    margin: "1.5rem 0",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.5rem 0",
    color: "#495057",
  },
  checkmark: {
    color: "#27ae60",
    fontWeight: "bold",
  },
  cardActions: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  learnMoreBtn: {
    flex: 1,
    background: "transparent",
    color: "#3498db",
    border: "2px solid #3498db",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  bookNowBtn: {
    flex: 1,
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
};

export default ServiceCard;