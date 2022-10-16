import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";



import ModerationArticle from "../../pages/Moderation-Article";
import tablecolumns2 from "../tablecolumns2";

// tests that all relevant fields are displayed
describe("Moderation-Article", () => {
    it("should render the basic fields", () => {
      render(<ModerationArticle />);

      expect(tablecolumns2);
      
    });
  });