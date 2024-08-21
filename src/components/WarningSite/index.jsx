import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import translations from "src/language/translations";
import { languageState } from "src/recoil";

const WarningSite = ({ setIsOpenWarningModal }) => {
  const language = useRecoilValue(languageState);

  useEffect(() => {
    // Bloque le scroll quand le modal est monté
    document.body.classList.add("overflow-hidden");

    // Nettoyage: Débloque le scroll quand le modal est démonté
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      onClick={() => setIsOpenWarningModal(false)}
      className="bg-modal-warning fixed right-0 top-0 z-50 flex h-screen w-full items-center justify-center px-3"
    >
      <div className="relative w-96 rounded-xl bg-white px-5 py-7 shadow-md">
        <i
          onClick={() => setIsOpenWarningModal(false)}
          className="fa-solid fa-xmark absolute right-4 top-2 cursor-pointer text-2xl"
        ></i>

        <h2 className="mb-2 text-center text-2xl font-bold lg:mb-4 lg:text-3xl">
          <i className="fa-solid fa-triangle-exclamation mr-3 text-red-600"></i>
          Attention
        </h2>

        <p className="text-justify text-sm md:text-base">
          {translations[language].warning.firstContent}
          <br />
          {translations[language].warning.secondContent}
        </p>
      </div>
    </div>
  );
};

WarningSite.propTypes = {
  setIsOpenWarningModal: PropTypes.func,
};

export default WarningSite;
