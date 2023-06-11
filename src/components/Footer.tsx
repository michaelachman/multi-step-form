export type FooterProps = {
  index: number;
  nextStep: () => void;
  goBack: () => void;
  confirmButton: () => void;
  validityCheck: () => void;
};

export const Footer = (props: FooterProps) => {
  return (
    <div>
      <div className="footer absolute bottom-0 w-full h-[72px] bg-white">
        {props.index !== 1 && (
          <button
            onClick={props.goBack}
            className="absolute left-4 mt-[25px] text-[#9699AA] font-medium text-base"
          >
            Go back
          </button>
        )}
        {props.index === 1 && (
          <button
          onClick={props.validityCheck}
            className="absolute w-24 h-10 my-4 right-4 bg-[#022959] text-white rounded-md"
          >
            Next step
          </button>
        )}
        {props.index !== 4 && (
          <button
            onClick={props.nextStep}
            className="absolute w-24 h-10 my-4 right-4 bg-[#022959] text-white rounded-md"
          >
            Next step
          </button>
        )}
        {props.index === 4 && (
          <button
            onClick={props.confirmButton}
            className="absolute w-24 h-10 my-4 right-4 bg-[#022959] text-white rounded-md"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};
