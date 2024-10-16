import React from 'react';
import '../styles/main.css'

const Card = ({ title, heading, image,description }) => {
  return (
    <div >
    <div className="card">
      <img src={image} width={40} alt={title} className="card-image" />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
    </div>
  );
};

export default Card;

