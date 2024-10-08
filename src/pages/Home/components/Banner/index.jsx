// hook
// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "src/components/Button";
import translations from "src/language/translations";
// atom
import { languageState } from "src/recoil";

const Banner = () => {
  //   const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const language = useRecoilValue(languageState);

  //   const videoRef = useRef(null);

  //   const toggleStateVideo = () => {
  //     const videoElement = videoRef.current;

  //     if (videoElement.paused) {
  //       videoElement.play();
  //       setIsVideoPlaying(true);
  //     } else {
  //       videoElement.pause();
  //       setIsVideoPlaying(false);
  //     }
  //   };

  return (
    <section
      id="welcome"
      className="relative flex h-screen items-center justify-center px-5 md:px-10 lg:px-16 2xl:px-28"
    >
      {/* Video Background */}
      {/* <video
        ref={videoRef}
        className="absolute h-screen w-screen bg-cover object-cover md:block"
        autoPlay={isVideoPlaying}
        loop
      >
        <source src="/src/assets/videos/video-banner.mp4" type="video/mp4" />
        {translations[language].home.aboutUs.videoNotSupported}
      </video> */}

      {/* Overlay */}
      <div className="absolute h-full w-full bg-black bg-opacity-25"></div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center lg:flex-row">
        {/* <div className="text-center lg:flex-[0.55] lg:text-left 2xl:flex-[0.4]"> */}
        <div className="text-center lg:flex-[0.42] lg:text-left">
          <h1 className="mb-10 text-4xl font-bold leading-tight text-white lg:leading-snug xl:leading-tight 2xl:text-5xl 2xl:leading-tight">
            {language === "fr" ? (
              <>
                Découvrez la <span className="text-red-600">Lutte</span> et le{" "}
                <span className="text-red-600">Grappling</span> à Nice avec les
                experts de Ground Elite Academy
              </>
            ) : (
              <>
                Discover <span className="text-red-600">Wrestling</span> and{" "}
                <span className="text-red-600">Grappling</span> in Nice with the
                experts at Ground Elite Academy
              </>
            )}
          </h1>

          <Link className="mt-10 rounded-full" to="/contact-us">
            <Button className="bg-[#b0181c] text-white hover:bg-[#7d2a2d]">
              {translations[language].home.btnContactUs}
            </Button>
          </Link>
        </div>

        {/* <div className="pt-16 md:flex md:items-center md:justify-center lg:flex-[0.45] 2xl:flex-[0.6]">
          <div>
            <button
              onClick={toggleStateVideo}
              className="w-[78px] rounded-md border border-white px-4 py-2 text-white"
            >
              {isVideoPlaying
                ? translations[language].home.aboutUs.buttonVideo.pause
                : translations[language].home.aboutUs.buttonVideo.play}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
