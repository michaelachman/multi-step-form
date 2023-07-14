import { PlanParams, TabToSelect } from "./TabToSelect";

export type TabSelectProps = {
  planParams: PlanParams[];
  name: string;
  isMonthly: boolean;
  selectOption: (key: number) => void;
  planKey: number;
};

export const TabSelect = (props: TabSelectProps) => {
  return (
    <>
      {props.planParams.map((param, index) => (

        
        <TabToSelect
          option={param}
          selectOption={() => props.selectOption(param.key)}
          isSelected={props.planKey === index+1}
          isMonthly={props.isMonthly}
        />
      ))}
      <input
        type="hidden"
        // name={props.name}
        // value={props.planParams[props.planIndex].title}
      />
    </>
  );
};
