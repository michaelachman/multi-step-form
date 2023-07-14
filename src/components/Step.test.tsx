import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Step from "./Step";


 test("is checking if Step component rendered active step of index 2 and title TEST", () => {
    render(<Step index={2} title={"TEST"} active={true} />);
    const stepDiv = screen.getByRole("stepDiv")
    const indexDiv = screen.getByRole("indexDiv")
    expect(stepDiv).toHaveTextContent("STEP 2");
    expect(stepDiv).toHaveTextContent("TEST")
    expect(indexDiv).toHaveProperty("className", "step border border-slate-200 rounded-full w-[33px] h-[33px] flex items-center justify-center bg-[#BEE2FD] text-black font-bold md:self-center")
    // expect(indexDiv).toContain("2")
 });