// FeaturedProjects.js

import React, { useEffect, useState } from 'react';
import { siteContent } from '../constants/content';
import './FeaturedProjects.css';
import { motion, AnimatePresence } from 'framer-motion'

const FeaturedProjects = () => {
    const [index, setIndex] = useState(0);
    const { featuredProjects } = siteContent;


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 2) % featuredProjects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [featuredProjects.length]);

    const handleNext = () => setIndex((prev) => (prev + 2) % featuredProjects.length);
    const handlePrev = () => setIndex((prev) => (prev - 2 + featuredProjects.length) % featuredProjects.length);

    return (
        <div className="featured-projects">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="projects-container">
                <div className="carousel-container">
                    {/* <button onClick={handlePrev}>Previous</button> */}
                    <div className="carousel">
                        <AnimatePresence initial={true}>
                            <motion.div
                                key={index}
                                className="project-cards"
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                // exit={{ opacity: 0, x: -300 }}     // Exit to the left
                                transition={{ duration: 1 }}
                                style={{ display: 'flex', gap: '24px' }}
                            >
                                {featuredProjects.slice(index, index + 2).map((project, idx) => (
                                    <div className="project-card" key={idx}>
                                        <div className='img-parent-features'>
                                            <img  className="project-image" src={project.image} alt={project.title} />
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* <button onClick={handleNext}>Next</button> */}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;
