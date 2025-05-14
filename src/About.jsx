import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutSection from './AboutSection'
import OurTeam from './OurTeam'
import Testimonials from './Testimonials'

function About() {
  return (
    <>
    <div><Navbar /></div>
    <div><AboutSection/></div>
     <div><OurTeam /></div>
     <div><Testimonials /></div>
    <div><Footer/></div>
    </>
  )
}

export default About