import heroImage from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
const header = () => {
  return (
    <header className="bg-[url('/public/images/image-hero-mobile.jpg')] h-80 bg-cover">
      <div className="flex justify-between p-4">
        <img src={heroImage} alt="computer" />
        <ul className="text-white hidden">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
        <img src={hamburger} alt="hamburger icon" className="max-w-full" />
      </div>
    </header>
  );
};

export default header;
