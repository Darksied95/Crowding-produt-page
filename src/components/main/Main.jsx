import { useEffect, useState } from "react";
import Cards from "./Cards";
import MainModal from "../Modals/MainModal/MainModal";
import BookmarkSvg from "./../../assets/BookmarkSvg";
import mastercraft from "../../assets/logo-mastercraft.svg";

const Main = ({ setShowMainModal, showMainModal }) => {
  let remainingAmount = {
    $25: 160,
    $75: 82,
    $200: 1,
  };

  const [amountInString, setAmountInString] = useState("89,900");
  const [amountInPercentage, setAmountInPercentage] = useState(89.9);
  const [backers, setBackers] = useState("5,007");
  const [bookmarked, setBookmarked] = useState(false);
  const [remaining, setRemaining] = useState(remainingAmount);

  function increaseAmount(amount) {
    let totalAmount = +amountInString.replace(/,/g, "");
    totalAmount += amount;
    totalAmount = totalAmount.toLocaleString();
    setAmountInString(totalAmount);
  }

  function increaseBackers() {
    let totalBackers = +backers.replace(/,/g, "");
    totalBackers++;
    totalBackers = totalBackers.toLocaleString();
    setBackers(totalBackers);
  }

  function hideModal() {
    setShowMainModal(false);
  }

  function showModal() {
    setShowMainModal(true);
  }

  function handleBookmarked() {
    setBookmarked(!bookmarked);
  }

  function decreaseRemainder(price) {
    const arr = remaining;
    arr["$" + price]--;
    setRemaining(arr);
  }
  useEffect(() => {
    let totalAmount = +amountInString.replace(/,/g, "");
    let percentage = (totalAmount / 100000) * 100;
    setAmountInPercentage(percentage);
  }, [amountInString]);

  return (
    <div>
      <section className="relative bg-white w-[90vw] max-w-[700px] mx-auto -mt-10 rounded-md">
        <img
          src={mastercraft}
          alt="mastercraft logo"
          className="absolute left-1/2 -translate-x-1/2 -top-6"
        />
        <div className="p-5 pt-1">
          <h1 className="font-bold text-xl text-center mx-11 mt-12 mb-4">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-gray-400 text-center text-sm">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="flex mt-4 justify-between">
            <button
              className="bg-moderate-cyan px-14 py-1 rounded-[2em] text-white text-sm hover:bg-dark-cyan"
              onClick={showModal}
            >
              Back this project
            </button>

            <div className="flex" onClick={handleBookmarked}>
              <BookmarkSvg bookmarked={bookmarked} />
              {!bookmarked ? (
                <p className="hidden sm:block bg-gray-300 rounded-3xl py-3.5 pl-10 pr-6 -ml-9 self-center text-sm">
                  Bookmark
                </p>
              ) : (
                <p className="hidden sm:block bg-gray-100 rounded-3xl py-3.5 pl-10 pr-6 -ml-9 self-center text-sm text-moderate-cyan font-extrabold">
                  Bookmarked
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-[90vw] max-w-[700px] mx-auto mt-4 px-6 pb-px">
        <div className="py-px sm:flex sm:justify-around">
          <div className="mt-8 mb-5 sm:w-1/3 sm:border-r-2 sm:mt-5">
            <h2 className="font-bold text-2xl text-center">
              ${amountInString}
            </h2>
            <p className="text-sm text-gray-400 text-center">
              of $100,000 backed
            </p>
          </div>
          <div className="h-px bg-gray-300 w-16 mx-auto sm:hidden"></div>
          <div className="my-5 sm:w-1/3 sm:border-r-2 ">
            <h2 className="font-bold text-2xl text-center">{backers}</h2>
            <p className="text-sm text-gray-400 text-center">total backers</p>
          </div>
          <div className="h-px bg-gray-300 w-16 mx-auto sm:hidden"></div>
          <div className="my-5 sm:w-1/3">
            <h2 className="font-bold text-2xl text-center">56</h2>
            <p className="text-sm text-gray-400 text-center">days left</p>
          </div>
        </div>
        <div className="relative mt-3 mb-10">
          <div className="absolute bottom-0 left-0 h-2.5 w-full bg-gray-100 rounded-md"></div>
          <div
            style={{ width: `${amountInPercentage}%` }}
            className={`absolute bottom-0 left-0 h-2.5 rounded-md bg-moderate-cyan z-10`}
          ></div>
        </div>
      </section>
      <section className="bg-white w-[90vw]  max-w-[700px] mx-auto mt-4 px-6 py-px">
        <h1 className="font-bold my-6 mt-8">About this project</h1>
        <p className="text-gray-400 text-sm font-medium mb-6">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="text-gray-400 text-sm font-medium mb-6">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <Cards showModal={showModal} remaining={remaining} />
      </section>
      {showMainModal && (
        <MainModal
          onHide={hideModal}
          remaining={remaining}
          increaseAmount={increaseAmount}
          increaseBackers={increaseBackers}
          decreaseRemainder={decreaseRemainder}
        />
      )}
    </div>
  );
};

export default Main;
