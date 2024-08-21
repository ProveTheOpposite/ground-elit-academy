// hook
import { useRecoilState } from "recoil";
// atom
import { languageState } from "src/recoil";
// PropTypes
import PropTypes from "prop-types";
// assets
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const ChangeLanguage = ({ closeModal }) => {
  const [language, setLanguage] = useRecoilState(languageState);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    closeModal(false);
  };

  return (
    <div className="relative z-50 rounded-lg bg-white px-16 py-12 shadow-2xl">
      <i
        onClick={() => closeModal(false)}
        className="fa-solid fa-xmark absolute right-4 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl transition-colors hover:bg-red-50 hover:text-red-600"
        aria-label="Close"
        role="button"
      ></i>

      <h3 className="mb-5 text-2xl font-bold">
        {language === "fr" ? (
          <>
            Modifier <span className="text-red-600">la langue</span>
          </>
        ) : language === "en" ? (
          <>
            Change <span className="text-red-600">the language</span>
          </>
        ) : (
          ""
        )}
      </h3>

      <ul className="ml-3">
        {["fr", "en"].map((lang) => (
          <li
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`${language === lang ? "bg-red-100 font-bold" : ""} mb-2 flex cursor-pointer items-center rounded-2xl px-3 py-1 transition-colors hover:bg-red-100`}
            aria-label={`Switch to ${lang === "fr" ? "French" : "English"}`}
          >
            {lang === "fr" ? (
              <svg
                className="mr-2 h-4 w-6 rounded-sm"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="French flag"
              >
                <rect className="h-4 w-6" fill="#ED2939" />
                <rect className="h-4 w-4" fill="#fff" />
                <rect className="h-4 w-2" fill="#002395" />
              </svg>
            ) : (
              <img
                className="mr-2 w-7"
                src={imageUrl.header.englandFlag}
                alt="British flag"
              />
            )}
            <span>{translations[language].header.btnTranslation[lang]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Props validation
ChangeLanguage.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ChangeLanguage;
