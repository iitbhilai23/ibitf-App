import React from 'react';
import { siteContent } from '../constants/content';
import '../styles/main.css'; // Your custom CSS

function AboutIBITF() {
  const { title, description, nodalCenter, vision } = siteContent.aboutPage;

  return (
    <div className="about-ibitf-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      {/* Nodal Center Section */}
      <section className="nodal-center">
        <h2>{nodalCenter.title}</h2>
        <p>{nodalCenter.description}</p>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <h2>{vision.title}</h2>
        <ul>
          {vision.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AboutIBITF;
