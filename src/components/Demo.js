import React from 'react';
import { siteContent } from '../constants/content'; // Adjust path if necessary
import './Demo.css'; // Import the CSS file

const Demo = () => {
  return (
    <div className="slide-container1">
      <div className="slide-track">
        {siteContent.CollaborationBy.logos.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
        {/* Duplicate logos for smooth infinite scroll */}
        {siteContent.CollaborationBy.logos.map((logo, index) => (
          <div className="slide" key={index + siteContent.CollaborationBy.logos.length}>
            <img src={logo} alt={`logo-duplicate-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
