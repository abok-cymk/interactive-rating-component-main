import { useState } from "react";
import ThankYouState from "./components/ThankYouState";
import { useCallback } from "react";

const baseImagePath = import.meta.env.BASE_URL;

function App() {

 const [selectedRating, setSelectedRating] = useState(null);
 const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = useCallback((rating) => {
    setSelectedRating(rating);
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  }, [selectedRating]);

  return (
    <>
      <main>
        <h1 className="sr-only">Interactive Rating Component</h1>
        <section>
          {isSubmitted ? (
            <ThankYouState rating={selectedRating} />
          ) : (
            <div className="flex flex-col gap-8 p-8 rounded-2xl shadow-md bg-[linear-gradient(135deg,#252d37,#252d37)] h-fit max-w-md w-full">
              <figure className="bg-Grey-500 p-2 w-fit rounded-full">
                <img
                  src={`${baseImagePath}/icon-star.svg`}
                  alt=""
                  className="block"
                />
              </figure>
              <div>
                <h2 className="text-white font-bold text-3xl pb-2">
                  How did we do?
                </h2>
                <p className="text-Grey-500 md:w-[35ch] text-sm">
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <ul className="flex justify-between">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleRatingClick(item)}
                        className={`bg-Grey-950/25 text-sm shadow rounded-full px-4.5 py-2.5 font-bold h-fit w-fit flex items-center justify-center hover:bg-Orange-500 text-Grey-500 hover:text-Grey-950 cursor-pointer transition-colors duration-300 ${
                          selectedRating === item
                            ? "bg-white text-Grey-950"
                            : ""
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-Orange-500 w-full py-2.5 rounded-full cursor-pointer hover:bg-white uppercase text-Grey-950 font-bold text-sm transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
