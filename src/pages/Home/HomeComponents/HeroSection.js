import React from "react";

const NUM_DROPS = 150;

const HeroSection = () => {
  const drops = Array.from({ length: NUM_DROPS });

  return (
    <section style={styles.hero} aria-label="Hero section with animated rain">
      <style>{keyframeStyles}</style>

      {/* Rain layer */}
      <div style={styles.rain} aria-hidden="true">
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
      <div style={styles.cloud3} />

      {/* Content */}
      <div style={styles.heroContent}>
        <h1 style={styles.title}>Magical Rain Showers</h1>
        <p style={styles.lead}>
          Experience the beauty of animated rain with a stunning rainbow backdrop. 
          Pure CSS magic that never stops.
        </p>

        <div style={styles.ctaWrap}>
          <button style={styles.btn}>Discover Magic</button>
          <button style={{ ...styles.btn, ...styles.btnGhost }}>Watch Demo</button>
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

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
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
    background: "linear-gradient(180deg, #1a2980 0%, #26d0ce 100%)",
  },

  rain: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
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
    animation: "cloudFloat 15s ease-in-out infinite", // Reduced from 25s to 15s
    zIndex: 1,
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
    animation: "cloudFloat 18s ease-in-out infinite 1s", // Reduced from 30s to 18s
    zIndex: 1,
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
    animation: "cloudFloat 12s ease-in-out infinite 0.5s", // Reduced from 20s to 12s
    zIndex: 1,
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
    zIndex: 3,
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

// Add hover effects for buttons
styles.btn = {
  ...styles.btn,
  ':hover': {
    background: "rgba(255,255,255,0.25)",
    transform: "translateY(-2px)",
  }
};

styles.btnGhost = {
  ...styles.btnGhost,
  ':hover': {
    background: "rgba(255,255,255,0.1)",
    transform: "translateY(-2px)",
  }
};