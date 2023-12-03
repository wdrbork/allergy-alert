import React from 'react';

function SearchBar({emitDisplayAllergyListIntent}) {
  // Description: Emits the user's intent to toggle the allergy list to App.js
  const handleDisplayToggle = () => {
    emitDisplayAllergyListIntent();
  };

  return (
    <div className="nav-bar">
      <div className="logo-text">Allergy Alert</div>
            
      <div className="navbar-label-box">
        <div className="navbar-label-text">About</div>
      </div>

      <input
        className="allergy-list-toggle"
        type="button"
        value="Manage Allergies"
        onClick={handleDisplayToggle}/>
    </div>
  );
}

export default SearchBar;
