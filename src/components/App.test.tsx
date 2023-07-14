import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";


 test("is checking if app rendered first active step", () => {
    render(<App />);
    const firstActiveStep = screen.getByText("YOUR INFO");
    expect(firstActiveStep).toBeInTheDocument()
 });