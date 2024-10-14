
import React from 'react';
import { siteContent } from '../constants/content';

const Services = () => {
  const { title, description } = siteContent.services;

  return (
    <div className="services-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="service-list">
        <div className="service-item">Cloud Solutions</div>
        <div className="service-item">AI-Driven Analytics</div>
        <div className="service-item">Cybersecurity</div>
      </div>
    </div>
  );
};

export default Services;
