import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Lead Entomologist",
      experience: "15+ years",
      specialization: "Termite & Ant Control",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "PhD in Entomology with extensive research in integrated pest management.",
      certifications: ["Board Certified Entomologist", "IPM Specialist"]
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Operations Director",
      experience: "12+ years",
      specialization: "Commercial Pest Management",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Expert in large-scale pest management for commercial and industrial clients.",
      certifications: ["Commercial Pest Management", "Safety Compliance"]
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Eco-Specialist",
      experience: "8+ years",
      specialization: "Green Pest Control",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Passionate about environmentally friendly pest control solutions.",
      certifications: ["Eco-Friendly Certification", "Organic Treatment"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Emergency Response Lead",
      experience: "10+ years",
      specialization: "24/7 Emergency Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Specializes in rapid response and critical pest situations.",
      certifications: ["Emergency Response", "Advanced Treatment"]
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Our certified professionals bring decades of combined experience and specialized knowledge to every project
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="experience-badge">{member.experience}</div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <div className="member-specialization">{member.specialization}</div>
                
                <p className="member-bio">{member.bio}</p>
                
                <div className="certifications">
                  <h4>Certifications:</h4>
                  <div className="certification-tags">
                    {member.certifications.map((cert, index) => (
                      <span key={index} className="certification-tag">{cert}</span>
                    ))}
                  </div>
                </div>
                
                <div className="member-contact">
                  <button className="contact-btn">Contact {member.name.split(' ')[0]}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-stats">
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat">
            <div className="stat-number">250+</div>
            <div className="stat-label">Years Combined Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">100+</div>
            <div className="stat-label">Professional Certifications</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Available Experts</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-section {
          padding: 5rem 2rem;
          background: #f8f9fa;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 1rem 0;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .team-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .member-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        
        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .experience-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #3498db;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .member-info {
          padding: 2rem;
        }
        
        .member-name {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
        }
        
        .member-role {
          color: #3498db;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .member-specialization {
          color: #6c757d;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .member-bio {
          color: #495057;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }
        
        .certifications h4 {
          font-size: 1rem;
          color: #2c3e50;
          margin: 0 0 0.75rem 0;
        }
        
        .certification-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .certification-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .contact-btn {
          width: 100%;
          background: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .contact-btn:hover {
          background: #2980b9;
        }
        
        .team-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        
        .stat {
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #3498db;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #6c757d;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .member-info {
            padding: 1.5rem;
          }
          
          .team-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .stat {
            padding: 1.5rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .team-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;