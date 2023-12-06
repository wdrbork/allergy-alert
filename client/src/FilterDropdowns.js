import React from 'react';

function FilterDropdowns({ filterValue, emitChangeFilterIntent, numResultValue, emitChangeNumResultsIntent }) {
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

  return (
    <div className="filter-dropdowns-box">
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
    </div>
  );
}

export default FilterDropdowns;
