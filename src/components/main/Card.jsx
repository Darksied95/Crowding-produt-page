import React from "react";

const Card = ({ heading, price, article, setShowMainModal }) => {
  return (
    <div className="border-2 border-gray-300  rounded-lg p-6 mb-8">
      <div className="sm:flex justify-between">
        <h1 className="font-bold mb-1">
          <a href="/">{heading}</a>
        </h1>
        <h2 className="text-moderate-cyan font-meduim mb-4">
          {`Pledge $${price} or more`}
        </h2>
      </div>
      <p className="text-gray-400 text-sm font-medium mb-6">{article}</p>
      <div className="sm:flex justify-between">
        <div className="flex items-center gap-1">
          <h3 className="font-bold text-3xl">101</h3>
          <span className="text-gray-400 text-sm font-medium">left</span>
        </div>
        <button
          className="bg-moderate-cyan px-8 py-3 mt-6 rounded-[2em] text-white text-sm hover:bg-dark-cyan"
          onClick={() => setShowMainModal(true)}
        >
          Select Reward
        </button>
      </div>
    </div>
  );
};
export default Card;
