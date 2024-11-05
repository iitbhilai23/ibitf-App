import React from 'react';
import { siteContent } from '../constants/content';
import { useNavigate } from 'react-router-dom';
import './ThemeticArea.css';

const ThemeticArea = () => {
  const { ThemeticArea } = siteContent.home;
  const navigate = useNavigate();
  

  const handleReadMore = (path) => {
    navigate(path);

  }; 

  return (
    <>
      <div className="technologies-development">
        <h2 className="technologies-title">Themetic Area</h2>
        <section className="cards">
          {ThemeticArea.map((ThemeticArea, index) => (
            <div key={index} className="card">
              <img src={ThemeticArea.image} alt={ThemeticArea.title} className="card-image" />
              <h3 className="card-title">{ThemeticArea.title}</h3>
              <p className="card-description">{ThemeticArea.description}</p>
              <button
                className="card-button"
                onClick={() => handleReadMore(ThemeticArea.route)} 
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

export default ThemeticArea;





