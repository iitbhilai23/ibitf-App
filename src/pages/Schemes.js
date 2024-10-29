
import React from 'react';
import { siteContent } from '../constants/content';
import '../styles/main.css';

const Schemes = () => {
  const { cardDetail } = siteContent;

  return (
    <div className="card-stack1">
      {cardDetail.map((card, index) => (
        <div className="card" key={index}>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
          {card.objectives.length > 0 && (
            <ul className="card-objectives">
              {card.objectives.map((objective, i) => (
                <li key={i} className="objective-item">{objective}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Schemes;
