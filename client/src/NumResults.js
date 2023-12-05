import React from 'react';

function NumResults({ selectedValue, emitChangeNumResultsIntent }) {
  // Description: Emits the user's intent to change num results
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    emitChangeNumResultsIntent(newValue);
  };

  return (
    <div className="howManyResults">
      <label htmlFor="numResults">Results:</label>

      <select
        name="numResults"
        id="numResults"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="Max">Max</option>
      </select>
    </div>
  );
}

export default NumResults;
