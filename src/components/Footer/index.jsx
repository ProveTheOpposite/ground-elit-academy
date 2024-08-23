// react  router dom
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bg-gray-800 px-5 py-8 text-slate-300 lg:justify-center xl:py-16">
      <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between lg:w-[82%] xl:w-[75%] 2xl:w-[1200px]">
        <div className="mb-8 flex flex-col gap-y-2 xl:mb-0">
          <Link to="/" className="xl:mb-0">
            <h2 className="text-2xl font-bold">Ground Elit Academy</h2>
          </Link>

          <span className="text-sm md:text-base">
            &copy; 2024 Ground Elit Academy - GEA Nice
          </span>

          <span className="specially text-sm md:text-base">1.0.0</span>
        </div>

        {/* links */}
        <div className="flex flex-col gap-y-2 xl:flex-row xl:gap-x-8">
          <h4 className="mb-2 text-lg font-bold uppercase xl:mb-4 xl:hidden">
            Contact
          </h4>

          <span className="mb-2 text-sm md:text-base">
            <i className="fa-brands fa-instagram mr-3"></i>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </span>

          <span className="mb-2 text-sm md:text-base">
            <i className="fa-solid fa-phone mr-3"></i>
            <a href="tel:0621786274" className="cursor-pointer hover:underline">
              06 21 78 62 74
            </a>
          </span>

          <span className="cursor-pointer text-sm hover:underline md:text-base">
            <i className="fa-solid fa-location-dot mr-3"></i>
            10 Bd Comte de Falicon, 06100 Nice
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
