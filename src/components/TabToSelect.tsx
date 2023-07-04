export type PlanParams = {
  key: number;
  image: string;
  title: string;
  monthlyCost: number;
  yearlyCost: number;
  yearlyText: string;
};

export type TabToSelectProps = {
  option: PlanParams;
  selectOption: () => void;
  isSelected: boolean;
  isMonthly: boolean;
};

export const TabToSelect = (props: TabToSelectProps) => {
  const monthly = `$${props.option.monthlyCost}/mo`;
  const yearly = `$${props.option.yearlyCost}/yr`;

  return (
    <div
      onClick={props.selectOption}
      className={`${
        props.isSelected ? "border-[#483EFF] bg-[#F8F9FF]" : "bg-transparent"
      } flex border py-4 pl-4 mt-2 rounded-lg md:flex-col md:w-1/3 md:gap-7`}
    >
      <img className="md:w-[40px] md:h-[40px]" src={props.option.image}></img>
      <div className="ml-3 md:ml-0">
        <p className="text-[#022959] font-bold text-base">
          {props.option.title}
        </p>
        <p className="text-gray-500 text-sm">
          {props.isMonthly === true ? monthly : yearly}
        </p>
        <p className="text-[#022959] text-sm">
          {props.isMonthly === false && props.option.yearlyText}
        </p>
      </div>
    </div>
  );
};
