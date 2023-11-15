import React, { useState } from 'react';
import './App.css';

//
function AllergyList({allergies, emitAddAllergyIntent, emitDeleteAllergyIntent}) {
  const [currentAllergy, setCurrentAllergy] = useState('');

  const handleInputChange = (e) => {
    setCurrentAllergy(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && currentAllergy.trim() !== '') {
      emitAddAllergyIntent(currentAllergy);
      setCurrentAllergy(''); // Clear the input field after adding an allergy
    }
  };

  // called when user deletes allergy
  // param - allergy to delete
  const deleteAllergy = (allergy) => {
    emitDeleteAllergyIntent(allergy);
  }

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Add Allergy"
        value={currentAllergy}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <h2>List of Allergies</h2>
      <ul>
        {allergies ? allergies.map(allergy => (
          <div class="box"><p key={allergy}>{allergy + " "}<a href onClick={(env) => deleteAllergy(allergy)}>🞭</a></p></div>
        )) : ""}
      </ul>
    </div>
  );

  
}

export default AllergyList;
