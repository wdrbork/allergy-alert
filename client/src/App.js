import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AllergyList from './AllergyList';

function App() {
  const [results, setResults] = useState();
  const [allergies, setAllergies] = useState([]);

  // Parameter: query - recipe name to be fetched from database
  // Description: uses fetch on the given recipe name (user input)
  //              and then updates state.results
  const fetchRecipe = query => {
    // Fetch res as a json() and then retrieve the .message object
    fetch("http://localhost:5000/api/v1/recipes?name=\"" + query + "\"") // backend URI
      .then((res) => res.json())
      .then((data) => {
        // data is a JSON object with all recipes
        // for the beta, we will display the top 10 results
        let ten_results = [];
        let hold_array = [];

        data["recipes"].forEach((recipe, index) => {
          if (index >= 10) {
            return;
          }
          
          // makes it so the exact match is shown first
          if (recipe.Name.toLowerCase() === query.toLowerCase()) {
            ten_results.push(<div key={index}>{recipeToString(recipe)}</div>);
          } else {
            hold_array.push(<div key={index}>{recipeToString(recipe)}</div>)
          }
        });
        let result = ten_results.concat(hold_array);
        
        // check for any results
        if (result.length === 0) {
          setResults([<div key={0}>No recipes in our database match your search</div>]);
        } else {
          setResults(result);
        }
      })
  }

  // Parameter: allergy - allergy to be added to allergy list
  // Description: updates state.allergies
  const addAllergy = allergy => {
    setAllergies([...allergies, allergy]);
  }

  // Parameter: allergy - allergy to be deleted from allergy list
  // Description: updates state.allergies
  const deleteAllergy = allergyToDelete => {
    setAllergies(allergies => allergies.filter(allergy => allergy !== allergyToDelete));
  }

  // Parameter: recipe - object containing recipe data
  // Description: formats recipe into a readable string output
  const recipeToString = recipe => {
    // Total number of recipes for this food
    const recipeTotal = recipe["Total"];

    // Get ingredient names and counts (remove first and last elements)
    const ingredientNames = Object.keys(recipe).slice(1, -2);
    const ingredientCounts = Object.values(recipe).slice(1, -2);

    // Evaluate occurrence % for each ingredient; store as strings
    const ingredientPercentages = []

    // allergy found flag
    let allergyFound = false;

    for (let i = 0; i < ingredientNames.length; i++) {
      allergies.forEach((allergy) => {
        if (allergy.toLowerCase() === ingredientNames[i].toLowerCase()) {
          allergyFound = true;
        }
      });
      ingredientPercentages.push(`${ingredientNames[i]} - ${((ingredientCounts[i] / recipeTotal) * 100).toFixed(1)}%`)
    }

    const recipeContent = `${recipe["Name"]}:\nIngredients:\n${ingredientPercentages.join("\n")}`;
    
    // check for if one of the allergens was found
    return (
      <div className="recipe-box">
        <label className="recipe-label">
          {allergyFound ? "Allergy Alert!\nOne of your allergens has been found in recipes for this item:\n" : ""}
        </label>
        <label className="recipe-content">
          {recipeContent}
        </label>
      </div>
    );
  }

  
  return (
    <div className="App" data-testid="app-instance">
      <header className="App-header">
        <h2 className="logo-text">Allergy Alert</h2>
      </header>
      <main>
        <section>
          <h3>About Allergy Alert</h3>
          <p>
            Allergy Alert allows users to quickly find recipes and foods which contain their allergies and which don't,
            allowing for faster access to appropriate foods to enjoy anytime, anywhere.
          </p>
        </section>
        <section>
          <AllergyList allergies={allergies} emitAddAllergyIntent={allergy => addAllergy(allergy)} emitDeleteAllergyIntent={allergy => deleteAllergy(allergy)}/>
          <SearchBar placeholder="🔍 Recipe" allergies={allergies} emitSearchIntent={query => fetchRecipe(query)} />
          <div style={{whiteSpace: "pre-line", paddingLeft: "2rem"}}>{results}</div>
        </section>
      </main>
    </div>
  );
}

export default App;