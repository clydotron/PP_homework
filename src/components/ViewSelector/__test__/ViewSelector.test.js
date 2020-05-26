
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ViewSelector from '../ViewSelector';
import '@testing-library/jest-dom/extend-expect'

const allViews = {
  'Roadmap' : 'roadmap',
  'Planning board' : 'planning_board',
  'Parking lot' : 'parking_lot'
};

describe("initial state", () => {

  it('view selector has title', () => {
    const { getByTestId } = render(<ViewSelector view={'Roadmap'} allViews={allViews}/>);
    const title = getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(title.innerHTML).toBe("Roadmap")
  });

  it('Roadmap is active',() => {
    const { getByTestId } = render(<ViewSelector view={'Roadmap'} allViews={allViews}/>);
    const items = getByTestId("view-options");

    expect(items.firstChild).toHaveClass('active');
    expect(items.childNodes[1]).not.toHaveClass('active');
    expect(items.childNodes[2]).not.toHaveClass('active');
  });

  it('Parking lot is active',() => {
    const { getByTestId } = render(<ViewSelector view={'Parking lot'} allViews={allViews}/>);
    const items = getByTestId("view-options");

    expect(items.firstChild).not.toHaveClass('active');
    expect(items.childNodes[1]).not.toHaveClass('active');
    expect(items.childNodes[2]).toHaveClass('active');
  });
})

describe("contents", () => {

  it("correct number of items", () => {
    const { getByTestId } = render(<ViewSelector view={'Roadmap'} allViews={allViews}/>);

    const items = getByTestId("view-options");
    const numItems = allViews.length;
    expect(items.children.length).toBe(3);
  })

  it("correct text", () => {
    const { getByTestId } = render(<ViewSelector view={'Roadmap'} allViews={allViews}/>);

    const options = getByTestId("view-options");
    expect(options.children.length).toBe(3)

    expect(options.childNodes[0].innerHTML).toBe('Roadmap')
    expect(options.childNodes[1].innerHTML).toBe('Planning board')
    expect(options.childNodes[2].innerHTML).toBe('Parking lot')
  })
})

describe("Click events", () => {
  
  it("onViewSelected not called", () => {
    const onViewSelected = jest.fn();
    const { getByText } = render(<ViewSelector view={'Roadmap'} allViews={allViews} onViewSelected={onViewSelected} />);
   
    expect(onViewSelected).not.toHaveBeenCalled();
  })

  it("onViewSelected called", () => {
    const onViewSelected = jest.fn();
    const { getByText } = render(<ViewSelector view={'Roadmap'} allViews={allViews} onViewSelected={onViewSelected} />);
   
    fireEvent.click(getByText('Planning board'))

    expect(onViewSelected).toHaveBeenCalled();
    expect(onViewSelected).toHaveBeenCalledWith('Planning board');
  })

})