import React from 'react';
import './TribalAreaPlan.css';
import { siteContent } from '../constants/content';

const TribalAreaPlan = () => {
  const { title, description, features,subtitle } = siteContent.TribalAreaPlan;

  return (
    <section className="tribal-area-plan">
      <div className="tribal-area-content">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        
  <p className="description">{subtitle}</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TribalAreaPlan;
