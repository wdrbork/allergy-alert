import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchBar({emitDisplayAllergyListIntent}) {
  // Description: Emits the user's intent to toggle the allergy list to App.js
  const handleDisplayToggle = () => {
    emitDisplayAllergyListIntent();
  };

  // Description: 
  const aboutAlert = () => {
    toast("Find the chance that your food contains dangerous allergies with the search bar below! Input your allergies using the Manage Allergies button.");
  }

  return (
    <div className="nav-bar">
      <div className="logo-text">Allergy Alert</div>
            
      <div className="navbar-label-box">
        <input
          className="navbar-label-text"
          type="button"
          value="About"
          onClick={aboutAlert}/>
      </div>

      <input
        className="allergy-list-toggle"
        type="button"
        value="Manage Allergies"
        onClick={handleDisplayToggle}/>

      <ToastContainer
        position='bottom-right'
        autoClose={6500}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="colored"/>
    </div>
  );
}

export default SearchBar;
