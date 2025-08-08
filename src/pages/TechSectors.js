import React from 'react';
import './TechSectors.css';
import { siteContent } from '../constants/content';

const TechSectors = () => {

  const { sectors } = siteContent;

  return (
    <div className="ts-page">
      <h1 className="ts-title">Our Tech Projects</h1>
      <div className="ts-container">
        {sectors.map((sector, index) => (
          <div key={index} className="ts-card">
            <div className="ts-card-content">
              <h3 className="ts-card-title">{sector.title}</h3>
              <p className="ts-card-description">{sector.description}</p>
            </div>
            <a
              href={sector.pdf}
              download={`${sector.title}_Project.pdf`}
              className="ts-button-link"
            >
              <button className="ts-button">Explore Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSectors;
