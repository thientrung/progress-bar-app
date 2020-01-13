import React from "react";
import { render } from "@testing-library/react";
import MainContainer from "./MainContainer";

test("renders loading when main container does not have bar data", () => {
  const { getByTestId } = render(<MainContainer bar />);
  const loading = getByTestId(/loading/i);
  expect(loading).toBeInTheDocument();
});
