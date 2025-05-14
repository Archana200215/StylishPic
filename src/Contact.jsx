import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactSection from './ContactSection'

function Contact() {
  return (
    <>
    <div><Navbar /></div>
 
      <div style={{ maxWidth: '100%', overflow: 'hidden' ,padding: '20px'}}>
        <iframe
          title="Tamil Nadu Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013002.2129693115!2d75.64651894496677!3d10.815331773177627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1745912749222!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    
    
    <div><ContactSection/></div>
    <div><Footer/></div>
    </>
    
  )
}

export default Contact