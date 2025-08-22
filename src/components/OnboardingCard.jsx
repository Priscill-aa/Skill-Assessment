import React from 'react';
import { Link } from 'react-router-dom';

export const OnboardingCard = ({ name, id, setSelectedSkills, selectedSkills }) => {
  const isSelected = selectedSkills.includes(name);

  const addSkill = () => {
    if (!selectedSkills.includes(name)) {
      setSelectedSkills((prevState) => [...prevState, name]);
    }
  };

  
  const encodedName = encodeURIComponent(name);

  return (
    <Link to={`/assessment/${id}/${encodedName}`} className="skill-link">
      <div
        className={`skill-card ${isSelected ? 'selected' : ''}`}
        onClick={addSkill}
      >
        <span className="material-icons">code</span>
        <span className="skill-name">{name.replace('-', ' ')}</span>
      </div>
    </Link>
  );
};

export default OnboardingCard;
