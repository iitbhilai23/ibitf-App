import React, { useEffect, useState } from 'react';
import { siteContent } from '../constants/content';
import './FeaturedProjects.css';
import { Link } from 'react-router-dom';

const CARD_WIDTH = 200; // Width of each card
const VISIBLE_CARDS = 4; // Number of cards visible at once

const FeaturedProjects = () => {
    const [index, setIndex] = useState(VISIBLE_CARDS);
    const { featuredProjects } = siteContent;

    const clonedProjects = [
        ...featuredProjects.slice(-VISIBLE_CARDS),
        ...featuredProjects,
        ...featuredProjects.slice(0, VISIBLE_CARDS),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    const handleNext = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (index === clonedProjects.length - VISIBLE_CARDS) {
            setTimeout(() => {
                setIndex(VISIBLE_CARDS);
            }, 500);
        }
        if (index === 0) {
            setTimeout(() => {
                setIndex(clonedProjects.length - VISIBLE_CARDS * 2);
            }, 500);
        }
    }, [index, clonedProjects.length]);

    return (
        <div className="featured-projects">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="projects-container">
                <button className="nav-button prev" onClick={handlePrev}>&lt;</button>
                <div
                    className="carousel"
                    style={{
                        transform: `translateX(${-index * CARD_WIDTH}px)`,
                        transition: index === VISIBLE_CARDS || index >= clonedProjects.length - VISIBLE_CARDS ? "none" : "transform 0.5s ease-in-out",
                    }}
                >
                    {clonedProjects.map((project, i) => (
                        <div key={i} className="project-card">
                            <div className="img-parent-features">
                                <img className="project-image" src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">
                                {project.description.length > 80 ? `${project.description.slice(0, 80)}...` : project.description}
                                {/* {project.description} */}
                                </p>
                                <Link to={project.route} className="read-more-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="nav-button next" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default FeaturedProjects;
