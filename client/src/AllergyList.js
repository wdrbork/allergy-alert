import React, { useState } from 'react';

function AllergyList() {
  const [allergies, setAllergies] = useState([]);
  const [currentAllergy, setCurrentAllergy] = useState('');

  const handleInputChange = (e) => {
    setCurrentAllergy(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && currentAllergy.trim() !== '') {
      setAllergies([...allergies, currentAllergy]);
      setCurrentAllergy(''); // Clear the input field after adding an allergy
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Allergy"
        value={currentAllergy}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <h2>List of Allergies</h2>
      <ul>
        {allergies.map((allergy, index) => (
          <li key={index}>{allergy}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllergyList;