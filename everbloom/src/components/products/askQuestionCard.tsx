

const AskQuestionCard = () => {
    return (
      <div className="w-full h-auto border-1 border-border p-6  rounded-lg shadow-md flex flex-col mt-8">
        <h2 className="text-xl font-bold mb-4">Still Stuck?!</h2>
        <p className="mb-6">Just leave us a message here and we'll call to answer your questions for <span className="font-semibold">FREE!</span></p>
        <form className=" flex flex-col grow">
          <input
            type="text"
            placeholder="Enter your name"
            className=" w-full p-2 mb-4 border-1 rounded-lg border-border focus:outline-none focus:ring focus:ring-txtSecondary"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            className=" w-full p-2 mb-4 border-1 rounded-lg border-border focus:outline-none focus:ring focus:ring-txtSecondary"
          />
          <textarea
            placeholder="Tell us what's wrong..."
            className="grow w-full p-2 mb-4 border-1 rounded-lg border-border focus:outline-none focus:ring focus:ring-txtSecondary"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
          >
            Ask your Question
          </button>
        </form>
      </div>
    );
  };
  
  export default AskQuestionCard;