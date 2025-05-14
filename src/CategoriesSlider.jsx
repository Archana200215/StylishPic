import React, { useState, useEffect } from 'react';

import p1 from '/src/assets/p1.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p3.jpg';
import p4 from './assets/p4.jpg';
import p5 from './assets/p5.jpg';

 

const CategoriesSlider = ({ 
  categories = [
    { id: 1, name: 'Sea Fish', image: p1 },
    { id: 2, name: 'Landscape', image: p2 },
    { id: 3, name: 'Beach', image: p3 },
    { id: 4, name: 'Street', image: p4 },
    { id: 5, name: 'Sunshine', image: p5 }
  ],
  slidesToShow = 3,
  onCategorySelect 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Calculate visible categories based on currentIndex
  useEffect(() => {
    const endIndex = Math.min(currentIndex + slidesToShow, categories.length);
    const startIndex = Math.max(endIndex - slidesToShow, 0);
    setVisibleCategories(categories.slice(startIndex, endIndex));
  }, [currentIndex, categories, slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, categories.length - slidesToShow));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="slider-container">
      <button 
        className="slider-arrow left-arrow" 
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      <div className="slider-track">
        {visibleCategories.map((category) => (
          <div 
            key={category.id} 
            className="slide_d"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="image-container">
              <img src={category.image} alt={category.name} />
              <div className="overlay"></div>
            </div>
            <h3 className="category-title">{category.name}</h3>
          </div>
        ))}
      </div>

      <button 
        className="slider-arrow right-arrow" 
        onClick={nextSlide}
        disabled={currentIndex >= categories.length - slidesToShow}
      >
        &gt;
      </button>

      <div className="dots-container">
        {categories.slice(0, categories.length - slidesToShow + 1).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSlider;