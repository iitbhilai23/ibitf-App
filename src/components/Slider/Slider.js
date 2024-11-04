import React from 'react';
import { siteContent } from '../../constants/content';
import './Slider.css';

const CollaborationSlider = () => {
    const { title, logos } = siteContent.CollaborationBy;

    return (
        <div className='main-slide-cnt'>
            <div className='slider-parent'>
                <h3 className='slider-heading'>Collaborations</h3>
                <div className='slider-collab'>
                    <div className='slide-track'>
                        {logos.concat(logos).map((logo, index) => (
                            <div className='img-parent' key={index}>
                                <img className='slide-img' src={logo} alt={`Logo ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationSlider;
