import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import AllergyList from './AllergyList';

describe('AllergyList Component', () => {
  let container = null;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  it('renders the component and adds an allergy', () => {
    const allergies = ['Peanuts', 'Shellfish'];
    const emitAddAllergyIntent = jest.fn();

    // Render the component
    render(
      <AllergyList allergies={allergies} emitAddAllergyIntent={emitAddAllergyIntent} />,
      container
    );

    const input = container.querySelector('.search-bar');
    const listHeading = container.querySelector('h2');

    // Simulate adding an allergy
    input.value = 'Eggs';
    TestUtils.Simulate.change(input);
    TestUtils.Simulate.keyDown(input, { key: 'Enter' });

    expect(emitAddAllergyIntent).toHaveBeenCalledWith('Eggs');

    // Check if the added allergy is displayed
    const addedAllergy = container.querySelector('li');
    expect(addedAllergy.textContent).toBe('Eggs');
  });
});