import { useState } from "react";
import { TabSelect } from "./TabSelect";
import { PlanParams, TabToSelect } from "./TabToSelect";
import { Toggle } from "./Toggle";

export type SelectYourPlanProps = {
  isMonthly: boolean;
  changePlanTime: () => void;
  selectOption: (index: number) => void;
  planParams: PlanParams[];
  planIndex: number;
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
            isMonthly={props.isMonthly}
            selectOption={(index) => props.selectOption(index)}
            planIndex={props.planIndex}
          />
        </form>
        <Toggle
          defaultToggleState={props.isMonthly}
          toggleChange={props.changePlanTime}
        />
      </div>
    </div>
  );
};
