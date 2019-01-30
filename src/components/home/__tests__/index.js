import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import HomeSearchView from "../HomeSearchView";
import { Button } from "../HomeSearchView";
afterEach(cleanup);

it('calls "onClick" prop on button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} />);
  fireEvent.click(getByText(/Find Books/i));
  expect(onClick).toHaveBeenCalled();
});
