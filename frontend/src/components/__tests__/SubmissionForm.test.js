import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SubmissionForm from "../SubmissionForm";

// tests that all relevant fields are displayed
describe("SubmissionForm", () => {
    it("should render the basic fields", () => {
      render(<SubmissionForm />);

      expect(screen.getByTestId("author")).toBeInTheDocument();
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("journal")).toBeInTheDocument();
      expect(screen.getByTestId("pubyear")).toBeInTheDocument();
      expect(screen.getByTestId("volume")).toBeInTheDocument();
      expect(screen.getByTestId("doi")).toBeInTheDocument();
      expect(screen.getByTestId("issn")).toBeInTheDocument();
      expect(screen.getByTestId("other")).toBeInTheDocument();
    });
  });