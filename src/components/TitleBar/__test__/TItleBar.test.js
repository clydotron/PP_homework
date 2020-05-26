import React from 'react';
import { render } from '@testing-library/react';
import TitleBar from '../TitleBar';

test('test 1', () => {
  const { getByText } = render(<TitleBar />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});