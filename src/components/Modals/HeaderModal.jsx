import React from "react";

const HeaderModal = () => {
  return (
    <ul className="hidden bg-white w-[90vw] mx-auto pt-px rounded-lg absolute top-16 left-1/2 -translate-x-1/2 z-10 shadow-2xl">
      <li className="border-b-2 py-6 pl-6 font-bold text-xl">About</li>
      <li className="border-b-2 py-6 pl-6 font-bold text-xl">Discover</li>
      <li className="border-b-2 py-6 pl-6 font-bold text-xl">Get Started</li>
    </ul>
  );
};

export default HeaderModal;
