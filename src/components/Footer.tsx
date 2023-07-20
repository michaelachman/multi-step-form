export type FooterProps = {
  index: number;
  nextStep: () => void;
  goBack: () => void;
  confirmButton: () => void;
  isValid: boolean;
};

export const Footer = (props: FooterProps) => {


  return (
      <div className="absolute footer flex justify-between h-[72px] bottom-0 w-full bg-white md:static md:h-full md:pr-16">
        {props.index !== 1 && (
          <button
            onClick={props.goBack}
            className="ml-4 text-[#9699AA] font-medium text-base md:ml-0"
          >
            Go back
          </button>
        )}
        {props.index === 1 && (
          <button
          disabled={!props.isValid}
          onClick={() => props.nextStep()}
            className="ml-auto mr-4 justify-self-end w-24 h-10 my-4 bg-[#022959] text-white rounded-md"
          >
            Next step
          </button>
          
        )}
        {props.index !== 1 && props.index !== 4 && (
          <button
            onClick={props.nextStep}
            className="ml-auto mr-4 w-24 h-10 my-4 bg-[#022959] text-white rounded-md"
          >
            Next step
          </button>
        )}
        {props.index === 4 && (
          <button
            onClick={props.confirmButton}
            className="ml-auto mr-4 w-24 h-10 my-4 bg-[#483EFF] text-white rounded-md"
          >
            Confirm
          </button>
        )}
      </div>
  );
};
