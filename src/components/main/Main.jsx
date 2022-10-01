import bookmarkIcon from "../../assets/icon-bookmark.svg";
import mastercraft from "../../assets/logo-mastercraft.svg";
const main = () => {
  return (
    <div>
      <section className="relative bg-white w-[90vw] mx-auto -mt-10 rounded-md">
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
            <button className="bg-moderate-cyan px-14 py-1 rounded-[2em] text-white text-sm">
              Back this project
            </button>

            <div className="flex">
              <img src={bookmarkIcon} alt=" bookmark icon" className="z-10" />
              <p className="hidden sm:block bg-gray-300 rounded-3xl py-3.5 pl-10 pr-6 -ml-9 self-center text-sm">
                Bookmark
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-[90vw] mx-auto mt-4 px-6 pb-px">
        <div className="py-px">
          <div className="mt-8 mb-5 ">
            <h2 className="font-bold text-2xl text-center">$89,914</h2>
            <p className="text-sm text-gray-400 text-center">
              of $100,000 backed
            </p>
          </div>
          <div className="h-px bg-gray-300 w-16 mx-auto"></div>
          <div className="my-5 ">
            <h2 className="font-bold text-2xl text-center">5,007</h2>
            <p className="text-sm text-gray-400 text-center">total backers</p>
          </div>
          <div className="h-px bg-gray-300 w-16 mx-auto"></div>
          <div className="my-5 ">
            <h2 className="font-bold text-2xl text-center">56</h2>
            <p className="text-sm text-gray-400 text-center">days left</p>
          </div>
        </div>
        <div className="relative mt-3 mb-10">
          <div className="absolute bottom-0 left-0 h-3 w-full bg-gray-100 rounded-md"></div>
          <div className="absolute bottom-0 left-0 h-3 w-[26%] rounded-md bg-moderate-cyan  z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default main;
