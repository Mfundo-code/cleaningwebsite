import React, { useState, useEffect } from "react";

const NUM_DROPS = 150;

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const drops = Array.from({ length: NUM_DROPS });

  // Background images array - replace these with your actual image URLs
  const backgroundImages = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Tractor plowing field
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80", // Green agriculture field
    "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Farm landscape
    "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"  // Agricultural field with crops
  ];

  // Auto-rotate background images with smooth transitions
  useEffect(() => {
    const transitionDuration = 3000; // 3 seconds for transition
    const displayDuration = 5000; // 5 seconds display time
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Change background after transition starts
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, transitionDuration / 2);
      
      // End transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    }, displayDuration + transitionDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      style={{
        ...styles.hero,
        backgroundImage: `linear-gradient(180deg, rgba(26,41,128,0.7) 0%, rgba(38,208,206,0.7) 100%), url(${backgroundImages[currentBgIndex]})`
      }} 
      className="hero-section" 
      aria-label="Hero section with animated rain"
    >
      <style>{keyframeStyles}</style>
      <style>{mobileStyles}</style>
      <style>{backgroundTransitionStyles}</style>

      {/* Background transition overlay for smooth fade */}
      <div 
        style={{
          ...styles.backgroundOverlay,
          opacity: isTransitioning ? 1 : 0,
        }} 
        className="background-overlay" 
        aria-hidden="true"
      />

      {/* Rain layer */}
      <div style={styles.rain} className="rain-layer" aria-hidden="true">
        {drops.map((_, i) => {
          const left = (i / NUM_DROPS) * 100 + ((i % 7) * 0.4);
          const length = 15 + ((i * 5) % 12);
          const thickness = 1 + ((i * 3) % 2) * 0.6;
          const duration = 0.8 + ((i % 12) * 0.1);
          const delay = (i % 15) * 0.03;
          const opacity = 0.3 + ((i % 6) * 0.04);

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: 0,
                left: `${left}%`,
                height: "100%",
                pointerEvents: "none",
              }}
            >
              {/* Rain drop */}
              <div
                style={{
                  position: "absolute",
                  top: "-100%",
                  left: 0,
                  width: `${thickness}px`,
                  height: `${length}vh`,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(173,216,230,0.6) 100%)",
                  borderRadius: "2px",
                  opacity,
                  animation: `rainFall ${duration}s linear ${delay}s infinite`,
                  filter: "blur(0.3px)",
                }}
              />

              {/* Splash effect */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "5%",
                  width: `${8 + thickness * 4}px`,
                  height: `${4 + thickness * 2}px`,
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
                  borderRadius: "50%",
                  transform: "translateX(-50%) scale(0)",
                  opacity: 0,
                  animation: `splashEffect ${duration}s linear ${delay}s infinite`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Faster clouds */}
      <div style={styles.cloud1} />
      <div style={styles.cloud2} />
      <div style={styles.cloud3} className="cloud-3" />

      {/* Content */}
      <div style={styles.heroContent} className="hero-content">
        <h1 style={styles.title} className="hero-title">Magical Rain Showers</h1>
        <p style={styles.lead} className="hero-lead">
          Experience the beauty of animated rain with a stunning rainbow backdrop. 
          Pure CSS magic that never stops.
        </p>

        <div style={styles.ctaWrap} className="hero-buttons">
          <button style={styles.btn} className="hero-button">Discover Magic</button>
          <button style={{ ...styles.btn, ...styles.btnGhost }} className="hero-button">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

/* =========================
   CSS Keyframes
   ========================= */
const keyframeStyles = `
@keyframes rainFall {
  0% {
    transform: translateY(-100%) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(120vh) translateX(8px);
    opacity: 0;
  }
}

@keyframes splashEffect {
  0%, 80% {
    transform: translateX(-50%) scale(0);
    opacity: 0;
  }
  85% {
    transform: translateX(-50%) scale(1.2);
    opacity: 0.7;
  }
  90% {
    transform: translateX(-50%) scale(1);
    opacity: 0.4;
  }
  95% {
    transform: translateX(-50%) scale(0.8) translateY(-2px);
    opacity: 0.2;
  }
  100% {
    transform: translateX(-50%) scale(0);
    opacity: 0;
  }
}

@keyframes cloudFloat {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(20px) translateY(3px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes backgroundFadeIn {
  0% {
    opacity: 0;
    transform: scale(1.05);
  }
  20% {
    opacity: 0.3;
    transform: scale(1.04);
  }
  40% {
    opacity: 0.6;
    transform: scale(1.02);
  }
  60% {
    opacity: 0.8;
    transform: scale(1.01);
  }
  80% {
    opacity: 0.9;
    transform: scale(1.005);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes backgroundFadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
    opacity: 0.9;
    transform: scale(1.005);
  }
  40% {
    opacity: 0.8;
    transform: scale(1.01);
  }
  60% {
    opacity: 0.6;
    transform: scale(1.02);
  }
  80% {
    opacity: 0.3;
    transform: scale(1.04);
  }
  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
`;

/* =========================
   Background Transition Styles
   ========================= */
const backgroundTransitionStyles = `
  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(26,41,128,0.8) 0%, rgba(38,208,206,0.8) 100%);
    z-index: 1;
    pointer-events: none;
    transition: opacity 1.5s ease-in-out;
  }

  .hero-section {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    transition: background-image 3s ease-in-out;
    animation: backgroundFadeIn 3s ease-in-out;
  }

  /* Smooth background change animation */
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: 0;
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
`;

/* =========================
   Mobile Styles
   ========================= */
const mobileStyles = `
  @media (max-width: 768px) {
    .hero-content {
      padding: 1rem !important;
      margin-top: 2rem !important;
    }
    
    .hero-title {
      font-size: 1.8rem !important;
      margin-bottom: 1rem !important;
    }
    
    .hero-lead {
      font-size: 1rem !important;
      margin-bottom: 1.5rem !important;
      padding: 0 0.5rem !important;
    }
    
    .hero-buttons {
      flex-direction: column !important;
      gap: 0.75rem !important;
    }
    
    .hero-button {
      width: 100% !important;
      max-width: 280px !important;
      margin: 0 auto !important;
    }
    
    /* Reduce rain density on mobile for better performance */
    .rain-layer {
      opacity: 0.7 !important;
    }
    
    /* Hide some clouds on mobile */
    .cloud-3 {
      display: none !important;
    }

    /* Slower transitions on mobile for better performance */
    .hero-section {
      transition: background-image 4s ease-in-out !important;
    }
    
    .background-overlay {
      transition: opacity 2s ease-in-out !important;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.5rem !important;
    }
    
    .hero-lead {
      font-size: 0.9rem !important;
    }
    
    .hero-section {
      min-height: 70vh !important;
      height: auto !important;
      padding: 1rem 0 !important;
    }
  }
`;

/* =========================
   Styles
   ========================= */
const styles = {
  hero: {
    position: "relative",
    height: "80vh",
    minHeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "#ffffff",
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    // Background is now set dynamically with the image and gradient overlay
  },

  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
    transition: "opacity 1.5s ease-in-out",
  },

  rain: {
    position: "absolute",
    inset: 0,
    zIndex: 3,
    overflow: "hidden",
    pointerEvents: "none",
  },

  cloud1: {
    position: "absolute",
    top: "8%",
    left: "5%",
    width: "120px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",
    filter: "blur(2px)",
    animation: "cloudFloat 15s ease-in-out infinite",
    zIndex: 2,
    boxShadow: `
      20px 15px 0 0 rgba(255, 255, 255, 0.9),
      40px 10px 0 0 rgba(255, 255, 255, 0.8),
      60px 15px 0 0 rgba(255, 255, 255, 0.7),
      10px 30px 0 10px rgba(255, 255, 255, 0.9),
      30px 25px 0 10px rgba(255, 255, 255, 0.8),
      50px 30px 0 10px rgba(255, 255, 255, 0.7)
    `,
  },

  cloud2: {
    position: "absolute",
    top: "15%",
    right: "10%",
    width: "150px",
    height: "70px",
    background: "rgba(255, 255, 255, 0.85)",
    borderRadius: "50%",
    filter: "blur(2px)",
    animation: "cloudFloat 18s ease-in-out infinite 1s",
    zIndex: 2,
    boxShadow: `
      25px 20px 0 0 rgba(255, 255, 255, 0.85),
      45px 15px 0 0 rgba(255, 255, 255, 0.75),
      65px 20px 0 0 rgba(255, 255, 255, 0.65),
      15px 35px 0 12px rgba(255, 255, 255, 0.85),
      35px 30px 0 12px rgba(255, 255, 255, 0.75),
      55px 35px 0 12px rgba(255, 255, 255, 0.65)
    `,
  },

  cloud3: {
    position: "absolute",
    top: "25%",
    left: "15%",
    width: "100px",
    height: "50px",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "50%",
    filter: "blur(2px)",
    animation: "cloudFloat 12s ease-in-out infinite 0.5s",
    zIndex: 2,
    boxShadow: `
      15px 10px 0 0 rgba(255, 255, 255, 0.8),
      30px 5px 0 0 rgba(255, 255, 255, 0.7),
      45px 10px 0 0 rgba(255, 255, 255, 0.6),
      5px 20px 0 8px rgba(255, 255, 255, 0.8),
      20px 15px 0 8px rgba(255, 255, 255, 0.7),
      35px 20px 0 8px rgba(255, 255, 255, 0.6)
    `,
  },

  heroContent: {
    position: "relative",
    zIndex: 4,
    maxWidth: 800,
    padding: "2rem",
    textAlign: "center",
    color: "white",
    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    margin: 0,
    marginBottom: "1rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },

  lead: {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    opacity: 0.95,
    marginBottom: "2rem",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.92)",
    maxWidth: "600px",
    margin: "0 auto 2rem",
  },

  ctaWrap: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  btn: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },

  btnGhost: {
    background: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
};