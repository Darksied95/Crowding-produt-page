import doneIcon from "../../../assets/icon-check.svg";

const FinishedModal = ({ hideFinished }) => {
  return (
    <div className="min-w-[300px] max-w-[500px] bg-white p-10 absolute top-80 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-md">
      <img src={doneIcon} alt="done" className="m-auto" />
      <h1 className="text-center text-2xl font-bold">
        Thanks for your support!
      </h1>
      <p className="text-center my-5 text-sm leading-6  text-gray-400">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className="block bg-moderate-cyan py-3 px-10 text-white rounded-full m-auto hover:bg-dark-cyan"
        onClick={hideFinished}
      >
        Got it!
      </button>
    </div>
  );
};

export default FinishedModal;
