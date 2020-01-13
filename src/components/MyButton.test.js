import React from "react";
import { render } from "@testing-library/react";
import MyButton from "./MyButton";

test("renders my button", () => {
  const { getByTestId } = render(<MyButton />);
  const button = getByTestId(/myButton/i);
  expect(button).toBeInTheDocument();
});
