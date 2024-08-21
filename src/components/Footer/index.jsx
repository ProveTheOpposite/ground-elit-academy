// hook
// import { useRecoilValue } from "recoil";
// react  router dom
import { Link } from "react-router-dom";
// atom
// import { languageState } from "src/recoil";
// assets
// import translations from "src/language/translations";

const Footer = () => {
  //   const language = useRecoilValue(languageState);

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
        </div>

        {/* links */}
        <div className="flex flex-col gap-y-2 xl:flex-row xl:gap-x-8">
          <h4 className="mb-2 text-lg font-bold uppercase xl:mb-4 xl:hidden">
            Contact
          </h4>

          <span className="mb-2 text-sm md:text-base">
            <i className="fa-solid fa-hashtag mr-3"></i>
            <a href="#" className="hover:underline">
              {/* <i className="fa-brands fa-instagram t cursor-pointer transition-all hover:scale-110 hover:text-red-500"></i> */}
              Instagram
            </a>
          </span>

          <a
            href="tel:0606060606"
            className="mb-2 cursor-pointer text-sm hover:underline md:text-base"
          >
            <i className="fa-solid fa-phone mr-3"></i>
            06 21 78 62 74
          </a>

          <span className="cursor-pointer text-sm hover:underline md:text-base">
            <i className="fa-solid fa-location-dot mr-3"></i>
            10 Bd Comte de Falicon, 06100 Nice
          </span>
        </div>
      </div>

      {/* <div className="flex flex-col pt-4 text-base md:justify-center md:border-t-0 md:pl-4 md:pt-0 xl:flex-row xl:justify-evenly xl:border-t xl:px-3 xl:pt-3">
          <span className="mb-5 cursor-pointer hover:underline xl:mb-0">
            {translations[language].footer.privacyAndPolicy}
          </span>
          <span className="cursor-pointer hover:underline">
            {translations[language].footer.termsAndConditions}
          </span>
        </div> */}
    </footer>
  );
};

export default Footer;
