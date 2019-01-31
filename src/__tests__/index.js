import React from "react";
import { withRouter } from "react-router";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup, wait } from "react-testing-library";
import App from "../App.js";
import { renderWithRouter, Simulate } from "../utils/test_utils";

afterEach(cleanup);

test("renders Home on load at correct Route", async () => {
  const { container, getByLabelText, getByText } = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch("Find a good book");
  expect(window.location.href).toContain("/");

  //Home Component Form search input and submit button
  const searchInputNode = getByLabelText("Title:");
  const formNode = container.querySelector("form");
  const submitButtonNode = getByText("Find Books");
  searchInputNode.value = "white fang";
  Simulate.submit(formNode);
});

// test("Renders List on '/list' route", async () => {
//   const route = "/list?=Gatsby";
//   const history = {
//     initialEntries: ["/", "/list"],
//     initialIndex: 1,
//     action: "REPLACE",
//     location: {
//       pathname: "/list",
//       search: `?q=Gatsby`,
//       state: "Gatsby"
//     }
//   };
//   const { getByTestId } = renderWithRouter(<App />, {
//     route,
//     ...createMemoryHistory(history)
//   });

//   await wait(() => getByTestId("listTitle"));

//   expect(getByTestId("listTitle")).toHaveTextContent(
//     "Search results for Gatsby"
//   );
// });

// // await navigate("/list/?=Gatsby");
// expect(container.innerHTML).toMatch("Search results for Gatsby");
