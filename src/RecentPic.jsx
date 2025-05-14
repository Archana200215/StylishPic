import React from 'react';
import p33 from './assets/p33.jpg';
import p34 from './assets/p34.jpg';
import p35 from './assets/p35.jpg';
import p36 from './assets/p36.jpg';


const teamMembers = [
  {
    name: "Sea View",
    image: p34,
  },
  {
    name: "Modern Shoot",
    image: p33,
  },
  {
    name: "Forest Click",
    image: p35,
  },
  {
    name: "Fashion Ads",
    image: p36,
  },
];

const RecentPic = () => {
  return (
    <section className="our-team-section">
      <div className="container">
        <h2 className="section-title">RECENT PHOTOGRAPHY</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="rounded-circle" />
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

export default RecentPic;
