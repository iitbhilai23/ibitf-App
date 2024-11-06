import React from 'react';
import './AboutSection.css';
import { siteContent } from '../constants/content';

const VisionCard = () => {
  return (
    <div className="vision-mission-container">

      <div className="card-section">
        {siteContent.visionMissionData.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionCard;
