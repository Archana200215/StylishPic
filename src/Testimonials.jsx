import React, { useEffect, useState } from 'react';
//import data from "./public/data.json"; 


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  // http://localhost:3000/testimonials
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <section className="testimonials">
      <h2>WHAT CLIENT SAY?</h2>
      <p className="description">
      Our clients' satisfaction is our greatest reward. From weddings and portraits 
      to events and editorial shoots, here's what some of our happy clients have to 
      say about their experience with us. Their stories reflect the passion and 
      dedication we bring to every frame. 
      </p>
      <div className="testimonial-grid">
        {Array.isArray(testimonials) && testimonials.map(({ id, name, username, image, text }) => (
          <div className="testimonial-card" key={id}>
            {/* <div className="quote">“</div>  <img src={`public/data.json${image}`} */}
           <img src={image} alt={name} className="profile-pic" />
            <h4>{name}</h4>
            <p className="username">{username}</p>
            <p className="text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
