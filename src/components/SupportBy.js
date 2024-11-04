import React from 'react';
import { siteContent } from '../constants/content';
import './SupportBy.css';

const SupportBy = () => {
  const { title, logos } = siteContent.SupportBy;

  return (
    <section className="support-by-section">
      <h2 className="support-by-title">{title}</h2>
      <div className="support-by-logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Supported logo ${index + 1}`} className="support-logo" />
        ))}
      </div>
    </section>
  );
};

export default SupportBy;
