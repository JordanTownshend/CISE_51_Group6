import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";




import App from "../../App";

// tests that all relevant fields are displayed
describe("Moderation-Article", () => {
    it("should render the basic fields", () => {
      render(<App />);

      expect(screen.getByLabelText('Username')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      
    });
  });