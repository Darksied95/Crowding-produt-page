import React from "react";
import closeIcon from "../../../assets/icon-close-modal.svg";
import Cards from "./Cards";

const MainModal = () => {
  return (
    <div className="bg-white w-[90vw]  max-w-[700px] mx-auto mt-4 px-6 py-px rounded-lg">
      <header className="flex justify-between items-center">
        <h1>Back this project</h1>
        <img src={closeIcon} alt="Close modal icon" />
      </header>
      <p className="text-gray-400 text-sm font-medium mb-6">
        Want to support us in bringing MasterCraft Bamboo Monitor Riser out in
        the world?
      </p>
      <Cards />
    </div>
  );
};

export default MainModal;
