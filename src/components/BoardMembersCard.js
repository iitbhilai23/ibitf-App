import React from 'react';
import { siteContent } from '../constants/content';
import AnimatedCard from '../components/AnimatedCard';

const BoardMembersCard = () => {
  const { title, members } = siteContent.board_team;
 

  return (
    <div className="team-page">
   
      <h1>{title}</h1>
      <div className="team-members">
        {members.map((member, index) => (
          <AnimatedCard key={index} {...member} Qualification={member.Qualification}/>
        ))}
      </div>
    </div>
  );
};

export default BoardMembersCard;
