import React, { useRef, useEffect } from 'react';
import { siteContent } from '../../constants/content'; // Adjust path if necessary
import './CollaborationSlider.css';

const CollaborationSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount -= 0.5; // Adjust this value to control scroll speed
      if (slider) {
        if (Math.abs(scrollAmount) >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(scroll);
    };
  }, []);

  return (
    <div className='collaboration-outer-container'>
    <div className="slider-wrapper">
      <h2 className="slider-title">Our Collaborations</h2>
      <div className="slider-container">
        <div className="slider-track" ref={sliderRef}>
          {siteContent.CollaborationBy.logos.map((logo, index) => (
            <div className="slider-item" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
          {siteContent.CollaborationBy.logos.map((logo, index) => (
            <div className="slider-item" key={index + siteContent.CollaborationBy.logos.length}>
              <img src={logo} alt={`logo-duplicate-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CollaborationSlider;
