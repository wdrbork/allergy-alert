import React, { useState } from 'react';

function SearchBar({ placeholder, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (searchTerm === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className="search-bar" style={{ marginLeft: '40px' }}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          color: isFocused ? '#000' : searchTerm ? '#000' : '#ccc',
        }}
      />
    </div>
  );
}

export default SearchBar;
