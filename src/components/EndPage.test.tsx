import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import EndPage from "./EndPage";


 test("is checking if EndPage rendered thank you paragraph properly", () => {
    render(<EndPage />);
    const image = screen.getByRole("thankyouparagraph")
    expect(image).toHaveTextContent("Thanks for confirming your subscription!");
 });