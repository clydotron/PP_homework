import React from 'react';
import { render } from '@testing-library/react';
import TitleBar from '../TitleBar';


//title bar should have 3 children: 
// company logo
//
test('test 1', () => {
  const { getByText } = render(<TitleBar />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});

describe("Title bar components", () => {

  it("All parts are present", () => {


    
  })
})