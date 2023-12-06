/* 
  Main component for the Allergy Alert application.
 
  Description:
  This component serves as the entry point for the Allergy Alert application.
  It includes functionality for fetching recipes based on user input, managing user allergies,
  and displaying recipe information. The component interacts with the backend API to retrieve
  and update data. It also integrates child components such as SearchBar, NavBar, and AllergyList.
  The component handles user authentication, sets up initial user data, and manages state updates.
  
*/

import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import AllergyList from './AllergyList';
import DOMPurify from "dompurify";
import FilterDropdowns from './FilterDropdowns';
import SearchRecipeLabel from './SearchRecipe';

let backend_url = "https://allergy-alert-backend.onrender.com";
if (process.env.NODE_ENV === "development") {
  backend_url = "http://localhost:5000";
}

let cookie_value;

function App() {
  const [results, setResults] = useState();
  const [allergies, setAllergies] = useState([]);
  const isMounted = useRef(true);
  const [allergyDisplay, setAllergyDisplay] = useState(false);
  const [total, setTotal] = useState();
  const [numResults, setNumResults] = useState("10");  // Initialize with a 10
  const [filter, setFilterResults] = useState("None");  // Initialize with None

  // runs when app component mounted
  useEffect(() => {
    if (isMounted.current) {
      // search for cookie
      if ((cookie_value = getCookie()) !== null) {
        // if found then set allergies
        fetchAllergens();
      } else {
        // if not then make cookie
        fetchAddUser()
        .then(() => {
          document.cookie = 'allergyALERTuser=' + cookie_value;
        })
        .catch((error) => {
          console.error("Error adding user: ", error);
        });
      }
    }

    return () => {
      // Code to be executed when component unmounts (cleanup)
      isMounted.current = false;
    };
    
  }, []);

  // Parameter: query - recipe name to be fetched from database
  // Description: uses fetch on the given recipe name (user input)
  //              and then updates state.results
  const fetchRecipe = query => {
    // Fetch res as a json() and then retrieve the .message object
    const sanitizedQuery = DOMPurify.sanitize(query);
    fetch(backend_url + "/api/v1/recipes?name=\"" + sanitizedQuery + "\"") // backend URI
      .then((res) => res.json())
      .then((data) => {
        // data is a JSON object with all recipes
        // for the beta, we will display the top 10 results
        let results = [];

        data["recipes"].forEach((recipe, index) => {
          if (results.length < numResults || numResults === "Max") {
            // makes it so the exact match is shown first
            if (recipe.Name.toLowerCase() === query.toLowerCase()) {
              const recipeObj = recipeToString(recipe);
              if (filter === "None") {
                results.unshift(<div key={index}>{recipeObj[0]}</div>);
              } else if (filter === "Results with allergens" && recipeObj[1]) {
                results.unshift(<div key={index}>{recipeObj[0]}</div>);
              } else if (filter === "Results without allergens" && !recipeObj[1]) {
                results.unshift(<div key={index}>{recipeObj[0]}</div>);
              } 
            } else {
              const recipeObj = recipeToString(recipe);
              if (filter === "None") {
                results.push(<div key={index}>{recipeObj[0]}</div>);
              } else if (filter === "Results with allergens" && recipeObj[1]) {
                results.push(<div key={index}>{recipeObj[0]}</div>);
              } else if (filter === "Results without allergens" && !recipeObj[1]) {
                results.push(<div key={index}>{recipeObj[0]}</div>);
              } 
            }
          } else if (recipe.Name.toLowerCase() === query.toLowerCase()) {
            const recipeObj = recipeToString(recipe);
            if (filter === "None") {
              results.unshift(<div key={index}>{recipeObj[0]}</div>);
            } else if (filter === "Results without allergens" && recipeObj[1]) {
              results.unshift(<div key={index}>{recipeObj[0]}</div>);
            } else if (filter === "Results without allergens" && !recipeObj[1]) {
              results.unshift(<div key={index}>{recipeObj[0]}</div>);
            }
          }
        });
        
        // check for any results
        if (results.length === 0) {
          setResults("No recipes in our database match your search");
        } else {        // check for any results
        if (results.length === 0) {
          setResults([<div key={0}>No recipes in our database match your search</div>]);
        } else {
          setResults(results);
        }
        }
      })
  }

  // This is the function for the total box
  const fetchRecipeTotal = query => {
    const sanitizedQuery = DOMPurify.sanitize(query);
    fetch(backend_url + "/api/v1/recipes?name=\"" + sanitizedQuery + "\"") // backend URI
    .then((res) => res.json())
    .then((data) => {
      var dict = {};
      var totalNumberOfRecipe = 0;

      data["recipes"].forEach((recipe) => {


        totalNumberOfRecipe += recipe.Total

        const ingredients = Object.keys(recipe).slice(1, -2);
        ingredients.forEach((ingred, index) => {
          if (ingredientIsAllergy(ingred, allergies) === true) {
            var ingredient = ingred.toLowerCase();
            if (ingredient.slice(-1) === "s") {
              ingredient = ingredient.slice(0, -1);
            }
            dict[ingredient] = (dict[ingredient] || 0) + 1;
          }
        })

      })
      let totals = totalToString(dict, query, totalNumberOfRecipe);
      setTotal(totals);
    })
  }

  // This is the function for the total box
  const totalToString = (dict, query, totalNumberOfRecipe) => {
    const ingredientPercentage = []
    const ingredients = Object.keys(dict);
    const ingredientCounts = Object.values(dict);
    for (let i = 0; i < ingredients.length; i++) {
      ingredientPercentage.push(`${((ingredientCounts[i] / totalNumberOfRecipe) * 100).toFixed(1)}%\t${ingredients[i]}`)
    }
    const totalContent = `\nAllergen Likelihoods:\n${ingredientPercentage.join("\n")}`;
    
    if (totalNumberOfRecipe === 0) {
      return;
    } else if (ingredientPercentage.length === 0) {
      return (
        <div className="recipe-box">
          <label className="recipe-warning-label">
            Warning: While Allergy Alert provides fair estimates, results may be imperfect.<br/>
            Always take the precautions necessary for protecting your own health.<br/>
          </label>

          <label className="recipe-label">
            {"\nTotal recipes returned for search " + query + ": " + totalNumberOfRecipe + "\n"}
          
            None of your allergens were found in these recipes.
          </label>
        </div>
      );
    } else {
      return (
        <div className="recipe-box">
          <label className="recipe-warning-label">
            Warning: While Allergy Alert provides fair estimates, results may be imperfect.<br/>
            Always take the precautions necessary for protecting your own health.<br/>
          </label>

          <label className="recipe-label">
            {"\nTotal recipes returned for search " + query + ": " + totalNumberOfRecipe + "\n"}
          
            {"The following allergies were found in the recipes for this item:"}
            <br></br>
          
            {totalContent}
          </label>
        </div>
      );
    }
  };


  // Description: uses fetch on the on value of user cookie
  const fetchAllergens = () => {
    // Fetch res as a json() and then retrieve the .message object
    fetch(backend_url + `/api/v1/accounts?value=${encodeURIComponent(cookie_value)}`) // backend URI
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

  // Description: adds user to the database
  const fetchAddUser = () => {
    return new Promise((resolve, reject) => {
      // Fetch res as a json() and then retrieve object
      fetch(backend_url + `/api/v1/accounts/addUser`, {
        method: 'POST'
      })
      .then((res) => res.json())
      .then((data) => {
        // data is a JSON object with the result of the operation
        console.log("Returned data:", data);
        if (data.userId) {
          cookie_value = data.userId;
          console.log("Set cookie_value to:", cookie_value);
          resolve(); // Resolve the promise when the operation is successful
        } else {
          console.error("Error adding user:", data.error);
          reject(new Error(data.error)); // Reject the promise with an error
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        reject(error); // Reject the promise with the fetch error
      });
    });
  };

  // Parameter: allergen - allergy to be added
  // Description: adds allergy to users allergies in database
  const fetchAddAllergy = allergen => {
    const sanitizedAllergen = DOMPurify.sanitize(allergen);
    // Fetch res as a json() and then retrieve the .message object
    fetch(backend_url + `/api/v1/accounts/addAllergen?value=${encodeURIComponent(cookie_value)}&allergen=${sanitizedAllergen}`, {
      method: 'POST'
    })
    .then((res) => res.json())
    .then((data) => {
        // data is a JSON object with the result of the operation
        if (data.success) {
            console.log("Allergen added successfully");
        } else {
            console.error("Error adding allergen:", data.error);
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
  }

  // Parameter: allergen - allergy to be removed
  // Description: removes allergy from users allergies in database
  const fetchRemoveAllergy = allergen => {
    const sanitizedAllergen = DOMPurify.sanitize(allergen);
    // Fetch res as a json() and then retrieve the .message object
    fetch(backend_url + `/api/v1/accounts/removeAllergen?value=${encodeURIComponent(cookie_value)}&allergen=${encodeURIComponent(sanitizedAllergen)}`, {
      method: 'POST'
    })
    .then((res) => res.json())
    .then((data) => {
        // data is a JSON object with the result of the operation
        if (data.success) {
            console.log("Allergen removed successfully");
        } else {
            console.error("Error removing allergen:", data.error);
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
  }


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
    setAllergies(allergies => 
        allergies.filter(allergy => allergy !== allergyToDelete.toLowerCase()));
    fetchRemoveAllergy(allergyToDelete);
  }

  // Description looks for allergy alert cookie
  function getCookie() {
    const name = 'allergyALERTuser=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
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
    
    const frontName = [];
    const backName = [];
    const frontCount = [];
    const backCount = [];

    for (let i = 0; i < ingredientNames.length; i++) {
      if (ingredientIsAllergy(ingredientNames[i], allergies)) {
        frontName.push(ingredientNames[i]);
        frontCount.push(ingredientCounts[i]);
      } else {
        backName.push(ingredientNames[i]);
        backCount.push(ingredientCounts[i]);
      }
    }

    const sortedIngredName = frontName.concat(backName);
    const sortedIngredCount = frontCount.concat(backCount);

    // allergy found flag
    let allergyFound = false;

    for (let i = 0; i < sortedIngredName.length; i++) {
      if (allergyFound === false && 
          ingredientIsAllergy(sortedIngredName[i], allergies))
      {
        allergyFound = true;
      }

      ingredientPercentages.push(`${((sortedIngredCount[i] / recipeTotal) * 100).toFixed(1)}%\t${sortedIngredName[i]}`)
    }

    const recipeContent = ingredientPercentages.join("\n");
    
    // check for if one of the allergens was found
    return [(
      <div className="recipe-box">
        <label className="recipe-name">{recipe["Name"]}</label>

        <label className="recipe-label">
          <small>{" (Variations found: " + recipeTotal + ")\n"}</small>
        
          {allergyFound ? "Allergy Alert! At least one allergen may be in this item.\n\n" : 
            "None of your allergens were found in recipes for this item.\n\n"}
        
          Ingredient Likelihoods:
        </label>

        <br/>

        <label className="recipe-content">
          {recipeContent}
        </label>
      </div>
    ),
    allergyFound];
  }

  // Description: toggles the allergy list display
  const toggleAllergyList = () => {
    setAllergyDisplay(!allergyDisplay)
  }

  return (
    <div className="App" data-testid="app-instance">
      <header className="App-header">
        <NavBar emitDisplayAllergyListIntent={toggleAllergyList}/>
      </header>
      {
        allergyDisplay ?
        (
          <AllergyList
            isListVisible={!allergyDisplay}
            allergies={allergies}
            emitAddAllergyIntent={(allergy) => addAllergy(allergy)}
            emitDeleteAllergyIntent={(allergy) => deleteAllergy(allergy)}
          />
        ) : 
        (
          <AllergyList
            isListVisible={!allergyDisplay}
            allergies={allergies}
            emitAddAllergyIntent={(allergy) => addAllergy(allergy)}
            emitDeleteAllergyIntent={(allergy) => deleteAllergy(allergy)}
          />
        )
      }
      <br></br>
      <SearchRecipeLabel/>
      <SearchBar
        placeholder="🔍 Recipe"
        allergies={allergies}
        emitSearchIntent={(query) => [fetchRecipe(query), fetchRecipeTotal(query)]}
      />
      <FilterDropdowns
        filterValue={filter}
        emitChangeFilterIntent={(value) => setFilterResults(value)}
        numResultValue={numResults}
        emitChangeNumResultsIntent={(value) => setNumResults(value)}/>

      {total ? (
        <div className="recipe-output">{total}</div>
      ) : null}

      {results ? (
        <div className="recipe-output">{results}</div>
      ) : null}
      
    </div>
  );
}

// Helper function that determines if an ingredient is on the allergy list
function ingredientIsAllergy(ingredient, allergies) {
  for (const allergy of allergies) {
    if (allergy === ingredient.toLowerCase() ||
        allergy + 's' === ingredient.toLowerCase() || 
        (allergy.slice(-1) === "s" && 
            allergy.slice(0, -1) === ingredient.toLowerCase()))
    {
      return true;
    }
  }

  return false;
}

export default App;