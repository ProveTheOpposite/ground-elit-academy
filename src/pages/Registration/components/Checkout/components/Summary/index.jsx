// hook
import { useRecoilValue, useSetRecoilState } from "recoil";
import translations from "src/language/translations";
// atom
import {
  currentStepState,
  languageState,
  registrationPersonalInfoValuesState,
  registrationValuesState,
} from "src/recoil";
import InfoField from "./InfoField";

const Summary = () => {
  const setCurrentStep = useSetRecoilState(currentStepState);
  const language = useRecoilValue(languageState);
  const registrationValues = useRecoilValue(registrationValuesState);
  const registrationPersonalInfoValues = useRecoilValue(
    registrationPersonalInfoValuesState,
  );

  const handleClick = () => {
    setCurrentStep((prevStep) => Math.min(prevStep - 2, 4));
  };

  const formatDate = (date) => date.toString().split("T")[0];

  return (
    <div className="mb-5 rounded-xl bg-slate-50 p-5 shadow-lg md:p-7">
      <h2 className="text-xl font-bold lg:text-2xl">
        {translations[language].registration.summary.subTitle}
      </h2>

      <div className="mt-7 flex grid-cols-2 grid-rows-4 flex-col gap-y-3 md:grid md:gap-y-5">
        <InfoField
          label={translations[language].registration.summary.firstName}
          value={registrationPersonalInfoValues.firstName}
        />
        <InfoField
          label={translations[language].registration.summary.name}
          value={registrationPersonalInfoValues.name}
        />
        <InfoField
          label={translations[language].registration.summary.birthDay}
          value={formatDate(registrationPersonalInfoValues.birthDay)}
        />
        <InfoField
          label={translations[language].registration.summary.age}
          value={registrationPersonalInfoValues.age}
        />
        <InfoField
          label={translations[language].registration.summary.phoneNumber}
          value={registrationPersonalInfoValues.phoneNumber}
        />
        <InfoField
          label={translations[language].registration.summary.contactEmergency}
          value={registrationPersonalInfoValues.contactEmergency}
        />
        <InfoField
          label={translations[language].registration.summary.email}
          value={registrationValues.email}
        />

        <div className="mt-5 md:m-0 md:flex md:items-end">
          <button
            onClick={handleClick}
            className="w-full rounded-xl border border-red-600 px-3 py-2 text-red-600 transition-opacity hover:opacity-80 md:w-auto"
          >
            <i className="fa-solid fa-chevron-left mr-3 text-sm"></i>
            {translations[language].registration.summary.btnUpdate}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
