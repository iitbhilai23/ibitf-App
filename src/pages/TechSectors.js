import React from 'react';
import './TechSectors.css';
import { siteContent } from '../constants/content';

const TechSectors = () => {

const {sectors} = siteContent;


//       description: 'Innovations in the agricultural sector.',
//       pdf: Agritech,
//     },
//     {
//       title: 'Fintech',
//       description: 'Technology driving financial services.',
//       pdf: Fintech,
//     },
//     {
//       title: 'HealthTech',
//       description: 'Advancements in healthcare technology.',
//       pdf: HealthTech,
//     },
//   ];
  return (
    <div className="tech-sectors-page">
      <h1 className="page-title">Our Tech Projects</h1>
      <div className="tech-sectors-container">
        {sectors.map((sector, index) => (
          <div key={index} className="tech-card">
            <div className="card-content">
              <h3 className="card-title">{sector.title}</h3>
              <p className="card-description">{sector.description}</p>
            </div>
            <a
              href={sector.pdf}
              download={`${sector.title}_Project.pdf`}
              className="card-button-link"
            >
              <button className="card-button">Explore Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSectors;
