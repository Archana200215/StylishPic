import React from 'react';


const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>GET IN TOUCH</h2>
          <p>Contact with StylishPic ,Create a beautiful memories with us</p>
          
          <div className="contact-info">
            <div className="info-box">
              <div className="icon green">&#x1F4CD;</div>
              <div>
                <h4>ADDRESS</h4>
                <p>Tamilnadu,India</p>
              </div>
            </div>
            <div className="info-box">
              <div className="icon green">&#x1F4F1;</div>
              <div>
                <h4>PHONE</h4>
                <p>6789457898</p>
              </div>
            </div>
            <div className="info-box">
              <div className="icon green">&#x2709;&#xFE0F;</div>
              <div>
                <h4>EMAIL</h4>
                <p>stylishpic.photography@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h2>WORK WITH ME!</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Website" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
