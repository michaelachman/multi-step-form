export type ToggleProps = {
  defaultToggleState: boolean;
  toggleChange: () => void;
};

export const Toggle = (props: ToggleProps) => {
  return (
    <div className="mt-6 p-3 text-center bg-gray-100 rounded-lg">
      <p
        className={`${
          props.defaultToggleState ? "text-[#022959]" : "text-gray-400"
        } text-left inline-block text-sm font-bold pr-5`}
      >
        Monthly
      </p>
      <label className="label">
        <input
          className="input"
          type="checkbox"
          defaultChecked={!props.defaultToggleState}
          onClick={props.toggleChange}
        />
        <span className="span" />
      </label>
      <p
        className={`${
          props.defaultToggleState
            ? "text-gray-400"
            : "text-[#022959] font-bold"
        } text-right inline-block text-sm font-bold pl-5`}
      >
        Yearly
      </p>
    </div>
  );
};
