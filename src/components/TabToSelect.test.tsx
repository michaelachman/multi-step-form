import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TabToSelect, { PlanParams } from "./TabToSelect";



 test("basically testing whole TabToSelect component", () => {

    function selectOption() {
        return true;
    }

const options: PlanParams = {
    key: 1,
    image: "testimage1",
    title: "testtitle1",
    monthlyCost: 100,
    yearlyCost: 100,
    yearlyText: "testyearly1"
  }

    render(<TabToSelect option={options} isSelected={true} isMonthly={false} selectOption={selectOption} />);
    const firstDiv = screen.getByRole("firstDiv")
    const imgElement = screen.getByRole("imgElement")
    const firstParagraph = screen.getByRole("firstParagraph")
    const secondParagraph = screen.getByRole("secondParagraph")
    const thirdParagraph = screen.getByRole("thirdParagraph")
    // const indexDiv = screen.getByRole("indexDiv")
    expect(firstDiv).toHaveProperty("className", "border-[#483EFF] bg-[#F8F9FF] flex border py-4 pl-4 mt-2 rounded-lg md:flex-col md:w-1/3 md:gap-7");
    fireEvent.click(firstDiv);
    // expect(selectOption).toHaveBeenCalledTimes(1)
    expect(imgElement).toHaveProperty("src", "testimage1")
    expect(firstParagraph).toHaveTextContent("testtitle1")
    expect(secondParagraph).toHaveTextContent("$100/yr")
    expect(thirdParagraph).toHaveTextContent("testyearly1")
    // expect(stepDiv).toHaveTextContent("TEST")
    // expect(indexDiv).toContain("2")
 });