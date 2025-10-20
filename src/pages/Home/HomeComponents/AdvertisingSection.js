import React from "react";

const AdvertisingSection = () => (
  <section style={styles.container}>
    <div style={styles.overlay}>
      <div style={styles.content}>
        {/* Left Section - Features Card (Visible on Mobile) */}
        <div style={styles.leftSection}>
          <div style={styles.featureCard}>
            <div style={styles.features}>
              <div style={styles.featureItem}>
                <span style={styles.checkmark}>✓</span>
                <span style={styles.featureText}>Commercial & Residential Cleaning</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.checkmark}>✓</span>
                <span style={styles.featureText}>Eco-Friendly Products</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.checkmark}>✓</span>
                <span style={styles.featureText}>Fully Insured & Certified</span>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.checkmark}>✓</span>
                <span style={styles.featureText}>Same Day Service Available</span>
              </div>
            </div>
            <button style={styles.ctaButton}>Get Free Estimate</button>
          </div>
        </div>

        {/* Right Section - Professional Cleaning Solutions (Hidden on Mobile) */}
        <div style={styles.rightSection}>
          <div style={styles.textContent}>
            <h2 style={styles.title}>Professional Cleaning Solutions</h2>
            <p style={styles.description}>
              From deep cleaning to regular maintenance, we provide top-quality cleaning services 
              using the latest equipment and eco-friendly products. Your satisfaction is guaranteed!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AdvertisingSection;

/* =========================
   Styles
   ========================= */
const styles = {
  container: {
    position: "relative",
    minHeight: "367px",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(44, 62, 80, 0.7)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3rem",
    flexWrap: "wrap",
  },
  leftSection: {
    flex: "0 0 auto",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    justifyContent: "center",
  },
  rightSection: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "100%",
  },
  textContent: {
    color: "white",
    textAlign: "left",
  },
  title: {
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    fontWeight: "bold",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.2,
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  description: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.6,
    margin: "0 0 2rem 0",
    opacity: 0.95,
    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
  },
  featureCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "2rem",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.5rem 0",
  },
  checkmark: {
    color: "#27ae60",
    fontWeight: "bold",
    fontSize: "1.3rem",
    minWidth: "20px",
  },
  featureText: {
    fontSize: "1rem",
    color: "#2c3e50",
    textAlign: "left",
    fontWeight: "500",
  },
  ctaButton: {
    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    color: "white",
    border: "none",
    padding: "15px 30px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
    width: "100%",
  },
};

// Add hover effect for the button
const buttonStyle = document.createElement('style');
buttonStyle.textContent = `
  @media (hover: hover) {
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    }
  }
`;

// Updated media query for mobile - hide text content, show feature card
const mediaStyle = document.createElement('style');
mediaStyle.textContent = `
  @media (max-width: 768px) {
    .advertising-content {
      flex-direction: column;
      gap: 0;
      text-align: center;
      justify-content: center;
    }
    
    .advertising-right-section {
      display: none !important;
    }
    
    .advertising-left-section {
      max-width: 100% !important;
      width: 100%;
      display: flex !important;
      justify-content: center;
    }
    
    .text-content {
      display: none;
    }
    
    .feature-card {
      display: block;
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
    }
    
    .feature-item {
      justify-content: center;
    }
    
    .feature-text {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .feature-card {
      padding: 1.5rem;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  document.head.appendChild(buttonStyle);
  document.head.appendChild(mediaStyle);
}

// Function to add class names to elements
const addClassNames = () => {
  if (typeof document !== 'undefined') {
    // Find the content div and add class
    const contents = document.querySelectorAll('div');
    contents.forEach(content => {
      if (content.style.maxWidth === '1200px' && content.style.display === 'flex') {
        content.classList.add('advertising-content');
      }
    });
    
    // Find left section and add class
    const leftSections = document.querySelectorAll('div');
    leftSections.forEach(section => {
      if (section.style.maxWidth === '400px' && section.style.display === 'flex') {
        section.classList.add('advertising-left-section');
      }
    });
    
    // Find right section and add class
    const rightSections = document.querySelectorAll('div');
    rightSections.forEach(section => {
      if (section.style.minWidth === '300px' && section.style.flex === '1') {
        section.classList.add('advertising-right-section');
      }
    });
    
    // Find feature card and add class
    const featureCards = document.querySelectorAll('div');
    featureCards.forEach(card => {
      if (card.style.background === '#ffffff' && card.style.boxShadow) {
        card.classList.add('feature-card');
      }
    });
    
    // Find text content and add class
    const textContents = document.querySelectorAll('div');
    textContents.forEach(text => {
      if (text.style.color === 'white' && !text.style.background) {
        text.classList.add('text-content');
      }
    });
  }
};

// Add class names after component mounts
if (typeof document !== 'undefined') {
  setTimeout(addClassNames, 100);
}