import React, { useState } from 'react';

function SearchBar({ placeholder, emitSearchIntent }) {
  const [searchTerm, setSearchTerm] = useState('');
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   if (searchTerm === '') {
  //     setIsFocused(false);
  //   }
  // };

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
    <div className="search-bar" style={{ marginLeft: '40px' }}>
      <input
        type="text"
        placeholder={placeholder}
        onKeyUp={keyUpEventHandler}
        value={searchTerm}
        onChange={handleInputChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      />
    </div>
  );
}

export default SearchBar;
