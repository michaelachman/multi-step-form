import { AddonParams } from "./Addon";
import { SelectedAddonsInput } from "./SelectedAddonsInput";

export type PickAddonsProps = {
  isMonthly: boolean;
  addonsParams: AddonParams[];
  toggleAddons: (index: number) => void;
  selectedAddonsIndex: number[];
  isSelected: (index: number) => boolean;
};

export const PickAddons = (props: PickAddonsProps) => {
  return (
    <div className="card bg-white relative mx-4 rounded-lg drop-shadow-lg">
      <div className="title px-6 pt-8">
        <h1 className="text-2xl font-bold text-[#022959] pb-2">Pick add-ons</h1>
        <p className="font-normal text-[#9699AA] mb-6">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="mx-6 pb-6 mt-5 mb-8">
        <form>
          <SelectedAddonsInput
            isMonthly={props.isMonthly}
            addonsParams={props.addonsParams}
            toggleAddons={props.toggleAddons}
            selectedAddonsIndex={props.selectedAddonsIndex}
            isSelected={(index) => props.isSelected(index)}
          />
        </form>
      </div>
    </div>
  );
};