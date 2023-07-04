export type AddonParams = {
  key: number;
  title: string;
  description: string;
  monthlyCost: number;
  yearlyCost: number;
};

export type AddonsProps = {
  addonsParams: AddonParams;
  toggleAddons: () => void;
  isSelected: boolean;
  isMonthly: boolean;
};

export const Addon = (props: AddonsProps) => {
  const monthly = `+$${props.addonsParams.monthlyCost}/mo`;
  const yearly = `+$${props.addonsParams.yearlyCost}/yr`;

  return (
    <div
      className={`${
        props.isSelected
          ? `border-[#483EFF] bg-[#F8F9FF]`
          : `border-gray-300 bg-white`
      } flex border py-3 pl-4 mt-2 rounded-lg text-sm md:h-20 md:items-center`}
      onClick={props.toggleAddons}
    >
      <div className="flex flex-row w-full">
        <div
          className={`h-[20px] w-[20px] flex border rounded self-center ${
            props.isSelected ? `bg-[#483EFF]` : `bg-white`
          }`}
        >
          {props.isSelected ? (
            <img
              className="scale-75 justify-center"
              src="src\assets\images\icon-checkmark.svg"
            ></img>
          ) : undefined}
          {/* <img src="src\assets\images\icon-checkmark.svg"></img> */}
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="info flex-col pl-4">
            <p className="text-[#022959] font-bold">
              {props.addonsParams.title}
            </p>
            <p className="text-gray-400 text-xs">
              {props.addonsParams.description}
            </p>
          </div>
          <div className="cost flex pl-3 pr-4 items-center">
            <p className="text-[#483EFF] font-medium text-xs">
              {props.isMonthly ? monthly : yearly}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
