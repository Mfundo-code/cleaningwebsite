import React from "react";

const ComparisonTable = () => {
  const features = [
    { name: "Initial Inspection", basic: "✓", professional: "✓", enterprise: "✓" },
    { name: "Quarterly Treatments", basic: "✗", professional: "✓", enterprise: "✓" },
    { name: "Monthly Treatments", basic: "✗", professional: "✗", enterprise: "✓" },
    { name: "Emergency Service", basic: "✗", professional: "✗", enterprise: "✓" },
    { name: "Termite Protection", basic: "✗", professional: "Basic", enterprise: "Full" },
    { name: "Rodent Control", basic: "✗", professional: "✓", enterprise: "✓" },
    { name: "Guarantee Period", basic: "30 days", professional: "90 days", enterprise: "365 days" },
    { name: "Same-day Response", basic: "✗", professional: "✗", enterprise: "✓" },
    { name: "Commercial Certification", basic: "✗", professional: "✗", enterprise: "✓" },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Plan Comparison</h2>
        <p style={styles.subtitle}>
          See how our service plans stack up against each other
        </p>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.featureHeader}>Features</th>
              <th style={styles.planHeader}>
                <div style={styles.planName}>Basic</div>
                <div style={styles.planPrice}>$89/mo</div>
              </th>
              <th style={styles.planHeader}>
                <div style={styles.planName}>Professional</div>
                <div style={styles.planPrice}>$149/mo</div>
                <div style={styles.popularTag}>Popular</div>
              </th>
              <th style={styles.planHeader}>
                <div style={styles.planName}>Enterprise</div>
                <div style={styles.planPrice}>$299/mo</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.featureCell}>{feature.name}</td>
                <td style={styles.planCell}>{feature.basic}</td>
                <td style={styles.planCell}>{feature.professional}</td>
                <td style={styles.planCell}>{feature.enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.ctaSection}>
        <h3 style={styles.ctaTitle}>Still not sure which plan is right for you?</h3>
        <p style={styles.ctaText}>
          Schedule a free consultation with our pest control experts
        </p>
        <button style={styles.ctaButton}>
          Get Free Consultation
        </button>
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
  tableContainer: {
    overflowX: "auto",
    marginBottom: "3rem",
  },
  table: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    borderCollapse: "collapse",
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  featureHeader: {
    background: "#2c3e50",
    color: "white",
    padding: "1.5rem",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "1rem",
  },
  planHeader: {
    background: "#3498db",
    color: "white",
    padding: "1.5rem",
    textAlign: "center",
    position: "relative",
  },
  planName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  planPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  popularTag: {
    position: "absolute",
    top: "-10px",
    right: "10px",
    background: "#e74c3c",
    color: "white",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  evenRow: {
    background: "#f8f9fa",
  },
  oddRow: {
    background: "white",
  },
  featureCell: {
    padding: "1rem 1.5rem",
    fontWeight: "600",
    color: "#2c3e50",
    borderBottom: "1px solid #e9ecef",
  },
  planCell: {
    padding: "1rem 1.5rem",
    textAlign: "center",
    borderBottom: "1px solid #e9ecef",
    color: "#495057",
    fontWeight: "600",
  },
  ctaSection: {
    textAlign: "center",
    background: "white",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  ctaTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },
  ctaText: {
    color: "#6c757d",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.6,
  },
  ctaButton: {
    background: "#27ae60",
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default ComparisonTable;