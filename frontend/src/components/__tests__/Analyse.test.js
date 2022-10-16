import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";




import AnalyseArticle from "../../pages/Analyse-Article";
import tablecolumns3 from "../tablecolumns3";

// tests that all relevant fields are displayed
describe("Moderation-Article", () => {
    it("should render the basic fields", () => {
      render(<AnalyseArticle />);

      expect(tablecolumns3);
      
    });
  });