import { useState } from "react";
import { PlanParams, TabToSelect, TabToSelectProps } from "./TabToSelect";

export type TabSelectProps = {
  planParams: PlanParams[];
  name: string;
  isMonthly: boolean;
  selectOption: (index: number) => void;
  planIndex: number;
};

export const TabSelect = (props: TabSelectProps) => {
  return (
    <>
      {props.planParams.map((param, index) => (
        <TabToSelect
          option={param}
          selectOption={() => props.selectOption(index)}
          isSelected={props.planIndex === index}
          isMonthly={props.isMonthly}
        />
      ))}
      <input
        type="hidden"
        name={props.name}
        value={props.planParams[props.planIndex].title}
      />
    </>
  );
};
