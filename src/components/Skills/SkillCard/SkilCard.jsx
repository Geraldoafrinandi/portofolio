import React from 'react';
import './SkillCard.css'; 

const SkillCard = ({ icon, name, delay }) => {
  return (
    <div className="skill-card" style={{ animationDelay: `${delay}s` }}>
      <div className="skill-icon-container">
        {icon}
      </div>
      <h3 className="skill-name">{name}</h3>
    </div>
  );
};

export default SkillCard;