import React from 'react';
import { siteContent } from '../constants/content';

import Card from '../components/Card';


const Home = () => {
  const { heroTitle, heroSubtitle, cards } = siteContent.home;

  return (


    <div className="home">
  
      <section className="hero">
    
        <h1>{heroTitle}</h1>
        <p>{heroSubtitle}</p>
      </section>
      <section className="cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Home;
