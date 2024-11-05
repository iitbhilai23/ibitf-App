import React from 'react';
import { siteContent } from '../constants/content';
import { useNavigate } from 'react-router-dom';
import './TechnologiesDevelopment.css';

const TechnologiesDevelopment = () => {
  const { cards } = siteContent.home;
  const navigate = useNavigate();
  

  const handleReadMore = (path) => {
    navigate(path);

  }; 

  return (
    <>
      <div className="technologies-development">
        <h2 className="technologies-title">Thematic Areas</h2>
        <section className="cards">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button
                className="card-button"
                onClick={() => handleReadMore(card.route)} 
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





