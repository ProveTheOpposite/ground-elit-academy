// hook
import { useRecoilValue } from "recoil";
// atom
import { currentStepState, languageState } from "src/recoil";
// components
import Step from "../Step";
import StepConnector from "../StepConnector";
// prop TYpes
import PropTypes from "prop-types";
// assets
import translations from "src/language/translations";

const StepMobile = ({ setSeeSteps }) => {
  const language = useRecoilValue(languageState);
  const currentStep = useRecoilValue(currentStepState);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white py-7">
      <span
        onClick={() => setSeeSteps(false)}
        className="absolute right-4 top-5 rounded-lg border border-black px-2 py-1 hover:border-red-600 hover:text-red-600"
      >
        {translations[language].registration.stepBar.closeStepsBtn}
      </span>

      <Step
        isActive={currentStep >= 1}
        isCompleted={currentStep > 1}
        icon={<i className="fa-solid fa-user"></i>}
        title={translations[language].registration.stepBar.step1.title}
        description={
          translations[language].registration.stepBar.step1.description
        }
      />

      <StepConnector isActive={currentStep >= 2} />

      <Step
        isActive={currentStep >= 2}
        isCompleted={currentStep > 2}
        icon={<i className="fa-regular fa-id-card text-lg"></i>}
        title={translations[language].registration.stepBar.step2.title}
        description={
          translations[language].registration.stepBar.step2.description
        }
      />

      <StepConnector isActive={currentStep >= 3} />

      <Step
        isActive={currentStep >= 3}
        isCompleted={currentStep > 3}
        icon={<i className="fa-solid fa-user"></i>}
        title={translations[language].registration.stepBar.step3.title}
        description={
          translations[language].registration.stepBar.step3.description
        }
      />

      <StepConnector isActive={currentStep >= 4} />

      <Step
        isActive={currentStep >= 4}
        isCompleted={false}
        icon={<i className="fa-regular fa-credit-card"></i>}
        title={translations[language].registration.stepBar.step4.title}
        description={
          translations[language].registration.stepBar.step4.description
        }
      />
    </div>
  );
};

StepMobile.propTypes = {
  setSeeSteps: PropTypes.func.isRequired,
};

export default StepMobile;
