import React from 'react';
import { siteContent } from "../constants/content";
import './AboutSection.css';

const Journey = () => {
  return (
    <div className="main-journey-card">
      <h2 className="journey-title">{siteContent.journey[0].heading}</h2>
      <p className="journey-main-text">{siteContent.journey[0].text}</p>
      <div className="small-cards-container">
        {siteContent.journey.slice(1).map((item, index) => (
          <div key={index} className="small-journey-card">
            <p className="journey-description">{item.description}</p>
            {index < siteContent.journey.length - 2 && (
              <div className="arrow"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
