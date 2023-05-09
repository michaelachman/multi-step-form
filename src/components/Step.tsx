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
    <div>
      <div
        className={`step border border-slate-200 rounded-full w-[33px] h-[33px] flex items-center justify-center ${stepClass}`}
      >
        {props.index}
      </div>
      <div className="hidden md:flex">{props.title}</div>
    </div>
  );
};
