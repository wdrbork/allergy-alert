import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AllergyList from './AllergyList';

function App() {
  const [message, setMessage] = useState("");  

  // Fetching message from backend on mount
  useEffect(() => {
    // Quit early if message already retrieved
    if (message) {
      return;
    }

    // Fetch res as a json() and then retrieve the .message object
    fetch("http://localhost:5000/api/v1/recipes") // backend URI
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, []);
  
  return (
    <div className="App">
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
          <AllergyList/>
          <SearchBar placeholder="🔍 Recipe" onSearch={() => { } } />
          <div>{message}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
