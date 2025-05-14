import React, { useRef, useState } from 'react';
import p111 from '/src/assets/p111.mp4'; 

const AboutSection = () => {
    
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // Video auto-plays at start
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
    
  return (
    <div className="about-container">
      {/* Left Side */}

<div className="about-left">
<video
          ref={videoRef}
          src={p111}
          className="about-image"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="play-button" onClick={togglePlay}>
          {isPlaying ? '⏸️' : '▶️'}
        </div>
  
</div>

      {/* Right Side */}
      <div className="about-right">
        <div className="feature">  
          <div className="icon-box">
          
            <i class="bi bi-camera"></i>
          </div>
          <div className="feature-text">
            <h3>PROFESSIONALISM</h3>
            <p>We deliver stunning, high-quality photos with meticulous attention to detail. Every project is handled with passion, creativity, and a commitment to excellence.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon-box">
            <i class="bi bi-file-earmark-text"></i>
          </div>
          <div className="feature-text">
            <h3>INDIVIDUAL APPROACH</h3>
            <p>Every client is unique. We listen carefully to your vision and tailor each session to reflect your style, story, and personality.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon-box">
            📅
          </div>
          <div className="feature-text">
            <h3>FLEXIBLE SCHEDULE</h3>
            <p>We adapt to your busy lifestyle, offering flexible booking options for both studio sessions and outdoor shoots, including weekends and evenings.

</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon-box">
            🏆
          </div>
          <div className="feature-text">
            <h3>EXPERIENCE</h3>
            <p>With 2years of experience across weddings, portraits, commercial shoots, and events, we bring expertise, technical skills, and an artistic eye to every project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
