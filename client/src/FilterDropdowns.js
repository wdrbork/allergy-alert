import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function FilterDropdowns({ filterValue, emitChangeFilterIntent, numResultValue, emitChangeNumResultsIntent }) {
  const [animationTriggeredBefore, setAnimationTriggered] = useState(false);

  // runs when app component mounted
  useEffect(() => {
    if (animationTriggeredBefore === false) {
      setAnimationTriggered(true);
      // Store in localStorage to persist across page reloads
      localStorage.setItem('animationTriggeredBefore', 'true');
    }
  }, [animationTriggeredBefore]);

  // Description: Emits the user's intent to change num results
  const handleNumResultsChange = (event) => {
    const newValue = event.target.value;
    emitChangeNumResultsIntent(newValue);
  };

  // Description: Emits the user's intent to change filter
  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    emitChangeFilterIntent(newValue);
  };

  // Variants used in animation
  const variants = {
    hidden: { x: '-100%', pointerEvents: 'none' },
    visible: { x: '0%', pointerEvents: 'auto' },
  };

  return (
    <motion.div
      className="filter-dropdowns-box"
      key={animationTriggeredBefore}
      initial="hidden"
      animate={animationTriggeredBefore ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="results-box">
        <label className="results-label">Results:</label>
        <select
          className="results-select"
          value={numResultValue}
          onChange={handleNumResultsChange}
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="Max">Max</option>
        </select>
      </div>

      <div className="results-box">
        <label className="results-label">Filter:</label>
        <select
          className="results-select"
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option value="None">None</option>
          <option value="with">Results with allergens</option>
          <option value="without">Results without allergens</option>
        </select>
      </div>
    </motion.div>
  );
}

export default FilterDropdowns;
