import { AddonParams } from "./Addon";
import { PlanParams } from "./TabToSelect";

export type FinishingUpProps = {
  isMonthly: boolean;
  planKey: number;
  planParams: PlanParams[];
  addonsParams: AddonParams[];
  changeActiveStep: () => void;
  selectedAddonsKeys: number[];
  totalPrice: number;
};

export const FinishingUp = (props: FinishingUpProps) => {
  const monthlyPlan = `$${props.planParams[props.planKey - 1].monthlyCost}/mo`;
  const yearlyPlan = `$${props.planParams[props.planKey - 1].yearlyCost}/yr`;

  return (
    <div>
      <div className="title px-6 pt-8 md:px-0">
        <h1 className="text-2xl font-bold text-[#022959] pb-2">Finishing up</h1>
        <p className="font-normal text-[#9699AA] mb-6">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="mx-6 pb-3 pt-4 px-4 bg-gray-100 rounded-lg md:mx-0">
        <div className="mb-0 flex justify-between">
          <div className="">
            <p className="font-bold text-[#022959]">
              {props.planParams[props.planKey - 1].title}{" "}
              {props.isMonthly ? "(Monthly)" : "(Yearly)"}
            </p>
            <p
              className="underline text-gray-400"
              onClick={props.changeActiveStep}
            >
              Change
            </p>
          </div>
          <div className="self-center">
            <p className="font-bold text-[#022959] text-sm pr-2">
              {props.isMonthly ? monthlyPlan : yearlyPlan}
            </p>
          </div>
        </div>
        {props.selectedAddonsKeys.length === 0 ? undefined : (
          <>
            <hr className="mt-2"></hr>
          </>
        )}

        <div className="pt-3">
          {props.selectedAddonsKeys.map((key) => (
            <div className="flex justify-between pb-2">
              <div className="">
                <p className="text-gray-400">
                  {props.addonsParams[key - 1].title}
                </p>
              </div>
              <div>
                <p className="text-[#022959] text-sm pr-4 font-medium">
                  {props.isMonthly
                    ? `+$${props.addonsParams[key - 1].monthlyCost}/mo`
                    : `+$${props.addonsParams[key - 1].yearlyCost}/yr`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 pb-8 mx-6 px-4 flex justify-between md:mx-0">
        <p className="text-gray-400">
          Total {props.isMonthly ? "(per month)" : "(per year)"}
        </p>

        <p className="text-right font-bold text-[#483EFF] text-xl">
          {props.isMonthly
            ? `+$${props.totalPrice}/mo`
            : `+$${props.totalPrice}/yr`}
        </p>
      </div>
    </div>
  );
};
