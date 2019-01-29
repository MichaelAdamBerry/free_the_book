import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import Home from "./Home";

test("Home should render input props passed from ", () => {
  const query = "white fang";
  const { getByTestId, getByLabel } = render(<Home />);
  getByLabel("Title:");
  expect(getByTestId("welcomeTitle").textContent).toBe(
    "Welcome to free the book"
  );
});
