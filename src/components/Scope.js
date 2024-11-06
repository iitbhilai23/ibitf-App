import React from "react";
import { siteContent } from "../constants/content";
import "./AboutSection.css";

const Scope = () => {
  return (
    <div className="scope-container">
      <h1 className="main-heading">Scope</h1>
      {siteContent.scope.map((section, index) => (
        <div className="section" key={index}>
          <h2 className="section-heading">{section.heading}</h2>
          <div className="section-content">
            {section.points.map((point, idx) => (
              <div key={idx} className="point-card">
                <div className="point-info">
                  <div className="icon-container">
                    {point.icon} 
                  </div>
                  <h3 className="sub-heading">{point.subHeading}</h3>
                  <p className="text">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scope;
