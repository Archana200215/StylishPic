import React from "react";
import p39 from './assets/p39.jpg';
import p40 from './assets/p40.jpg';
import p41 from './assets/p41.jpg';

const  services  = [
  {
    title: "SHOOTING",
    description:
      "From portraits to events, we freeze time in breathtaking frames.",
    image: p39,
  },
  {
    title: "VIDEOS",
    description:
      "Tell your story with high-quality, cinematic videos.",
    image: p41,
  },
  {
    title: "EDITING",
    description:
      "Polished post-production for photos & videos that stand out.",
    image: p40,
  },
];

const Layout = () => {
  return (
    <section className="services">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Layout;
