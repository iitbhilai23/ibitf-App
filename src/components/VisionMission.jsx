import React from "react";
import { siteContent } from "../constants/content";
import "./AboutSection.css";

const VisionMission = () => {
  return (
    <div className="vm-container">
      <div className="vm-card">
        <h2 className="vm-heading left">Vision</h2>
        {siteContent.vision.map((item, index) => (
          <p key={`vision-${index}`} className="vm-text">
            {item.text}
          </p>
        ))} 
      </div>
      <div className="vm-card">
        <h2 className="vm-heading right">Mission</h2>
        {siteContent.mission.map((item, index) => (
          <p key={`mission-${index}`} className="vm-text">
            {item.text}
          </p>
        ))} 
      </div>
    </div>
  );
};

export default VisionMission;
