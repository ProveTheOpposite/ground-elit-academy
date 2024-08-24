// hook
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// react router dom
import { Link } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// selector
import { scrollToElementSelector } from "src/recoil";
// Prop Types
import PropTypes from "prop-types";
// assets
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const HeaderMobile = ({ setShowMenu, showMenu }) => {
  const [appearChangeLanguage, setAppearChangeLanguage] = useState(false);

  const [language, setLanguage] = useRecoilState(languageState);
  const scrollToElement = useRecoilValue(scrollToElementSelector);

  const menuItems = [
    { key: "welcome", icon: "fa-house" },
    { key: "aboutUs", icon: "fa-address-card" },
    { key: "team", icon: "fa-users" },
    { key: "schedule", icon: "fa-calendar-days" },
    { key: "rates", icon: "fa-hand-holding-dollar" },
  ];

  const handleClickChangeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <nav
      className={`${showMenu ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 flex h-full w-full flex-col justify-evenly bg-white px-8 transition-transform duration-300 ease-out md:px-16 xl:hidden`}
    >
      <ul className="flex w-full flex-col justify-center gap-y-7 text-2xl font-medium">
        {menuItems.map(({ key, icon }) => (
          <li
            key={key}
            className={`${scroll || location.pathname === "/registration" || (location.pathname !== "/" && "/registration") ? "text-black" : "text-white"} tracking-wide transition-colors hover:text-red-600`}
          >
            <i className={`fa-solid ${icon} mr-4`}></i>
            <Link
              to={location.pathname === "/registration" ? "/" : ""}
              className="cursor-pointer"
              onClick={() => {
                scrollToElement(key);
                setShowMenu(false);
              }}
            >
              {translations[language].header.headerList[key]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start gap-y-4">
        <span
          onClick={() => setAppearChangeLanguage(!appearChangeLanguage)}
          className="text-lg"
        >
          {language === "fr" ? (
            <>
              Modifier la <span className="text-red-600">langue</span>
            </>
          ) : (
            <>
              Change the <span className="text-red-600">language</span>
            </>
          )}

          <i
            className={`fa-solid fa-chevron-right ml-3 text-xs transition-transform ${appearChangeLanguage && "rotate-90"}`}
          ></i>
        </span>

        {appearChangeLanguage && (
          <div
            className={`${appearChangeLanguage ? "opacity-100" : "opacity-0"} transition-opacity`}
          >
            {["fr", "en"].map((lang) => (
              <li
                key={lang}
                onClick={() => handleClickChangeLanguage(lang)}
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
                <span>
                  {translations[language].header.btnTranslation[lang]}
                </span>
              </li>
            ))}
          </div>
        )}
      </div>

      <i
        onClick={() => setShowMenu(false)}
        className="fa-solid fa-xmark absolute right-3 top-3 flex w-[48px] items-center justify-center rounded-full py-1 text-3xl transition-colors hover:bg-slate-100"
      ></i>
    </nav>
  );
};

HeaderMobile.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default HeaderMobile;
