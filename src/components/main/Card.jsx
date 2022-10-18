import React from "react";

const Card = ({ heading, price, article, remaining, setShowMainModal }) => {
  const [inStock, setInStock] = React.useState(true);
  React.useEffect(() => {
    if (remaining["$" + price] <= 0) {
      setInStock(false);
    }
  }, [remaining, price]);

  return (
    <div
      className={
        inStock
          ? `border-2 border-gray-300  rounded-lg p-6 mb-8`
          : `border-2 border-gray-300  rounded-lg p-6 mb-8 opacity-50`
      }
    >
      <div className="sm:flex justify-between">
        <h1 className="font-bold mb-1">{heading}</h1>
        <h2 className="text-moderate-cyan font-meduim mb-4">
          {`Pledge $${price} or more`}
        </h2>
      </div>
      <p className="text-gray-400 text-sm font-medium mb-6">{article}</p>
      <div className="sm:flex justify-between">
        <div className="flex items-center gap-1">
          <h3 className="font-bold text-3xl">{remaining["$" + price]}</h3>
          <span className="text-gray-400 text-sm font-medium">left</span>
        </div>

        {inStock ? (
          <button
            className="bg-moderate-cyan px-8 py-3 mt-6 rounded-[2em] text-white text-sm hover:bg-dark-cyan"
            onClick={() => setShowMainModal(true)}
          >
            Select Reward
          </button>
        ) : (
          <button className="bg-gray-500 px-8 py-3 mt-6 rounded-[2em] text-white text-sm cursor-not-allowed">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
