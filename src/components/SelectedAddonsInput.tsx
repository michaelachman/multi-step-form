import { useEffect, useState } from "react";
import { Addon, AddonParams } from "./Addon";

export type SelectedAddonsInputProps = {
  addonsParams: AddonParams[];
  isMonthly: boolean;
  toggleAddons: (index: number) => void;
  selectedAddonsIndex: number[];
};

export const SelectedAddonsInput = (props: SelectedAddonsInputProps) => {
  function isSelected(index: number) {
    if (props.selectedAddonsIndex.includes(index)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {props.addonsParams.map((param, index) => (
        <Addon
          addonsParams={param}
          toggleAddons={() => props.toggleAddons(index)}
          isSelected={isSelected(index)}
          isMonthly={props.isMonthly}
        />
      ))}

      <input
        type="hidden"
        value={props.selectedAddonsIndex.map(
          (i) => props.addonsParams[i].title
        )}
      ></input>
    </>
  );
};
