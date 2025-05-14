import React, { useState, useEffect } from 'react';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: image1,
      title: 'Capture the moment',
      description: 'Preserving memories, one frame at a time'
    },
    {
      id: 2,
      image: image2,
      title: 'Explore the world',
      description: 'From mountains to oceans, we capture it all'
    },
    {
      id: 3,
      image: image3,
      title: 'Tell a story',
      description: 'Through the lens of our camera'
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;