const baseImagePath = import.meta.env.BASE_URL;

const ThankYouState = ({ rating }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-8 rounded-2xl shadow-md bg-[linear-gradient(135deg,#252d37,#252d37)] h-fit w-fit mx-auto">
      <figure>
        <img src={`${baseImagePath}/illustration-thank-you.svg`} alt="" />
      </figure>
      <p className="text-Orange-500 text-sm p-2.5 rounded-full bg-Grey-950/20">
        You selected {rating} out of 5
      </p>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white pb-2">Thank You!</h3>
        <p className="text-Grey-500 w-[32ch] text-sm">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

ThankYouState.displayName = "ThankYouState";

export default ThankYouState;
