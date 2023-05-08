import { useState } from "react";
import { TabSelect } from "./TabSelect";
import { PlanParams, TabToSelect } from "./TabToSelect";
import { Toggle } from "./Toggle";

export type SelectYourPlanProps = {
  isMonthly: boolean;
  changeState: () => void;
  onChange: (index: number) => void;
  planParams: PlanParams[];
};

export const SelectYourPlan = (props: SelectYourPlanProps) => {
  return (
    <div className="card bg-white relative mx-4 rounded-lg drop-shadow-lg">
      <div className="title px-6 pt-8">
        <h1 className="text-2xl font-bold text-[#022959] pb-2">
          Select your plan
        </h1>
        <p className="font-normal text-[#9699AA] mb-6">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="mx-6 pb-6">
        <form>
          <TabSelect
            planParams={props.planParams}
            name="Params"
            state={props.isMonthly}
            onChange={props.onChange}
          />
        </form>
        <Toggle planState={props.isMonthly} changeState={props.changeState} />
      </div>
    </div>
  );
};
