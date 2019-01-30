import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { CardHeader } from "../ListCardView";
import { ListView } from "../List";

afterEach(cleanup);

const title = "Scarlet Begonias";
const author = "Robert Hunter";
const volumes = ["a", "b", "c", "d", "e"];

it("renders book title and author props", async () => {
  const { getByText, rerender } = render(
    <CardHeader title={title} author={author} />
  );
  await waitForElement(() => getByText(/Scarlet Begonias/i));
  await waitForElement(() => getByText(/Robert Hunter/i));
  rerender(<CardHeader title="Throwing Stones" author="John Perry Barlow" />);
  await waitForElement(() => getByText(/Throwing Stones/i));
  await waitForElement(() => getByText(/John Perry Barlow/i));
});
