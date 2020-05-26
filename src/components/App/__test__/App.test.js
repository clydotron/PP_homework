import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  console.log(getByText);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
