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
          <div key={index} style={styles.areaCard}>
            <div style={styles.imageContainer}>
              <img src={area.image} alt={area.region} style={styles.image} />
              <div style={styles.regionOverlay}>
                <h3 style={styles.regionName}>{area.region}</h3>
              </div>
            </div>
            
            <div style={styles.areaContent}>
              <div style={styles.areasList}>
                {area.areas.map((city, cityIndex) => (
                  <div key={cityIndex} style={styles.areaItem}>
                    <span style={styles.markerIcon}>📍</span>
                    {city}
                  </div>
                ))}
              </div>
              
              <button style={styles.serviceButton}>
                Services in {area.region}
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
    padding: "4rem 2rem",
    background: "white",
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
  areasGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto 3rem",
  },
  areaCard: {
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
  regionOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
    color: "white",
    padding: "1rem",
  },
  regionName: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  areaContent: {
    padding: "1.5rem",
  },
  areasList: {
    marginBottom: "1.5rem",
  },
  areaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.5rem 0",
    color: "#495057",
    fontWeight: "500",
  },
  markerIcon: {
    fontSize: "1rem",
  },
  serviceButton: {
    width: "100%",
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  nationalCoverage: {
    textAlign: "center",
    background: "#f8f9fa",
    padding: "2rem",
    borderRadius: "12px",
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

export default ServicesAreaSection;