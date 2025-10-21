import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you respond to emergency pest situations?",
      answer: "We offer 24/7 emergency services with same-day response in most cases. For critical situations like wasp nests or rodent infestations, we can typically be on-site within 2-4 hours."
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer: "Yes, we use eco-friendly, pet-safe treatments that are approved for use in homes with children and animals. Our technicians will provide specific safety instructions for each treatment."
    },
    {
      question: "How long do your pest control treatments last?",
      answer: "The duration depends on the treatment type and pest. Most residential treatments last 30-90 days, while commercial treatments are scheduled monthly or quarterly. We offer maintenance plans for ongoing protection."
    },
    {
      question: "Do you offer guarantees on your services?",
      answer: "Yes, all our services come with a satisfaction guarantee. If pests return within the guarantee period, we'll return and retreat at no additional cost. Guarantee periods vary by service type."
    },
    {
      question: "What areas do you service?",
      answer: "We service residential, commercial, and agricultural properties across South Africa, including Pretoria, Johannesburg, Cape Town, and surrounding areas. Contact us to confirm service availability in your specific location."
    },
    {
      question: "How do I prepare for a pest control treatment?",
      answer: "Preparation varies by treatment type. Generally, we recommend clearing countertops, moving furniture away from walls, and ensuring pets are secured. We'll provide detailed preparation instructions when you book your appointment."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Frequently Asked Questions</h2>
        <p style={styles.subtitle}>
          Find answers to common questions about our pest control services
        </p>
      </div>

      <div style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <button
              style={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span style={styles.icon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div style={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.contactPrompt}>
        <h3 style={styles.contactTitle}>Still have questions?</h3>
        <p style={styles.contactText}>
          Our team is here to help you with any questions about pest control.
        </p>
        <div style={styles.contactButtons}>
          <button style={styles.callButton}>
            📞 Call +27713055659
          </button>
          <button style={styles.emailButton}>
            ✉️ Email Us
          </button>
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
  faqContainer: {
    maxWidth: "800px",
    margin: "0 auto 3rem",
  },
  faqItem: {
    border: "1px solid #e9ecef",
    borderRadius: "8px",
    marginBottom: "1rem",
    overflow: "hidden",
  },
  faqQuestion: {
    width: "100%",
    background: "white",
    border: "none",
    padding: "1.5rem",
    textAlign: "left",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#2c3e50",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3498db",
  },
  faqAnswer: {
    padding: "0 1.5rem 1.5rem",
    color: "#6c757d",
    lineHeight: 1.6,
  },
  contactPrompt: {
    textAlign: "center",
    background: "linear-gradient(135deg, #f8fbfe 0%, #f0f7ff 100%)",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  contactTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 1rem 0",
  },
  contactText: {
    color: "#6c757d",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.6,
  },
  contactButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  callButton: {
    background: "#27ae60",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  emailButton: {
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

export default FAQSection;