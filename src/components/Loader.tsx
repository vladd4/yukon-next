import Image from "next/image";
import Logo from "@/../public/logo.png";

const Loader = () => {
  return (
    <div className="preloader" id="loader">
      <div className="preloader__row">
        <div className="preloader__item">
          <Image alt="Loader..." src={Logo} />
        </div>
      </div>
    </div>
  );
};
export default Loader;
