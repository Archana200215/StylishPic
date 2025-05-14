import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FilterPortfolio from './FilterPortfolio'

function Gallery() {
  return (
    <>
    <div><Navbar /></div>
    <div><FilterPortfolio /> </div> 
    <div><Footer/></div>
    </>
    
  )
}

export default Gallery