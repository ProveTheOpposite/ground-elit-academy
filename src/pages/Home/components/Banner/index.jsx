// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";

const Banner = () => {
  const language = useRecoilValue(languageState);

  return (
    <section
      id="welcome"
      className="bg-banner-url relative flex h-screen items-center justify-center px-5"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-75"></div>

      <div className="z-10 text-center md:w-[650px] xl:w-[850px]">
        <h1 className="mb-10 text-3xl font-bold leading-tight text-white lg:leading-snug xl:text-4xl xl:leading-tight 2xl:text-5xl 2xl:leading-tight">
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
      </div>
    </section>
  );
};

export default Banner;
