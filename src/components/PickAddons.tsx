import { AddonParams } from "./Addon";
import { SelectedAddonsInput } from "./SelectedAddonsInput";

export type PickAddonsProps = {
  isMonthly: boolean;
  addonsParams: AddonParams[];
  toggleAddons: (key: number) => void;
  // toggleAddons: (event: React.MouseEvent<HTMLElement>) => void;
  selectedAddonsKeys: number[];
  isSelected: (key: number) => boolean;
};

export const PickAddons = (props: PickAddonsProps) => {
  return (
    <div>
      <div className="title px-6 pt-8 md:px-0">
        <h1 className="text-2xl font-bold text-[#022959] pb-2">Pick add-ons</h1>
        <p className="font-normal text-[#9699AA] mb-6">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="mx-6 pb-10 mt-5 mb-8 md:mx-0">
        <form>
          <SelectedAddonsInput
            isMonthly={props.isMonthly}
            addonsParams={props.addonsParams}
            toggleAddons={props.toggleAddons}
            selectedAddonsKeys={props.selectedAddonsKeys}
            isSelected={(key) => props.isSelected(key)}
          />
        </form>
      </div>
    </div>
  );
};
