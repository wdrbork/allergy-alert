/*
  Unit tests for the App component using the testing-library/react library.
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('test', () => {
  render(<App />);
  expect(true);
});

describe('Renders starter screen', () => {

    test('renders Allergy Alert logo', () => {
    render(<App />);
    const logoElement = screen.getByText(/Allergy Alert/, { selector: 'h2.logo-text' });
    expect(logoElement).toBeDefined();
    });

    test('renders About Allergy Alert section', () => {
    const { getByText } = render(<App />);
    const aboutSection = getByText((content, element) => {
        return element.tagName.toLowerCase() === 'h3' && content.includes('About Allergy Alert');
    });
    expect(aboutSection).toBeDefined();
    });

    test('renders About Allergy Alert info section', () => {
    const { getByText } = render(<App />);
    const aboutAllergyAlertInfo = getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.includes("Allergy Alert allows users to "
                                                                        + "quickly find recipes and foods "
                                                                        + "which contain their allergies and "
                                                                        + "which don't, allowing for faster "
                                                                        + "access to appropriate foods to enjoy "
                                                                        + "anytime, anywhere.");
    });
    expect(aboutAllergyAlertInfo).toBeDefined();
    });

});

