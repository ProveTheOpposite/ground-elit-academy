// hooks
import { useState } from "react";
import { useRecoilValue } from "recoil";
// atom
import { currentStepState, languageState } from "src/recoil";
// components
import ErrorElement from "src/components/ErrorElement";
import Checkout from "./components/Checkout";
import ChooseSubscription from "./components/ChooseSubscription";
import PersonalInformations from "./components/PersonalInformations";
import Step from "./components/Step";
import StepConnector from "./components/StepConnector";
// assets
import translations from "src/language/translations";
import StepMobile from "./components/StepMobile";

const Registration = () => {
  // state permettant d'afficher ou non le composant StepMobile pour voir les étapes de l'inscription
  const [seeSteps, setSeeSteps] = useState(false);

  // state permettant de connaitre l'étape en cours et d'afficher le bon composant en fonction
  const currentStep = useRecoilValue(currentStepState);
  const language = useRecoilValue(languageState);

  const handleClick = () => {
    setSeeSteps(true);
  };

  return (
    <>
      {currentStep === 1 ? (
        <ErrorElement />
      ) : (
        <section className="mt-[64px] flex flex-1 flex-col items-center justify-center gap-y-10 lg:mt-[72px] xl:mt-[78px]">
          {/* Les etapes */}
          {/* DESKTOP */}
          <div className="step-div-flex-grow hidden lg:flex lg:items-center lg:justify-end lg:pt-10 2xl:pt-0">
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
          {/* Les étapes */}
          {/* MOBILE */}
          <div className="flex items-center justify-center pt-5 lg:hidden">
            <button onClick={handleClick}>
              {translations[language].registration.stepBar.seeStepsBtn}
            </button>
            {seeSteps && <StepMobile setSeeSteps={setSeeSteps} />}
          </div>

          <div className="registration-content-flex-grow md:pt-5 lg:pt-0">
            <div className="lg:h-[550px]">
              {currentStep === 2 && <PersonalInformations />}
              {currentStep === 3 && <ChooseSubscription />}
              {currentStep === 4 && <Checkout />}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Registration;
