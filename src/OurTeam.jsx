import React from 'react';
import p28 from './assets/p28.jpg';
import p29 from './assets/p29.jpg';
import p30 from './assets/p30.jpg';
import p31 from './assets/p31.jpg';


const teamMembers = [
  {
    name: "ALAN WALKER",
    role: "Photographer",
    image: p28,
  },
  {
    name: "AVA MAX",
    role: "Director",
    image: p29,
  },
  {
    name: "ANNE-MARIE",
    role: "Manager",
    image: p31,
  },
  {
    name: "BILLIE EILISH",
    role: "Assistant",
    image: p30,
  },
];

const OurTeam = () => {
  return (
    <section className="our-team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
        We’re more than just photographers—we’re storytellers, light-chasers, and memory-makers. With a shared love for authentic moments and creative vision, our team brings together diverse talents to craft images that feel as vibrant and unique as the people we photograph.
          
        </p>

        <button className="appointment-button">Appointment</button>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
