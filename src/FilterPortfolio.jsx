import React, { useState } from 'react';
//import './Portfolio.css'; // Make sure to create this CSS file

// Import images
import p10 from './assets/p10.jpg';
import p11 from './assets/p11.jpg';
import p12 from './assets/p12.jpg';
import p13 from './assets/p13.jpg';
import p14 from './assets/p14.jpg';
import p15 from './assets/p15.jpg';
import p16 from './assets/p16.jpg';
import p17 from './assets/p17.jpg';
import p18 from './assets/p18.jpeg';
import p19 from './assets/p19.jpeg';
import p20 from './assets/p20.jpeg';
import p21 from './assets/p21.jpeg';
import p22 from './assets/p22.jpg';
import p23 from './assets/p23.jpg';
import p24 from './assets/p24.jpg';



const categories = ['All', 'Fashion', 'Lifestyle', 'Natural', 'Wedding', 'Videos'];

const items = [
  { id: 1, category: 'Fashion', src: p10 },
  { id: 2, category: 'Fashion', src: p11 },
  { id: 3, category: 'Fashion', src: p12 },
  { id: 11, category: 'Lifestyle', src: p19 },
  { id: 12, category: 'Lifestyle', src: p20 },
  { id: 4, category: 'Natural', src: p13 },
  { id: 5, category: 'Natural', src: p14 },
  { id: 6, category: 'Natural', src: p15 },
  { id: 7, category: 'Wedding', src: p22 },
  { id: 8, category: 'Wedding', src: p23 },
  { id: 9, category: 'Wedding', src: p24 },
  { id: 10, category: 'Lifestyle', src: p18 },
  { id: 13, category: 'Lifestyle', src: p21 },
  { id: 14, category: 'Videos', src: p16 },
  { id: 15, category: 'Videos', src: p17 },
];

export default function filterPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <h2 className="title">OUR LATEST WORKS</h2>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item">
            <img src={item.src} alt={item.category} />
          </div>
        ))}
      </div>
    </div>
  );
}
