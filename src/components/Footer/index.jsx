// hook
import { useRecoilValue } from "recoil";
// react  router dom
import { Link } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const Footer = () => {
  const language = useRecoilValue(languageState);

  return (
    <footer className="flex bg-gray-800 px-5 py-8 text-slate-300 sm:px-7 sm:pb-3 lg:justify-center xl:pt-12">
      <div className="flex w-full flex-col sm:grid sm:grid-cols-2 sm:grid-rows-[1fr_auto] sm:gap-x-4 sm:gap-y-5 md:gap-x-0 lg:w-[82%] xl:w-[75%] xl:gap-y-8 2xl:w-[1200px]">
        <div className="mb-8 flex flex-col gap-y-2 sm:mb-0 sm:pl-2 xl:pl-5">
          <Link to="/" className="xl:mb-0">
            <h2 className="text-2xl font-bold">Ground Elit Academy</h2>
          </Link>

          <span className="text-sm md:text-base">
            &copy; 2024 Ground Elit Academy - GEA Nice
          </span>

          <span className="specially text-sm md:text-base">1.0.0</span>
        </div>

        {/* links */}
        <div className="mb-10 flex flex-col gap-y-2 sm:mb-0 sm:flex-wrap sm:content-center xl:content-end xl:gap-x-8 xl:pr-5">
          <h4 className="mb-2 text-lg font-bold uppercase xl:mb-4">Contact</h4>

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

          <span className="text-sm md:text-base">
            <i className="fa-solid fa-location-dot mr-3"></i>
            10 Bd Comte de Falicon, 06100 Nice
          </span>
        </div>

        <div className="flex flex-col items-start gap-y-3 sm:col-span-full sm:flex-row sm:justify-between sm:border-t sm:border-t-slate-400 sm:px-4 sm:pt-2 md:justify-around md:px-0">
          <Link
            to="/terms-and-conditions"
            className="text-sm hover:underline md:text-base"
          >
            {translations[language].footer.privacyAndPolicy}
          </Link>

          <Link
            to="/terms-and-conditions"
            className="text-sm hover:underline md:text-base"
          >
            {translations[language].footer.termsAndConditions}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
