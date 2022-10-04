import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SubmissionForm from "../SubmissionForm";

describe("SubmissionForm", () => {
    it("should render the basic fields", () => {
      render(<SubmissionForm />);
      expect(screen.getByRole("textbox", {name: "author"})).toBeInTheDocument();
    });
  });