import React from 'react';
import './FellowshipProject.css'; 
import { siteContent } from "../constants/content";

const FellowshipProject = () => {

  const { projectData } = siteContent;

  return (
    <section className="fs-section">
      <div className="fs-container">
        <h2 className="fs-title">Fellowship Programs</h2>
        <div className="fs-card-grid">
          {projectData.map((project, index) => (
            <div className="fs-project-card" key={index}>
              <div className="fs-card-header">
                <span className="fs-card-icon">{project.icon}</span>
                <h3 className="fs-card-title">{project.title}</h3>
              </div>
              <p className="fs-card-description">{project.description}</p>
              <a 
                href={project.pdf} 
                className="fs-card-button" 
                download={`${project.title}_Fellowship.pdf`} 
              >
                Download Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FellowshipProject;
