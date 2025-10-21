import React from "react";

const CallToActionSection = () => (
  <section style={styles.container}>
    <div style={styles.content}>
      {/* Left section - Text content */}
      <div style={styles.textSection}>
        <h2 style={styles.title}>We're The Dust Busters!</h2>
        <p style={styles.description}>
          Don't let pests invade your peace of mind! From ants and cockroaches to termites and rodents, 
          we eliminate pests quickly and prevent them from coming back—so you can feel safe and comfortable again.
        </p>
      </div>

      {/* Spacer between sections */}
      <div style={styles.spacer}></div>

      {/* Right section - Phone number */}
      <div style={styles.contactSection}>
        <div style={styles.phoneWrapper}>
          <div style={styles.phoneIcon}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div style={styles.phoneContent}>
            <div style={styles.callText}>Call Us!</div>
            <div style={styles.phoneNumber}>+27713055659</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallToActionSection;

/* =========================
   Styles - Desktop Right, Mobile Center
   ========================= */
const styles = {
  container: {
    padding: "4rem 2rem",
    background: "#ffffff",
    color: "#333333",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  textSection: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "65%",
  },
  spacer: {
    width: "5%",
    minWidth: "40px",
  },
  contactSection: {
    flex: "0 0 auto",
    minWidth: "250px",
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "bold",
    margin: "0 0 1.5rem 0",
    color: "#2c3e50",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    lineHeight: "1.2",
  },
  description: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: "1.6",
    opacity: 0.9,
    margin: 0,
    color: "#555555",
  },
  phoneWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
    boxShadow: "0 8px 25px rgba(52, 152, 219, 0.3)",
  },
  phoneIcon: {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    color: "white",
  },
  phoneContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  callText: {
    fontSize: "0.9rem",
    opacity: 0.8,
    fontWeight: "500",
  },
  phoneNumber: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "white",
    letterSpacing: "0.5px",
  },
};

// Add media query for mobile responsiveness
const style = document.createElement('style');
style.textContent = `
  /* Desktop styles (default) - Phone on right */
  @media (min-width: 769px) {
    .call-to-action-content {
      flex-direction: row;
      text-align: left;
    }
    
    .call-to-action-text {
      text-align: left;
    }
    
    .phone-wrapper {
      margin-left: auto;
    }
  }

  /* Mobile styles - Center everything */
  @media (max-width: 768px) {
    .call-to-action-container {
      padding: 3rem 1rem !important;
    }
    
    .call-to-action-content {
      flex-direction: column !important;
      text-align: center !important;
      gap: 2rem !important;
    }
    
    .call-to-action-text {
      max-width: 100% !important;
      text-align: center !important;
    }
    
    .call-to-action-title {
      font-size: 1.8rem !important;
      text-align: center !important;
    }
    
    .call-to-action-description {
      font-size: 1.1rem !important;
      text-align: center !important;
      padding: 0 1rem;
    }
    
    .call-to-action-spacer {
      display: none !important;
    }
    
    .phone-wrapper {
      flex-direction: column !important;
      text-align: center !important;
      padding: 1.5rem !important;
      margin: 0 auto !important;
    }
    
    .phone-content {
      align-items: center !important;
    }
    
    .phone-number {
      font-size: 1.3rem !important;
    }
  }

  @media (max-width: 480px) {
    .call-to-action-title {
      font-size: 1.6rem !important;
    }
    
    .call-to-action-description {
      font-size: 1rem !important;
    }
    
    .phone-wrapper {
      padding: 1.25rem !important;
    }
  }

  /* Add hover effects */
  @media (hover: hover) {
    .phone-wrapper:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(52, 152, 219, 0.4);
    }
  }
`;

// Add class names for better CSS targeting
const addClassNames = () => {
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      // Add classes to main elements
      const container = document.querySelector('[style*="padding: 4rem 2rem"]');
      if (container) container.classList.add('call-to-action-container');
      
      const content = document.querySelector('[style*="maxWidth: 1200px"]');
      if (content && content.style.display === 'flex') {
        content.classList.add('call-to-action-content');
      }
      
      const textSection = document.querySelector('[style*="minWidth: 300px"]');
      if (textSection) textSection.classList.add('call-to-action-text');
      
      const title = document.querySelector('h2');
      if (title && title.textContent === "We're The Dust Busters!") {
        title.classList.add('call-to-action-title');
      }
      
      const description = document.querySelector('p');
      if (description && description.textContent.includes("Don't let pests invade")) {
        description.classList.add('call-to-action-description');
      }
      
      const spacer = document.querySelector('[style*="width: 5%"]');
      if (spacer) spacer.classList.add('call-to-action-spacer');
      
      const phoneWrapper = document.querySelector('[style*="linear-gradient(135deg, #2c3e50 0%, #3498db 100%)"]');
      if (phoneWrapper) phoneWrapper.classList.add('phone-wrapper');
    }, 100);
  }
};

// Inject styles and add class names
if (typeof document !== 'undefined') {
  document.head.appendChild(style);
  addClassNames();
}