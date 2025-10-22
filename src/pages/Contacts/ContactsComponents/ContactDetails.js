import React from "react";

const ContactDetails = () => {
  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our pest control experts",
      details: "+27713055659",
      action: "Call Now",
      link: "tel:+27713055659",
      color: "#3498db"
    },
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us your questions and concerns",
      details: "info@pestcontrol.co.za",
      action: "Send Email",
      link: "mailto:info@pestcontrol.co.za",
      color: "#27ae60"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our support team",
      details: "Available 24/7",
      action: "Start Chat",
      link: "#chat",
      color: "#9b59b6"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Stop by our main office",
      details: "123 Pest Control St, Johannesburg",
      action: "Get Directions",
      link: "#map",
      color: "#e74c3c"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 4:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <section className="contact-details">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Multiple Ways to Reach Us</h2>
          <p className="section-subtitle">
            Choose the most convenient way to get in touch with our pest control experts
          </p>
        </div>
        
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card">
              <div 
                className="card-icon"
                style={{ backgroundColor: `${method.color}20`, color: method.color }}
              >
                {method.icon}
              </div>
              <h3 className="card-title">{method.title}</h3>
              <p className="card-description">{method.description}</p>
              <div className="card-details">{method.details}</div>
              <a href={method.link} className="card-action">
                {method.action}
              </a>
            </div>
          ))}
        </div>
        
        <div className="business-info">
          <div className="hours-section">
            <h3 className="info-title">Business Hours</h3>
            <div className="hours-list">
              {businessHours.map((schedule, index) => (
                <div key={index} className="hour-item">
                  <span className="day">{schedule.day}</span>
                  <span className="hours">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-areas">
            <h3 className="info-title">Service Areas</h3>
            <div className="areas-grid">
              <div className="area-group">
                <h4>Gauteng</h4>
                <p>Johannesburg, Pretoria, Centurion, Sandton, Midrand</p>
              </div>
              <div className="area-group">
                <h4>Western Cape</h4>
                <p>Cape Town, Stellenbosch, Paarl, Somerset West</p>
              </div>
              <div className="area-group">
                <h4>KwaZulu-Natal</h4>
                <p>Durban, Pietermaritzburg, Ballito, Umhlanga</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-details {
          padding: 4rem 2rem;
          background: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .contact-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          border: 1px solid #f8f9fa;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
        }
        
        .card-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .card-description {
          color: #6c757d;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .card-details {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 1rem 0;
        }
        
        .card-action {
          display: inline-block;
          background: #3498db;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        
        .card-action:hover {
          background: #2980b9;
          transform: translateY(-2px);
        }
        
        .business-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }
        
        .info-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0 0 1.5rem 0;
        }
        
        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .hour-item {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }
        
        .day {
          font-weight: 600;
          color: #2c3e50;
        }
        
        .hours {
          color: #27ae60;
          font-weight: 600;
        }
        
        .areas-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .area-group h4 {
          margin: 0 0 0.5rem 0;
          color: #3498db;
          font-size: 1.1rem;
        }
        
        .area-group p {
          margin: 0;
          color: #6c757d;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .contact-details {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .contact-methods {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .business-info {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1.5rem;
          }
          
          .hour-item {
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .contact-card {
            padding: 1.5rem;
          }
          
          .card-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactDetails;