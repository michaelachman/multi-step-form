import { AddonParams } from "./Addon";
import { PlanParams } from "./TabToSelect";

export type FinishingUpProps = {
  isMonthly: boolean;
  planIndex: number;
  planParams: PlanParams[];
  addonsParams: AddonParams[];
  changeActiveStep: () => void;
  selectedAddonsKeys: number[];
  totalPrice: number;
};

export const FinishingUp = (props: FinishingUpProps) => {
  const monthlyPlan = `$${props.planParams[props.planIndex].monthlyCost}/mo`;
  const yearlyPlan = `$${props.planParams[props.planIndex].yearlyCost}/yr`;

  return (
    <div className="card bg-white relative mx-4 rounded-lg drop-shadow-lg">
      <div className="title px-6 pt-8">
        <h1 className="text-2xl font-bold text-[#022959] pb-2">Finishing up</h1>
        <p className="font-normal text-[#9699AA] mb-6">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="mx-6 pb-3 pt-4 px-4 bg-gray-100 rounded-lg">
        <div className="mb-0 flex justify-between">
          <div className="">
            <p className="font-bold text-[#022959]">
              {props.planParams[props.planIndex].title}{" "}
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
          {props.selectedAddonsKeys.map((param) => (
            <div className="flex justify-between pb-2">
              <div className="">
                <p className="text-gray-400">
                  {props.addonsParams[param].title}
                </p>
              </div>
              <div>
                <p className="font-bold text-[#022959] text-sm pr-4">
                  {props.isMonthly
                    ? `+$${props.addonsParams[param].monthlyCost}/mo`
                    : `+$${props.addonsParams[param].yearlyCost}/yr`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 pb-8 mx-6 px-4 flex justify-between">
        <p className="text-gray-400">
          Total {props.isMonthly ? "(per month)" : "(per year)"}
        </p>

        <p className="text-right font-bold text-[#022959]">
          {props.isMonthly
            ? `+$${props.totalPrice}/mo`
            : `+$${props.totalPrice}/yr`}
        </p>
      </div>
    </div>
  );
};
