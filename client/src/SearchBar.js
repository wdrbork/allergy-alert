/*
  Component responsible for rendering the search bar in the Allergy Alert application.
 
  Description:
  This component represents the search bar in the Allergy Alert application's user interface.
  It allows users to input recipe names for searching and triggers the search intent when the "Enter" key is pressed.
  The component communicates with the parent component (App.js) by emitting the user's search intent.
*/

import React, { useState } from 'react';

function SearchBar({ placeholder, emitSearchIntent }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Parameter: e - captured key event
  // Description: updates state.searchTerm with text box value
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Parameter: e - key event to be handled
  // Description: Detects "enter" presses to call user search intent
  //   note: e.keyCode is left in for legacy browsers
  const keyUpEventHandler = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      emitSearchIntent(searchTerm)
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        onKeyUp={keyUpEventHandler}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
