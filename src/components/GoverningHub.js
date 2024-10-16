import React from 'react';
import { siteContent } from '../constants/content';
import AnimatedCard from '../components/AnimatedCard';

const GoverningHub = () => {
  const { title, members } = siteContent.governing_team;

  return (
    <div className="team-page">
      <h1>{title}</h1>
      <div className="team-members">
        {members.map((member, index) => (
          <AnimatedCard key={index} name={member.name} image={member.image} role={member.role} workplace={member.workplace} department={member.department} />
        ))}
      </div>
    </div>
  );
};

export default GoverningHub;
