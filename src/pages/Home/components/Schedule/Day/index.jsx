// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// prop types
import PropTypes from "prop-types";
const Day = ({
  index,
  day,
  kidsTime,
  adultTime,
  childrenTraining,
  adultsTraining,
}) => {
  const isTrainingDay = index === "monday" || index === "thursday";
  const language = useRecoilValue(languageState);

  // fonction pour obtenir la classe CSS en fonction de l'index
  const getClassForIndexFr = (index) => {
    switch (index) {
      case "tuesday":
        return "center-absolute-tuesday-fr";
      case "wednesday":
        return "center-absolute-wednesday-fr";
      case "friday":
        return "center-absolute-friday-fr";
      case "saturday":
        return "center-absolute-saturday-fr";
      case "sunday":
        return "center-absolute-sunday-fr";
      default:
        return "";
    }
  };

  const getClassForIndexEn = (index) => {
    switch (index) {
      case "tuesday":
        return "center-absolute-tuesday-en";
      case "wednesday":
        return "center-absolute-wednesday-en";
      case "friday":
        return "center-absolute-friday-en";
      case "saturday":
        return "center-absolute-saturday-en";
      case "sunday":
        return "center-absolute-sunday-en";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        className={`rounded-lg border border-black ${index !== "monday" && index !== "thursday" ? `relative ${language === "fr" ? "w-[230.8px]" : "w-[214px]"} h-[246px] overflow-hidden bg-[#D9D9D9] min-[612px]:w-auto md:h-[262px] xl:h-[325px]` : "flex items-center justify-center px-12 pb-12 pt-6 xl:h-[325px]"}`}
      >
        <div className="text-center">
          {isTrainingDay ? (
            <>
              <h3 className="mb-8 text-sm font-bold md:text-base">{day}</h3>
              <div>
                <div className="mb-7 flex flex-col gap-y-1 text-sm md:text-base">
                  <span className="font-bold">{kidsTime}</span>
                  <span>{childrenTraining}</span>
                </div>

                <div className="flex flex-col gap-y-1 text-sm md:text-base">
                  <span className="font-bold">{adultTime}</span>
                  <span>{adultsTraining}</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3
                className={`${language === "fr" ? getClassForIndexFr(index) : getClassForIndexEn(index)} absolute top-[12%] text-sm font-bold md:top-[9%] md:text-base xl:top-[17%]`}
              >
                {day}
              </h3>
              {language === "fr" ? (
                <span className="absolute -left-[0%] top-[44%] rotate-45 text-nowrap text-2xl font-bold text-[#5E5E5E] min-[612px]:-left-[2%] min-[612px]:text-3xl md:left-[8%] lg:left-[5%] xl:-left-[5%] 2xl:left-[5%] 2xl:top-[44%]">
                  Pas d&apos;entraînement
                </span>
              ) : (
                <span className="absolute left-[18%] top-[47%] rotate-45 text-nowrap text-2xl font-bold text-[#5E5E5E] sm:left-[20%] sm:text-3xl md:left-[25%] lg:left-[23%] xl:left-[18%] 2xl:left-[21%] 2xl:top-[45%]">
                  No training
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

Day.propTypes = {
  index: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  kidsTime: PropTypes.string.isRequired,
  adultTime: PropTypes.string.isRequired,
  childrenTraining: PropTypes.string.isRequired,
  adultsTraining: PropTypes.string.isRequired,
};

export default Day;
