export type ToggleProps = {
  isMonthly: boolean;
  toggleChange: () => void;
};

export const Toggle = (props: ToggleProps) => {
  return (
    <div className="p-3 text-center bg-gray-100 rounded-lg">
      <p
        className={`${
          props.isMonthly ? "text-[#022959]" : "text-gray-400"
        } text-left inline-block text-sm font-bold pr-5`}
      >
        Monthly
      </p>
      <label className="label">
        <input
          className="input"
          type="checkbox"
          defaultChecked={!props.isMonthly}
          onClick={props.toggleChange}
        />
        <span className="span" />
      </label>
      <p
        className={`${
          props.isMonthly ? "text-gray-400" : "text-[#022959] font-bold"
        } text-right inline-block text-sm font-bold pl-5`}
      >
        Yearly
      </p>
    </div>
  );
};
