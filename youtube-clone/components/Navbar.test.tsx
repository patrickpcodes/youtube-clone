import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

test("renders Navbar component", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/youtube-clone/i);
  expect(linkElement).toBeInTheDocument();
});

test("toggles dark/light mode", () => {
  render(<Navbar />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Light Mode");

  fireEvent.click(button);
  expect(button).toHaveTextContent("Dark Mode");

  fireEvent.click(button);
  expect(button).toHaveTextContent("Light Mode");
});
