import React from 'react';

const AnimatedCard = ({ name, image, department, workplace, Qualification, email, designation}) => {
  return (
    <div className="animated-card">
      <img src={image} alt={name} className="team-image" />
      <h3>{name}</h3>
      <p>{department}</p>
      <p>{workplace}</p>
      <p>{Qualification}</p>
      <p>{designation}</p>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};

export default AnimatedCard;
