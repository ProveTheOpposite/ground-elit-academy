// hook
import { useRecoilValue } from "recoil";
// react router dom
// import { Link } from "react-router-dom";
// atom
import {
  //   isRegisteredState,
  languageState,
} from "src/recoil";
// assets
// import translations from "src/language/translations";

const Banner = () => {
  const language = useRecoilValue(languageState);
  //   const isRegistered = useRecoilValue(isRegisteredState);
  //   const scrollToElement = useRecoilValue(scrollToElementSelector);

  return (
    <section
      id="welcome"
      className="bg-banner-url relative flex h-screen items-center justify-center px-5"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-75"></div>

      <div className="z-10 text-center md:w-[650px] xl:w-[850px]">
        <h1 className="mb-10 text-3xl font-bold leading-tight text-white lg:leading-snug xl:text-4xl xl:leading-tight 2xl:text-5xl">
          {language === "fr" ? (
            <>
              Votre club de <span className="text-red-600">Lutte</span> et de{" "}
              <span className="text-red-600">Grappling</span> vous attend avec
              impatience
            </>
          ) : (
            <>
              Your <span className="text-red-600">Wrestling</span> and{" "}
              <span className="text-red-600">Grappling</span> club is eagerly
              awaiting you
            </>
          )}
        </h1>

        {/* {!isRegistered && (
          <Link
            onClick={() => scrollToElement("registration")}
            className={`rounded-xl ${language === "en" ? "px-5" : "px-6"} bg-red-600 py-3 text-sm text-white transition-colors duration-200 hover:bg-black lg:text-base`}
          >
            {translations[language].home.banner.btnRegistration}
          </Link>
        )} */}
      </div>
    </section>
  );
};

export default Banner;
