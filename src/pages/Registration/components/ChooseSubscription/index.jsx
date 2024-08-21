// hook
import { useRecoilValue, useSetRecoilState } from "recoil";
// atom
import { currentStepState, languageState } from "src/recoil";
// compoenents
import SubscriptionCard from "./SubscriptionCard";
// assets
import translations from "src/language/translations";

const ChooseSubscription = () => {
  const language = useRecoilValue(languageState);
  const setCurrentStep = useSetRecoilState(currentStepState);

  const handleNextStep = () =>
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  const handlePrevStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  return (
    <section className="flex flex-col items-center justify-center px-3 pb-5">
      <h2 className="mb-5 text-center text-2xl font-bold lg:mb-7 lg:text-3xl">
        {translations[language].registration.chooseSubscription.title}
      </h2>

      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
        <SubscriptionCard
          price="25,00€"
          description={
            translations[language].registration.chooseSubscription.kids
          }
          buttonText={
            translations[language].registration.chooseSubscription.btnChoose
          }
          onClick={handleNextStep}
        />

        <SubscriptionCard
          price="40,00€"
          description={
            translations[language].registration.chooseSubscription.adults
          }
          buttonText={
            translations[language].registration.chooseSubscription.btnChoose
          }
          onClick={handleNextStep}
        />
      </div>

      <button
        onClick={handlePrevStep}
        className="mt-7 w-[97%] rounded-xl border border-black bg-transparent px-6 py-2 tracking-wider text-black transition-all duration-75 hover:opacity-90 active:scale-95 md:w-[140px]"
      >
        <i className="fa-solid fa-chevron-left mr-2 text-sm"></i>
        {translations[language].registration.personalInformations.btnBack}
      </button>
    </section>
  );
};

export default ChooseSubscription;
