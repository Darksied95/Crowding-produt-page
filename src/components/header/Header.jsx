import heroImage from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close-menu.svg";
import HeaderModal from "../Modals/HeaderModal";
const header = () => {
  return (
    <header className="bg-[url('/public/images/image-hero-mobile.jpg')] h-80 bg-cover sm:bg-[url('/public/images/image-hero-desktop.jpg')]">
      <HeaderModal />
      <div className="flex justify-between p-4">
        <img src={heroImage} alt="computer" />
        <ul className="text-white hidden sm:flex gap-6 mr-32">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
        <img src={hamburger} alt="hamburger icon" className="sm:hidden" />
        <img src={closeIcon} alt="close icon" className="hidden" />
      </div>
    </header>
  );
};

export default header;
