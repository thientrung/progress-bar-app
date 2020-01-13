import React from "react";
import { render } from "@testing-library/react";
import MyBar from "./MyBar";

test("renders my bar", () => {
  const { getByTestId } = render(<MyBar />);
  const bar = getByTestId(/myBar/i);
  expect(bar).toBeInTheDocument();
});
