
import React, { useState } from 'react';

export const OnboardingCard = ({ name,setSelectedSkills,selectedSkills}) => {
  

  const isSelected = selectedSkills.includes(name); // check if name is in the array

  const addSkill = () => {
    if (!selectedSkills.includes(name)) {
      setSelectedSkills((prevState) => [...prevState, name]);
    }
  };
  

  return (
    <div
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={addSkill}
    >
      <span className="material-icons">code</span>
      <span style={{ textTransform: 'capitalize' }}>{name.replace('-', ' ')}</span>
    </div>
  );
};
