import { useState } from "react";
import Cards from "./Cards";
import FinishedModal from "./FinishedModal";
import closeIcon from "../../../assets/icon-close-modal.svg";

const MainModal = () => {
  const [helo, sethelo] = useState();
  return (
    helo && (
      <>
        <div>
          <FinishedModal />
        </div>
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.5)] h-[460vh] md:h-[150vh]">
          <div className="bg-white w-[90vw]  max-w-[700px] mx-auto mt-4 px-6 py-px rounded-lg absolute top-24 left-2/4 -translate-x-1/2 md:h-[1060px] z-20">
            <header className="flex justify-between items-center mt-6 mb-4">
              <h1 className="font-bold ">Back this project</h1>
              <a href="/">
                <img src={closeIcon} alt="Close modal icon" />
              </a>
            </header>
            <p className="text-gray-400 text-sm font-medium mb-6">
              Want to support us in bringing MasterCraft Bamboo Monitor Riser
              out in the world?
            </p>
            <Cards />
          </div>
        </div>
      </>
    )
  );
};

export default MainModal;
