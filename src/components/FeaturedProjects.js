// FeaturedProjects.js

import React from 'react';
import { siteContent } from '../constants/content'; // Adjust the path based on your project structure
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    const { featuredProjects } = siteContent;

    return (
        <div className="featured-projects">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="projects-container">
                {featuredProjects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;
