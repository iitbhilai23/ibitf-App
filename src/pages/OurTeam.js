import React from 'react';
import { siteContent } from '../constants/content';
import AnimatedCard from '../components/AnimatedCard';


const OurTeam = () => {
  const { title, members } = siteContent.team;
 

  return (
    <div className="team-page">
   
      <h1>{title}</h1>
      <div className="team-members">
        {members.map((member, index) => (
          <AnimatedCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;