/*
  Component responsible for rendering the search recipe label in the Allergy Alert application.
 
  Description:
  This component represents the animated search recipe label in the Allergy Alert application's user interface.
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./App.css";

function SearchRecipeLabel() {
  const [animationTriggeredBefore, setAnimationTriggered] = useState(false);
  
  // runs when app component mounted
  useEffect(() => {
    if (animationTriggeredBefore === false) {
      setAnimationTriggered(true);
      // Store in localStorage to persist across page reloads
      localStorage.setItem('animationTriggeredBefore', 'true');
    }
  }, [animationTriggeredBefore]);

  // Variants used in animation
  const variants = {
    hidden: { x: '-100%' },
    visible: { x: '0%' },
  };

  return (
    <motion.div
        className="search-recipe-label"
        key={animationTriggeredBefore}
        initial="hidden"
        animate={animationTriggeredBefore ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        Search Recipe
    </motion.div>
  );
}    

export default SearchRecipeLabel;
