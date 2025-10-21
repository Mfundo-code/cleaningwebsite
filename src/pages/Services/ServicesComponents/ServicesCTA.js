import React from "react";

const ServicesCTA = () => {
  return (
    <section style={styles.container}>
      <div style={styles.backgroundOverlay}></div>
      <div style={styles.content}>
        <div style={styles.textContent}>
          <h2 style={styles.title}>Ready to Protect Your Property?</h2>
          <p style={styles.subtitle}>
            Don't let pests take over your space. Get professional pest control solutions 
            tailored to your specific needs with guaranteed results.
          </p>
          
          <div style={styles.features}>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              Free Inspection & Quote
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              Same-Day Service Available
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              Satisfaction Guaranteed
            </div>
          </div>

          <div style={styles.ctaButtons}>
            <button style={styles.primaryButton}>
              📞 Call Now: +27713055659
            </button>
            <button style={styles.secondaryButton}>
              📧 Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    position: "relative",
    padding: "4rem 1rem",
    background: "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)",
    color: "white",
    overflow: "hidden",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    textAlign: "center",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.7)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textContent: {
    width: "100%",
    maxWidth: "600px",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "bold",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
    lineHeight: 1.6,
    margin: "0 0 2.5rem 0",
    opacity: 0.9,
  },
  features: {
    margin: "2.5rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    alignItems: "center",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontSize: "clamp(1.1rem, 2.5vw, 1.2rem)",
    justifyContent: "center",
  },
  featureIcon: {
    background: "#27ae60",
    color: "white",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    flexShrink: 0,
  },
  ctaButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    margin: "2.5rem 0 0 0",
    alignItems: "center",
    width: "100%",
  },
  primaryButton: {
    background: "#27ae60",
    color: "white",
    border: "none",
    padding: "18px 30px",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    maxWidth: "350px",
  },
  secondaryButton: {
    background: "transparent",
    color: "white",
    border: "2px solid white",
    padding: "18px 30px",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    maxWidth: "350px",
  },
};

// Media queries for larger screens
const mediaQueries = `
  @media (min-width: 768px) {
    .services-cta-container {
      padding: 5rem 2rem !important;
    }
    
    .services-cta-content {
      max-width: 700px !important;
    }
    
    .services-cta-features {
      flex-direction: row !important;
      justify-content: center !important;
      flex-wrap: wrap !important;
      gap: 2rem !important;
    }
    
    .services-cta-buttons {
      flex-direction: row !important;
      justify-content: center !important;
      gap: 1.5rem !important;
    }
    
    .services-cta-button {
      width: auto !important;
      min-width: 220px !important;
    }
  }
  
  @media (min-width: 1024px) {
    .services-cta-container {
      padding: 6rem 2rem !important;
    }
    
    .services-cta-title {
      font-size: 3.2rem !important;
    }
    
    .services-cta-subtitle {
      font-size: 1.4rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .services-cta-container {
      padding: 3rem 1rem !important;
    }
    
    .services-cta-title {
      font-size: 1.8rem !important;
    }
    
    .services-cta-subtitle {
      font-size: 1rem !important;
      margin-bottom: 2rem !important;
    }
    
    .services-cta-feature {
      font-size: 1rem !important;
    }
    
    .services-cta-button {
      padding: 16px 24px !important;
      font-size: 1rem !important;
    }
  }

  /* Hover effects for desktop */
  @media (hover: hover) {
    .services-cta-primary-btn:hover {
      background: #219653 !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(39, 174, 96, 0.4) !important;
    }
    
    .services-cta-secondary-btn:hover {
      background: rgba(255,255,255,0.1) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2) !important;
    }
  }

  /* Animation for feature icons */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .services-cta-feature-icon {
    animation: pulse 2s infinite;
  }
`;

// Add CSS to document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueries;
  document.head.appendChild(styleElement);
}

// Add class names for CSS targeting
setTimeout(() => {
  if (typeof document !== 'undefined') {
    const container = document.querySelector('[style*="linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)"]');
    if (container) container.classList.add('services-cta-container');
    
    const content = document.querySelector('[style*="maxWidth: \\"800px\\""]');
    if (content) content.classList.add('services-cta-content');
    
    const textContent = document.querySelector('[style*="maxWidth: \\"600px\\""]');
    if (textContent) textContent.classList.add('services-cta-text');
    
    const features = document.querySelector('[style*="flexDirection: \\"column\\""]');
    if (features) features.classList.add('services-cta-features');
    
    const featureItems = document.querySelectorAll('[style*="justifyContent: \\"center\\""]');
    featureItems.forEach(item => item.classList.add('services-cta-feature'));
    
    const featureIcons = document.querySelectorAll('[style*="background: #27ae60"]');
    featureIcons.forEach(icon => icon.classList.add('services-cta-feature-icon'));
    
    const buttons = document.querySelector('[style*="flexDirection: \\"column\\""]');
    if (buttons) buttons.classList.add('services-cta-buttons');
    
    const primaryBtn = document.querySelector('[style*="background: #27ae60"]');
    if (primaryBtn) primaryBtn.classList.add('services-cta-primary-btn', 'services-cta-button');
    
    const secondaryBtn = document.querySelector('[style*="background: transparent"]');
    if (secondaryBtn) secondaryBtn.classList.add('services-cta-secondary-btn', 'services-cta-button');
    
    const title = document.querySelector('[style*="fontSize: \\"clamp(2rem, 5vw, 3rem)\\""]');
    if (title) title.classList.add('services-cta-title');
    
    const subtitle = document.querySelector('[style*="fontSize: \\"clamp(1.1rem, 2.5vw, 1.3rem)\\""]');
    if (subtitle) subtitle.classList.add('services-cta-subtitle');
  }
}, 100);

export default ServicesCTA;