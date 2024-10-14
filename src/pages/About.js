import React from 'react';
import { siteContent } from '../constants/content';

const About = () => {
  const { title, description } = siteContent.about;

  return (
    <div className="about-page">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default About;
