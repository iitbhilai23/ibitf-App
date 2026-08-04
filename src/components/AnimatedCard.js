
import React from 'react';

const AnimatedCard = ({ name, designation, image }) => {
  return (
    <article className="animated-card">
      <div className="team-image-frame">
        <img src={image} alt={`Portrait of ${name}`} className="team-image" />
      </div>
      <h3>{name}</h3>
      <p>{designation}</p>
    </article>
  );
};

export default AnimatedCard;
