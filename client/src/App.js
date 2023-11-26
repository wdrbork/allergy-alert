import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AllergyList from './AllergyList';

let cookie_value;

function App() {
  const [results, setResults] = useState();
  const [allergies, setAllergies] = useState([]);

  // runs when app component mounted
  useEffect(() => {
    cookie_value = getCookie();
    // search for cookie
    if (cookie_value !== null) {
      // if found then set allergies
      fetchCookie();
    } else {
      // if not then make cookie
      fetchMaxValue()
      .then(() => {
        fetchAddUser(cookie_value);
        document.cookie = 'alleryALERTuser=' + cookie_value;
      })
      .catch((error) => {
        console.error("Error getting max value:", error);
      });
    }
  }, []);

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
          setResults("No recipes in our database match your search");
        } else {        // check for any results
        if (result.length === 0) {
          setResults([<div key={0}>No recipes in our database match your search</div>]);
        } else {
            setResults(result);
        }
        }
      })
  }

  // Description: uses fetch on the on value of user cookie
  const fetchCookie = () => {
    // Fetch res as a json() and then retrieve the .message object
    fetch("http://localhost:5000/api/v1/accounts?value=\"" + cookie_value + "\"") // backend URI
      .then((res) => res.json())
      .then((data) => {
        // data is a JSON object with all account info including allergies
        if (data["accounts"].length > 0) {
          // Access the allergies array of the first account
          const allergiesArray = data["accounts"][0].allergies;

            setAllergies(allergiesArray);


        } else {
          console.error("No accounts found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Parameter: value - user value to be added
  // Description: adds user to the database
  const fetchAddUser = value => {
    // Fetch res as a json() and then retrieve the .message object
    fetch(`http://localhost:5000/api/v1/accounts/addUser?value=${encodeURIComponent(value)}`, {
      method: 'POST'
    })
    .then((res) => res.json())
    .then((data) => {
        // data is a JSON object with the result of the operation
        if (data._id) {
            console.log("User added successfully");
            // You may want to update your UI or perform additional actions here
        } else {
            console.error("Error adding user:", data.error);
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
  }

  // Parameter: allergen - allergy to be added
  // Description: adds allergy to users allergies in database
  const fetchAddAllergy = allergen => {
    // Fetch res as a json() and then retrieve the .message object
    fetch(`http://localhost:5000/api/v1/accounts/addAllergen?value=${encodeURIComponent(cookie_value)}&allergen=${encodeURIComponent(allergen)}`, {
      method: 'POST'
    })
    .then((res) => res.json())
    .then((data) => {
        // data is a JSON object with the result of the operation
        if (data.success) {
            console.log("Allergen added successfully");
            // You may want to update your UI or perform additional actions here
        } else {
            console.error("Error adding allergen:", data.error);
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
  }

  // Description: gets max cookie value
  const fetchMaxValue = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/accounts/getMaxValue`, {
        method: 'GET'
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
  
      // Check if the data contains the max value
      if (data.maxValue !== undefined) {
        cookie_value = parseInt(data.maxValue, 10) + 1;
      } else {
        console.error("Error getting max value:", data.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Parameter: allergy - allergy to be added to allergy list
  // Description: updates state.allergies
  const addAllergy = allergy => {
    const lowerCaseAllergy = allergy.toLowerCase();
    if (!allergies.includes(lowerCaseAllergy)) {
      setAllergies([...allergies, lowerCaseAllergy]);
      fetchAddAllergy(allergy);
    }
  }

  // Parameter: allergy - allergy to be deleted from allergy list
  // Description: updates state.allergies
  const deleteAllergy = allergyToDelete => {
    setAllergies(allergies => allergies.filter(allergy => allergy !== allergyToDelete.toLowerCase()));
  }

  // Description looks for allergy alert cookie
  function getCookie() {
    const name = 'alleryALERTuser=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  

    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  
    return null; // Return null if the cookie with the given name is not found
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
        if (allergy === ingredientNames[i].toLowerCase()) {
          allergyFound = true;
        } else if (allergy + "s" === ingredientNames[i].toLowerCase()) {
          allergyFound = true;
        } else if (allergy.slice(-1) === "s") {
          if (allergy.slice(0, -1) === ingredientNames[i].toLowerCase()) {
            allergyFound = true;
          }
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
