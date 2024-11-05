import React from 'react';
import { siteContent } from '../constants/content';
import { useNavigate } from 'react-router-dom';
import './TechnologiesDevelopment.css';

const TechnologiesDevelopment = () => {
  const { technologiesDomain } = siteContent.home;
  const navigate = useNavigate();
  

  const handleReadMore = (path) => {
    navigate(path);

  }; 

  return (
    <>
      <div className="technologies-development">
        <h2 className="technologies-title">technologies Domain</h2>
        <section className="cards">
          {technologiesDomain.map((technologiesDomain, index) => (
            <div key={index} className="card">
              <img src={technologiesDomain.image} alt={technologiesDomain.title} className="card-image" />
              <h3 className="card-title">{technologiesDomain.title}</h3>
              <p className="card-description">{technologiesDomain.description}</p>
              <button
                className="card-button"
                onClick={() => handleReadMore(technologiesDomain.route)} 
              >
                Read More
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default TechnologiesDevelopment;





