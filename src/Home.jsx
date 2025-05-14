//import React, { useState } from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import CategoriesSlider from './CategoriesSlider'
import Footer from './Footer';
import RecentPic from './RecentPic';



function Home() {
  const handleCategorySelect = (category) => {
    console.log('Selected category:', category);
    // Add your category selection logic here
  };
  return (
    <>
    <div><Navbar /></div>
    <div><Slider /></div>
    <div className="Home">
      <h2>Categories</h2>
      <CategoriesSlider onCategorySelect={handleCategorySelect} />
    </div>
    
    <div><RecentPic /></div>
    <div><Footer/></div>
    

    </>
  )
}

export default Home