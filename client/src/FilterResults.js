import React from 'react';

function FilterResults({ selectedValue, emitChangeFilterIntent }) {
  // Description: Emits the user's intent to change filter
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    emitChangeFilterIntent(newValue);
  };

  return (
    <div className="filterResults">
      <label htmlFor="filterResults">Filter:</label>

      <select
        name="filterResults"
        id="filterResults"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="None">None</option>
        <option value="Show results with allergens">Show results with allergens</option>
        <option value="Show results without allergens">Show results without allergens</option>
      </select>
    </div>
  );
}

export default FilterResults;
