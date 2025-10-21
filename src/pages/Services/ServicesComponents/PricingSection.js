import React, { useState } from "react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "Basic",
      description: "Perfect for small homes and occasional pest problems",
      monthlyPrice: 89,
      yearlyPrice: 89 * 10, // 2 months free
      features: [
        "One-time treatment",
        "Common pests (ants, cockroaches)",
        "30-day guarantee",
        "Basic inspection"
      ],
      notIncluded: [
        "Rodent control",
        "Termite inspection",
        "Emergency service"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      description: "Most popular - Complete protection for your home",
      monthlyPrice: 149,
      yearlyPrice: 149 * 10,
      features: [
        "Quarterly treatments",
        "All common pests",
        "Rodent control",
        "Termite inspection",
        "90-day guarantee",
        "Priority scheduling"
      ],
      notIncluded: [
        "Same-day emergency",
        "Commercial certification"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Complete protection with emergency response",
      monthlyPrice: 299,
      yearlyPrice: 299 * 10,
      features: [
        "Monthly treatments",
        "24/7 emergency service",
        "All pests included",
        "Commercial certification",
        "Same-day response",
        "Dedicated technician",
        "Annual termite bond"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Transparent Pricing</h2>
        <p style={styles.subtitle}>
          No hidden fees. Choose the plan that works best for your needs
        </p>
        
        <div style={styles.billingToggle}>
          <button
            style={{
              ...styles.toggleBtn,
              ...(billingCycle === "monthly" ? styles.activeToggle : {})
            }}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            style={{
              ...styles.toggleBtn,
              ...(billingCycle === "yearly" ? styles.activeToggle : {})
            }}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly (2 months free)
          </button>
        </div>
      </div>

      <div style={styles.pricingGrid}>
        {plans.map(plan => (
          <div 
            key={plan.id} 
            style={{
              ...styles.pricingCard,
              ...(plan.popular ? styles.popularCard : {})
            }}
          >
            {plan.popular && <div style={styles.popularBadge}>Most Popular</div>}
            
            <div style={styles.cardHeader}>
              <h3 style={styles.planName}>{plan.name}</h3>
              <p style={styles.planDescription}>{plan.description}</p>
              
              <div style={styles.price}>
                <span style={styles.priceAmount}>
                  ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span style={styles.pricePeriod}>
                  / {billingCycle === "monthly" ? "month" : "year"}
                </span>
              </div>
              
              {billingCycle === "yearly" && (
                <div style={styles.savings}>
                  Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}
                </div>
              )}
            </div>

            <div style={styles.features}>
              <h4 style={styles.featuresTitle}>What's Included:</h4>
              {plan.features.map((feature, index) => (
                <div key={index} style={styles.featureItem}>
                  <span style={styles.checkIcon}>✓</span>
                  {feature}
                </div>
              ))}
            </div>

            {plan.notIncluded.length > 0 && (
              <div style={styles.notIncluded}>
                <h4 style={styles.notIncludedTitle}>Not Included:</h4>
                {plan.notIncluded.map((item, index) => (
                  <div key={index} style={styles.notIncludedItem}>
                    <span style={styles.xIcon}>✗</span>
                    {item}
                  </div>
                ))}
              </div>
            )}

            <button style={styles.ctaButton}>
              Get Started
            </button>
          </div>
        ))}
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
    margin: "0 auto 2rem",
    lineHeight: 1.6,
  },
  billingToggle: {
    display: "inline-flex",
    background: "#f8f9fa",
    borderRadius: "8px",
    padding: "4px",
    margin: "0 auto",
  },
  toggleBtn: {
    padding: "10px 20px",
    border: "none",
    background: "transparent",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  activeToggle: {
    background: "#3498db",
    color: "white",
  },
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  pricingCard: {
    background: "white",
    border: "2px solid #e9ecef",
    borderRadius: "12px",
    padding: "2rem",
    position: "relative",
    transition: "all 0.3s ease",
  },
  popularCard: {
    borderColor: "#3498db",
    transform: "scale(1.05)",
    boxShadow: "0 10px 30px rgba(52, 152, 219, 0.2)",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#3498db",
    color: "white",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  cardHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  planName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 0.5rem 0",
  },
  planDescription: {
    color: "#6c757d",
    margin: "0 0 1.5rem 0",
  },
  price: {
    margin: "1.5rem 0",
  },
  priceAmount: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#3498db",
  },
  pricePeriod: {
    color: "#6c757d",
    fontSize: "1rem",
  },
  savings: {
    color: "#27ae60",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  features: {
    marginBottom: "1.5rem",
  },
  featuresTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.5rem 0",
    color: "#495057",
  },
  checkIcon: {
    color: "#27ae60",
    fontWeight: "bold",
  },
  notIncluded: {
    marginBottom: "1.5rem",
    opacity: 0.7,
  },
  notIncludedTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#6c757d",
    margin: "0 0 1rem 0",
  },
  notIncludedItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.5rem 0",
    color: "#6c757d",
  },
  xIcon: {
    color: "#e74c3c",
  },
  ctaButton: {
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
};

export default PricingSection;