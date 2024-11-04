// AboutSection.js
import React from 'react';
import './AboutSection.css';
import { siteContent } from '../constants/content';
import { useNavigate } from 'react-router-dom';


const AboutSection = () => {
  const { title, highlight, description, buttonText, image } = siteContent.AboutSection;
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/about-ibitf'); // Navigate to the About page
  };

  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-title">
          <span className="highlight">{highlight}</span> {title}
        </h2>
        <p className="about-description">
          {description}
        </p>
        <button className="about-button" onClick={handleReadMoreClick}>{buttonText}</button>
      </div>
      <div className="about-image">
        <img src={image} alt="Company" />
      </div>
    </div>
  );
};

export default AboutSection;
