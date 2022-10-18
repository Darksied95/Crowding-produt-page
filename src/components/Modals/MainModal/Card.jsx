import React from "react";
import useSetRemainder from "../../../Hooks/useSetRemainder";

const Card = ({
  heading,
  article,
  price,
  index,
  activeCard,
  handleLabelClick,
  increaseBackers,
  increaseAmount,
  finished,
  remaining,
  decreaseRemainder,
}) => {
  function handleClick(price) {
    price = price || 0;
    increaseBackers();
    increaseAmount(+price);
  }

  function handleContinue(price) {
    decreaseRemainder(price);
    handleClick(price);
    finished();
  }

  const [inStock, setInStock] = React.useState(true);

  useSetRemainder(remaining, price, setInStock);

  return (
    <div
      className={
        inStock
          ? activeCard[index]
            ? `border-moderate-cyan border-2  rounded-lg p-6 mb-8 block`
            : `border-gray-300 border-2  rounded-lg p-6 mb-8 block`
          : "border-gray-300 border-2  rounded-lg p-6 mb-8 block opacity-50"
      }
      onClick={inStock ? () => handleLabelClick(index) : null}
    >
      <div className="mb-7 relative">
        <span className="absolute top-4 inline-flex justify-center items-center w-6 h-6 rounded-full border border-gray-300">
          <span
            className={
              activeCard[index]
                ? `bg-moderate-cyan inline-block w-3 h-3 rounded-full `
                : `inline-block w-3 h-3 rounded-full `
            }
          />
        </span>

        <header className=" md:flex">
          <h2 className="inline-block font-bold ml-10 mt-3.5  hover:text-moderate-cyan">
            {heading}
          </h2>

          {price && (
            <h3 className="text-moderate-cyan font-bold text-sm my-1 ml-10 md:mt-4 md:ml-3">
              Pledge ${price}
            </h3>
          )}
          {price && (
            <div className="hidden md:flex items-center gap-1 ml-auto">
              <h4 className="font-bold text-xl">{remaining["$" + price]}</h4>
              <span className="text-gray-400 text-sm font-medium">left</span>
            </div>
          )}
        </header>
      </div>

      <p className="text-gray-400 text-sm font-medium mb-6">{article}</p>
      {price && (
        <div className="flex items-center gap-1 md:hidden">
          <h3 className="font-bold text-xl">{remaining["$" + price]}</h3>
          <span className="text-gray-400 text-sm font-medium">left</span>
        </div>
      )}

      {activeCard[index] && (
        <div className="border-t-2 mt-4 -mx-6 pt-3 pl-4 ">
          <button
            className="bg-moderate-cyan px-8 py-3 mt-6 rounded-[2em] text-white text-sm  md:block md:ml-auto md:mr-6"
            onClick={(e) => handleContinue(price, e)}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
