import React from "react";

const Card = ({ heading, article, price }) => {
  return (
    <label className="border-2 border-gray-300  rounded-lg p-6 mb-8 block checked:border-moderate-cyan disabled">
      <div className="mb-7 relative">
        <span className="absolute top-4 inline-flex justify-center items-center w-6 h-6 rounded-full border border-gray-300">
          <span className="inline-block w-3 h-3 bg-moderate-cyan rounded-full " />
        </span>
        <header className=" md:flex">
          <h2 className="inline-block font-bold ml-10 mt-3.5">{heading}</h2>
          {price && (
            <h3 className="text-moderate-cyan font-bold text-sm my-1 ml-10 md:mt-4 md:ml-3">
              Pledge ${price}
            </h3>
          )}
          {price && (
            <div className="hidden md:flex items-center gap-1 ml-auto">
              <h4 className="font-bold text-xl">101</h4>
              <span className="text-gray-400 text-sm font-medium">left</span>
            </div>
          )}
        </header>
      </div>
      <p className="text-gray-400 text-sm font-medium mb-6">{article}</p>
      {price && (
        <div className="flex items-center gap-1 md:hidden">
          <h3 className="font-bold text-xl">101</h3>
          <span className="text-gray-400 text-sm font-medium">left</span>
        </div>
      )}
      <div className="border-t-2 mt-4 -mx-6 pt-3 hidden">
        <button className="bg-moderate-cyan px-8 py-3 mt-6 rounded-[2em] text-white text-sm  md:block md:ml-auto md:mr-6">
          Continue
        </button>
      </div>
    </label>
  );
};

export default Card;
