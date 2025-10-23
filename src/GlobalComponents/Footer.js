// src/components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define the correct paths that match your App.js routes
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contacts' }, // Note: your route is /contacts (plural)
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' }
  ];

  const services = ['Cockroach Control', 'Rodent Control', 'Ant Elimination', 'Bed Bug Treatment', 'Termite Control', 'Mosquito Control'];

  const styles = {
    footer: {
      backgroundColor: '#1a2a3a',
      background: 'linear-gradient(135deg, #1a2a3a 0%, #2c3e50 50%, #34495e 100%)',
      color: 'white',
      padding: '50px 5% 30px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 80%, rgba(52, 152, 219, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(52, 152, 219, 0.05) 0%, transparent 50%)`,
      pointerEvents: 'none'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      position: 'relative',
      zIndex: 2
    },
    section: {
      marginBottom: '25px',
    },
    heading: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#3498db',
      position: 'relative',
      display: 'inline-block'
    },
    headingUnderline: {
      position: 'absolute',
      bottom: '-5px',
      left: '0',
      width: '40px',
      height: '3px',
      background: 'linear-gradient(90deg, #3498db, #2980b9)',
      borderRadius: '2px'
    },
    description: {
      color: '#ecf0f1',
      lineHeight: '1.7',
      marginBottom: '20px',
      fontSize: '0.95rem',
      opacity: 0.9
    },
    linkList: {
      listStyle: 'none',
      padding: '0',
    },
    linkItem: {
      marginBottom: '12px',
      position: 'relative',
      paddingLeft: '0',
      transition: 'all 0.3s ease'
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      opacity: 0.9
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '18px',
      gap: '12px',
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    },
    contactText: {
      color: '#ecf0f1',
      lineHeight: '1.5',
      fontSize: '0.95rem',
      opacity: 0.9
    },
    serviceBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15), rgba(41, 128, 185, 0.1))',
      padding: '8px 16px',
      borderRadius: '20px',
      marginBottom: '10px',
      fontSize: '0.85rem',
      color: '#3498db',
      border: '1px solid rgba(52, 152, 219, 0.2)',
      backdropFilter: 'blur(10px)'
    },
    bottom: {
      textAlign: 'center',
      paddingTop: '30px',
      marginTop: '40px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      color: '#bdc3c7',
      fontSize: '0.9rem',
      position: 'relative',
      zIndex: 2
    },
    ctaSection: {
      background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.05))',
      padding: '25px',
      borderRadius: '15px',
      border: '1px solid rgba(52, 152, 219, 0.2)',
      marginTop: '20px',
      backdropFilter: 'blur(10px)'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #3498db, #2980b9)',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '15px',
      fontSize: '0.9rem',
      boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Background Pattern */}
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.section}>
          <h3 style={styles.heading}>
            MASHAVHA PEST CONTROL
            <span style={styles.headingUnderline}></span>
          </h3>
          <p style={styles.description}>
            Professional pest management solutions for homes and businesses. 
            Eco-friendly treatments with guaranteed results and 24/7 emergency service.
          </p>
          
          <div style={styles.serviceBadge}>
            <FaShieldAlt /> Licensed & Certified
          </div>
          <div style={styles.serviceBadge}>
            ⚡ 24/7 Emergency Service
          </div>

          {/* Social media buttons have been removed as requested */}
        </div>

        {/* Our Services */}
        <div style={styles.section}>
          <h3 style={styles.heading}>
            Our Services
            <span style={styles.headingUnderline}></span>
          </h3>
          <ul style={styles.linkList}>
            {services.map((service, index) => (
              <li key={index} style={styles.linkItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '10px';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                <a href="/services" style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3498db';
                    e.target.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ecf0f1';
                    e.target.style.opacity = '0.9';
                  }}>
                  <FaArrowRight style={{fontSize: '0.8rem', opacity: 0.7}} />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>
            Quick Links
            <span style={styles.headingUnderline}></span>
          </h3>
          <ul style={styles.linkList}>
            {quickLinks.map((link, index) => (
              <li key={index} style={styles.linkItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '10px';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                <a href={link.path} style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3498db';
                    e.target.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ecf0f1';
                    e.target.style.opacity = '0.9';
                  }}>
                  <FaArrowRight style={{fontSize: '0.8rem', opacity: 0.7}} />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & CTA */}
        <div style={styles.section}>
          <h3 style={styles.heading}>
            Contact Us
            <span style={styles.headingUnderline}></span>
          </h3>
          <div style={styles.contactItem}>
            <FaPhone style={{ color: '#3498db', fontSize: '1.1rem', flexShrink: 0 }} />
            <span style={styles.contactText}>068 747 9018</span>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={{ color: '#3498db', fontSize: '1.1rem', flexShrink: 0 }} />
            <a href="mailto:info@mashavhapestcontrol.co.za" style={{...styles.contactText, textDecoration: 'none'}}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#ecf0f1'}>
              info@mashavhapestcontrol.co.za
            </a>
          </div>

          {/* CTA Section */}
          <div style={styles.ctaSection}>
            <h4 style={{color: '#3498db', margin: '0 0 10px 0', fontSize: '1rem'}}>
              Need Emergency Pest Control?
            </h4>
            <p style={{...styles.contactText, margin: 0, fontSize: '0.9rem'}}>
              We're available 24/7 for urgent pest situations
            </p>
            <button style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
              }}
              onClick={() => window.location.href = 'tel:0687479018'}>
              Call Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <div>
          &copy; {currentYear} MASHAVHA PEST CONTROL. All rights reserved. | Professional Pest Management Services
        </div>
      </div>
    </footer>
  );
};

export default Footer;