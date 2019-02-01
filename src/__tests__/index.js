import React from "react";
import { cleanup } from "react-testing-library";
import App from "../App.js";
import { renderWithRouter } from "../utils/test_utils";

afterEach(cleanup);

test("renders Home on load at correct Route", async () => {
  const { container } = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch("meet your next book");
  expect(window.location.href).toContain("/");
});
