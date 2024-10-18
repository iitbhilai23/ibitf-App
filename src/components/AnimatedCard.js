
import React from 'react';

const AnimatedCard = ({ name, designation, image }) => {
  return (
    <div className="animated-card">
      <img src={image} alt={name} className="team-image" />
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
};

export default AnimatedCard;
