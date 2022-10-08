import { useState } from "react";
import heroImage from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close-menu.svg";
import HeaderModal from "../Modals/HeaderModal";
const Header = () => {
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  return (
    <header className="bg-[url('/public/images/image-hero-mobile.jpg')] h-80 bg-cover sm:bg-[url('/public/images/image-hero-desktop.jpg')]">
      {showHeaderModal && <HeaderModal />}
      <div className="flex justify-between p-4">
        <a href="/">
          <img src={heroImage} alt="computer" />
        </a>
        <ul className="text-white hidden sm:flex gap-6 mr-32">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Discover</a>
          </li>
          <li>
            <a href="/">Get Started</a>
          </li>
        </ul>
        {!showHeaderModal ? (
          <img
            src={hamburger}
            alt="hamburger icon"
            className="sm:hidden"
            onClick={() => setShowHeaderModal(true)}
          />
        ) : (
          <img
            src={closeIcon}
            alt="close icon"
            onClick={() => setShowHeaderModal(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
