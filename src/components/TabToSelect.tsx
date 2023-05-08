export type PlanParams = {
  image: string;
  title: string;
  monthlyCost: number;
  yearlyCost: number;
  yearlyText: string;
};

export type TabToSelectProps = {
  option: PlanParams;
  onClick: () => void;
  isSelected: boolean;
  state: boolean;
};

export const TabToSelect = (props: TabToSelectProps) => {
  const monthly = `$${props.option.monthlyCost}/mo`;
  const yearly = `$${props.option.yearlyCost}/yr`;

  return (
    <div
      onClick={props.onClick}
      className={`${
        props.isSelected ? "border-[#483EFF] bg-[#F8F9FF]" : "bg-transparent"
      } flex border py-4 pl-4 mt-2 rounded-lg`}
    >
      <img src={props.option.image}></img>
      <div className="ml-3">
        <p className="text-[#022959] font-bold text-base">
          {props.option.title}
        </p>
        <p className="text-gray-500 text-sm">
          {props.state === true ? monthly : yearly}
        </p>
        <p className="text-[#022959] text-sm">
          {props.state === false && props.option.yearlyText}
        </p>
      </div>
    </div>
  );
};
