import React from "react";

const ServicesHero = () => {
  return (
    <section style={styles.container}>
      <div style={styles.backgroundOverlay}></div>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            Professional Pest Control
            <span style={styles.highlight}> Services</span>
          </h1>
          <p style={styles.subtitle}>
            Comprehensive pest management solutions for homes, businesses, and agricultural properties. 
            Our certified technicians use eco-friendly methods and cutting-edge technology to protect 
            your space from unwanted pests.
          </p>
          <div style={styles.stats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>98%</div>
              <div style={styles.statLabel}>Success Rate</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Emergency Service</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>ECO</div>
              <div style={styles.statLabel}>Friendly</div>
            </div>
          </div>
          <div style={styles.ctaButtons}>
            <button style={styles.primaryButton}>
              Get Free Inspection
            </button>
            <button style={styles.secondaryButton}>
              Emergency Call
            </button>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Professional Pest Control"
            style={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    position: "relative",
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)",
    color: "white",
    overflow: "hidden",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
  },
  textContainer: {
    paddingRight: "2rem",
  },
  title: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: "bold",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.2,
  },
  highlight: {
    background: "linear-gradient(45deg, #26d0ce, #1a2980)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "1.2rem",
    lineHeight: 1.6,
    margin: "0 0 2rem 0",
    opacity: 0.9,
  },
  stats: {
    display: "flex",
    gap: "2rem",
    margin: "2rem 0",
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  statLabel: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
  ctaButtons: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
  },
  primaryButton: {
    background: "linear-gradient(45deg, #26d0ce, #1a2980)",
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  secondaryButton: {
    background: "transparent",
    color: "white",
    border: "2px solid white",
    padding: "12px 30px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  imageContainer: {
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
};

export default ServicesHero;