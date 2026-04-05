import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("home page renders without crashing", () => {
  render(<Home />);
  // Just check that something rendered
  expect(document.body).toBeTruthy();
});