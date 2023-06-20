export type StepProps = {
  index: number;
  title: string;
  active?: boolean;
};

export const Step = (props: StepProps) => {
  const stepClass = props.active
    ? "bg-[#BEE2FD] text-black font-bold"
    : "bg-transparent text-white";

  return (
    <div className="flex md:py-1">
      <div
        className={`step border border-slate-200 rounded-full w-[33px] h-[33px] flex items-center justify-center ${stepClass} md:self-center`}
      >
        {props.index}
      </div>
      <div className="hidden md:inline-block text-white font-semibold md:my-0 md:pl-4">
        <p className="md:font-normal md:text-xs">STEP {props.index}</p>
        {/* <br className="md:h-1"></br> */}
        <p>{props.title}</p>
      </div>
    </div>
  );
};
