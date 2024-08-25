// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const Rates = () => {
  const language = useRecoilValue(languageState);

  return (
    <section id="rates" className={`border-t border-zinc-400 p-5 pb-16`}>
      <h2 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
        {translations[language].home.rates.title}
      </h2>

      <div className="flex items-center justify-center">
        <div className="grid w-[450px] grid-cols-1 grid-rows-3 rounded-xl bg-white px-5 py-6 shadow-md">
          <h3 className="col-span-full mb-7 text-center text-lg">
            <span className="underline">
              {translations[language].home.rates.subTitle}
            </span>
            <span className="text-lg text-red-600">*</span>
          </h3>

          <div className="flex items-center justify-between text-sm md:text-base">
            <span>{translations[language].home.rates.kids}</span>

            <h3 className="text-right text-2xl font-bold">25,00€</h3>
          </div>

          <div className="flex items-center justify-between text-sm md:text-base">
            <span>{translations[language].home.rates.adults}</span>

            <h3 className="text-right text-2xl font-bold">40,00€</h3>
          </div>

          <div className="flex items-end">
            <div className="mr-2 flex h-[25px] w-[40px] items-end border-b border-l border-black"></div>
            <div className="translate-y-2.5 text-sm md:text-base">
              {language === "fr" ? (
                <>
                  <span className="font-bold">+50€</span> de frais
                  d&apos;adhésion.
                </>
              ) : (
                <>
                  <span className="font-bold">+50€</span> membership fee.
                </>
              )}
            </div>
          </div>

          <p className="mt-8 text-justify text-sm leading-normal md:text-base">
            {translations[language].home.rates.firstContent}
          </p>

          <p className="mt-5 text-justify text-sm leading-normal md:text-base">
            <span className="mr-1 text-red-600">*</span>
            {translations[language].home.rates.secondContent}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rates;
