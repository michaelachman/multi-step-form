import { TabSelect } from "./TabSelect";
import { PlanParams } from "./TabToSelect";
import { Toggle } from "./Toggle";

export type SelectYourPlanProps = {
  isMonthly: boolean;
  changePlanTime: () => void;
  selectOption: (key: number) => void;
  planParams: PlanParams[];
  planKey: number;
};

export const SelectYourPlan = (props: SelectYourPlanProps) => {
  return (
    <div className="pb-4">
      <div className="title px-6 pt-8 md:px-0">
        <h1 className="text-2xl font-bold text-[#022959] pb-2">
          Select your plan
        </h1>
        <p className="font-normal text-[#9699AA] mb-6">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="mx-6 pb-6 md:mx-0 md:pb-2">
        
        <form className="mb-5 md:flex md:flex-row md:gap-5">
          <TabSelect
            planParams={props.planParams}
            name="Params"
            isMonthly={props.isMonthly}
            selectOption={(key) => props.selectOption(key)}
            planKey={props.planKey}
          />
        </form>
        
        <Toggle
          isMonthly={props.isMonthly}
          toggleChange={props.changePlanTime}
        />
        </div>
      </div>
    
  );
};
