import { Addon, AddonParams } from "./Addon";

export type SelectedAddonsInputProps = {
  addonsParams: AddonParams[];
  isMonthly: boolean;
  toggleAddons: (key: number) => void;
  // toggleAddons: (event: React.MouseEvent<HTMLElement>) => void;
  selectedAddonsKeys: number[];
  isSelected: (key: number) => boolean;
};

export const SelectedAddonsInput = (props: SelectedAddonsInputProps) => {
  return (
    <>
      {props.addonsParams.map((param) => (
        <Addon
          addonsParams={param}
          toggleAddons={() => props.toggleAddons(param.key)}
          isSelected={props.isSelected(param.key)}
          isMonthly={props.isMonthly}
        />
      ))}

      <input
        type="hidden"
        // value={props.selectedAddonsKeys.map((i) => props.addonsParams[i].title)}
      ></input>
    </>
  );
};
