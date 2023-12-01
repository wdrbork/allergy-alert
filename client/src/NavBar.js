import React, { useState } from 'react';

function SearchBar({emitDisplayAllergyListIntent}) {
  // Description: Emits the user's intent to toggle the allergy list to App.js
  const handleDisplayToggle = () => {
    emitDisplayAllergyListIntent();
  };

  return (
    <div className="nav-bar">
      <h2 className="logo-text">Allergy Alert</h2>

      <input
        className="allergy-list-toggle"
        type="button"
        value="Manage Allergies"
        onClick={handleDisplayToggle}/>
    </div>
  );
}

export default SearchBar;
