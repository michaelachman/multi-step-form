import { useState } from "react";
import { PlanParams, TabToSelect, TabToSelectProps } from "./TabToSelect";

export type TabSelectProps = {
  planParams: PlanParams[];
  name: string;
  state: boolean;
  onChange: (index: number) => void;
};

export const TabSelect = ({
  planParams,
  name,
  state,
  onChange,
}: TabSelectProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function selectOption(index: number) {
    setSelectedIndex(index);
    onChange(index);
  }

  return (
    <>
      {planParams.map((param, index) => (
        <TabToSelect
          option={param}
          onClick={() => selectOption(index)}
          isSelected={selectedIndex === index}
          state={state}
        />
      ))}
      <input
        type="hidden"
        name={name}
        value={planParams[selectedIndex].title}
      />
    </>
  );
};
