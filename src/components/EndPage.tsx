export const EndPage = () => {
  return (
    <div className="flex flex-row text-center md:mt-24 pt-9 pb-14">
      <div className="title px-6 pt-8 md:px-0">
        <div className="flex justify-center">
          <img
            className="scale-75"
            src="src\assets\images\icon-thank-you.svg"
            alt="thankyouimage"
          ></img>
        </div>
        <h1 className="text-2xl font-bold text-[#022959] pb-2">Thank you!</h1>
        <p className="font-normal text-[#9699AA] mb-6" role="thankyouparagraph">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default EndPage