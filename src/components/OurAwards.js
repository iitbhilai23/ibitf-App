import React from 'react';
import { siteContent } from '../constants/content';
import './OurAwards.css';

const OurAwards = () => {
    const { awards } = siteContent; // Assuming awards data is inside siteContent

    return (
        <div className='award-outer-container'>
        <section className="our-awards">
            <h2 className="awards-title">Our Awards</h2>
            <div className="awards-container">
                {awards.map((award, index) => (
                    <div key={index} className="award-card">
                        <img src={award.image} alt={award.title} className="award-image" />
                        <div className="award-content">
                            <h3 className="award-title">{award.title}</h3>
                            <p className="award-description">{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default OurAwards;
