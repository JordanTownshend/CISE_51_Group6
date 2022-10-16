import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";


import Search from "../Seacrh";

// tests that all relevant fields are displayed
describe("Search", () => {
    it("should render the basic fields", () => {
      render(<Search />);

      expect(screen.getByTestId("Search")).toBeInTheDocument();
      
    });
  });