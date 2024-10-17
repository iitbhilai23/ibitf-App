
import React from 'react';
import { siteContent } from '../constants/content';

const Career = () => {
  const { title, description } = siteContent.career;

  return (
    <div className="career-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="career-opportunities">
        <h2>Open Positions</h2>
        <ul>
          <li>Software Engineer</li>
          <li>Data Scientist</li>
          <li>System Administrator</li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
    