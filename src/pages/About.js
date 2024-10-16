import React from 'react';
import { siteContent } from '../constants/content';
import Card from '../components/Card';
import "../styles/main.css";


const About = () => {
  const { heading, images } = siteContent.about;
           
  return (
    <div className="about-page">
      <h1>{heading}</h1>
      
      <div className="card-container">
        {images.map((item, index) => (
          <Card 
            key={index} 
            title={item.heading} 
            heading={item.heading} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default About;
