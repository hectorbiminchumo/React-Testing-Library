import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from './helpers'

test("button click flow", () => {
  render(<App />);

  // find an element with a role of button and text matching /blue/i
  const buttonElement = screen.getByRole("button", {
    name: /blue/i,
  });

  // expect the class to be mediumm-violet-red
  expect(buttonElement).toHaveClass("medium-violet-red");

  // click button
  fireEvent.click(buttonElement);

  // expect the class to be midnight-blue
  expect(buttonElement).toHaveClass("midnight-blue");

  // expect the button text to match /red/i
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox flow", () => {
  // render app
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", {
    name: /midnight-blue/i,
  });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  //initial conditions
  expect(buttonElement).toBeEnabled()
  expect(checkboxElement).not.toBeChecked()

  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeDisabled()
  expect(buttonElement).toHaveClass('gray')
  
  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeEnabled()
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphens", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
    
  });
})