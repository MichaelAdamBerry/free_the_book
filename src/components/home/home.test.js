import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import HomeSearchView from "./HomeSearchView";
afterEach(cleanup);

test("HomeSearchView should accept props query and actions and render view", () => {
  const actions = { submitQuery: jest.fn(), typeLetter: jest.fn() };
  let newQuery = "white fang";
  const { getByTestId } = render(<HomeSearchView actions={actions} query="" />);
  fireEvent.change(getByTestId("homeSearchInput"), {
    target: { value: newQuery }
  });
  getByTestId("findBooksBtn").click();

  expect(actions.submitQuery).toBeCalledTimes(1);
  expect(actions.typeLetter).toBeCalledTimes(1);
});
