import React from "react";


const services = [
  {
    number: "01",
    title: "FILMING AND EDITING",
    description: "We provide professional filming and advanced editing services to bring your stories to life."
  },
  {
    number: "02",
    title: "ENGAGEMENT PHOTOGRAPHY",
    description: "Capture your special moments before the big day with our engagement photography sessions."
  },
  {
    number: "03",
    title: "COMMERCIAL PHOTOGRAPHY",
    description: "Boost your brand with high-quality commercial photography tailored for marketing needs."
  },
  {
    number: "04",
    title: "SOCIAL MEDIA PHOTOGRAPHY",
    description: "Content creation for social platforms with stylish and audience-targeted photography."
  },
  {
    number: "05",
    title: "EVENT PHOTOGRAPHY",
    description: "We cover events of all scales with candid, documentary-style photography."
  },
  {
    number: "06",
    title: "PERSONAL PHOTOGRAPHY",
    description: "Portraits, personal projects, and more — customized photo sessions just for you."
  },
];

const PhotographyServices = () => {
  return (
    <section className="photography-services">
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="number-box">{service.number}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotographyServices;
