import React from 'react';
import { siteContent } from '../constants/content';

import Card from '../components/Card';


const Home = () => {
  const { heroTitle, heroSubtitle, heroSubtitle1, cards,heroTitle1,heroSubtitle2,heroSubtitle3 } = siteContent.home;

  return (


    <div className="home">
  
      <section className="hero">
    
        <h1>{heroTitle}</h1>
        <p>{heroSubtitle}</p>
        <p>{heroSubtitle1}</p>

        <br/>
        <h1>{heroTitle1}</h1>
        <p>{heroSubtitle2}</p>
        <p>{heroSubtitle3}</p>


        
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
