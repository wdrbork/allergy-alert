/*
  Unit tests for the App component using the testing-library/react library.
*/

import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';
import App from './App';
import SearchBar from './SearchBar';


test('test', () => {
  render(<App />);
  expect(true);
});

describe('Renders starter screen', () => {

  test('renders Allergy Alert logo', () => {
    render(<App />);
    const logoElement = screen.getByText(/Allergy Alert/, { selector: '.logo-text' });
    expect(logoElement).toBeDefined();
  });

  test('renders the NavBar and triggers Manage Allergies', () => {
    // Mock function for the emitDisplayAllergyListIntent prop
    const mockToggleAllergyList = jest.fn();
  
    // Render the NavBar with the mock function
    render(<NavBar emitDisplayAllergyListIntent={mockToggleAllergyList} />);
  
    // Check if the logo text is rendered
    const logoText = screen.getByText('Allergy Alert');
    expect(logoText).toBeDefined();
  
    // Check if the "About" button is rendered
    const aboutButton = screen.getByText('About');
    expect(aboutButton).toBeDefined();
  
    // Click on the "Manage Allergies" button using userEvent
    const manageAllergiesButton = screen.getByText('Manage Allergies');
    userEvent.click(manageAllergiesButton);
  
    // Check if the mock function was called
    expect(mockToggleAllergyList).toHaveBeenCalledTimes(1);
  });

  // Mock function for the emitSearchIntent prop
  const mockSearchIntent = jest.fn();

  test('renders SearchBar component with placeholder', () => {
    render(<SearchBar placeholder="🔍 Recipe" emitSearchIntent={mockSearchIntent} />);

    // Check if the input element and button are rendered
    const inputElement = screen.getByPlaceholderText('🔍 Recipe');
    const buttonElement = screen.getByText('▶');

    expect(inputElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

});

