/*
  Component responsible for rendering the search bar in the Allergy Alert application.
 
  Description:
  This component represents the animted search bar in the Allergy Alert application's user interface.
  It allows users to input recipe names for searching and triggers the search intent when the "Enter" key is pressed.
  The component communicates with the parent component (App.js) by emitting the user's search intent.
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function SearchBar({ placeholder, emitSearchIntent }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [animationTriggeredBefore, setAnimationTriggered] = useState(false);
  
  // runs when app component mounted
  useEffect(() => {
    if (animationTriggeredBefore === false) {
      setAnimationTriggered(true);
      // Store in localStorage to persist across page reloads
      localStorage.setItem('animationTriggeredBefore', 'true');
    }
  }, [animationTriggeredBefore]);

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

  // Description: handles button click search; same as pressing Enter
  const handleSearchButtonClick = () => {
    emitSearchIntent(searchTerm)
  }

  // Variants used in animation
  const variants = {
    hidden: { x: '-100%', pointerEvents: 'none' },
    visible: { x: '0%', pointerEvents: 'auto' },
  };

  return (
    <motion.div
      className="search-bar"
      key={animationTriggeredBefore}
      initial="hidden"
      animate={animationTriggeredBefore ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <input
        type="text"
        placeholder={placeholder}
        onKeyUp={keyUpEventHandler}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchButtonClick}>▶</button>
    </motion.div>
  );
}    

export default SearchBar;
