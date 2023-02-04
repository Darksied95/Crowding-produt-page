import { useState, useEffect } from "react";
import Cards from "./Cards";
import FinishedModal from "./FinishedModal";
import closeIcon from "../../../assets/icon-close-modal.svg";
import "./mainModal.css";

const MainModal = ({
  onHide,
  remaining,
  increaseBackers,
  increaseAmount,
  decreaseRemainder,
}) => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, [finished]);

  function setFinishedToTrue() {
    setFinished(true);
  }
  function setFinishedToFalse() {
    setFinished(false);
  }
  return (
    <>
      {finished ? (
        <FinishedModal hideFinished={setFinishedToFalse} />
      ) : (
        <div
          className={
            finished
              ? `bg-white w-[90vw] opacity-0 max-w-[700px] mx-auto mt-4 px-6 py-px rounded-lg absolute top-24 left-2/4 -translate-x-1/2 md:h-[1060px] z-20 mainModal`
              : `bg-white w-[90vw] opacity-0 max-w-[700px] mx-auto mt-4 px-6 py-px rounded-lg absolute top-24 left-2/4 -translate-x-1/2 md:h-[1060px] z-20 mainModal`
          }
        >
          <header className="flex justify-between items-center mt-6 mb-4">
            <h1 className="font-bold ">Back this project</h1>
            <img
              src={closeIcon}
              className="cursor-pointer"
              alt="Close modal icon"
              onClick={onHide}
            />
          </header>
          <p className="text-gray-400 text-sm font-medium mb-6">
            Want to support us in bringing MasterCraft Bamboo Monitor Riser out
            in the world?
          </p>
          <Cards
            increaseAmount={increaseAmount}
            increaseBackers={increaseBackers}
            finished={setFinishedToTrue}
            remaining={remaining}
            decreaseRemainder={decreaseRemainder}
          />
        </div>
      )}
    </>
  );
};

export default MainModal;
