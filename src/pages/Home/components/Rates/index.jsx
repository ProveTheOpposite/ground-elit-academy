// hook
import { useRecoilValue } from "recoil";
// atom
import { isRegisteredState, languageState } from "src/recoil";
// assets
import translations from "src/language/translations";

const Rates = () => {
  const language = useRecoilValue(languageState);
  const isRegistered = useRecoilValue(isRegisteredState);

  return (
    <section
      id="rates"
      className={`border-t border-zinc-400 ${isRegistered ? "pb-10" : "pb-16"} p-5`}
    >
      <h2 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
        {translations[language].home.rates.title}
      </h2>

      <div className="flex items-center justify-center">
        <div className="grid w-[420px] grid-cols-1 grid-rows-3 rounded-xl bg-white px-5 py-6 shadow-md">
          <h3 className="col-span-full mb-7 text-center text-lg underline">
            {translations[language].home.rates.subTitle}
          </h3>

          <div className="flex items-center justify-between text-sm md:text-base">
            <span>{translations[language].home.rates.kids}</span>

            <h3 className="text-right text-2xl font-bold">25,00€</h3>
          </div>

          <div className="flex items-center justify-between text-sm md:text-base">
            <span>{translations[language].home.rates.adults}</span>

            <h3 className="text-right text-2xl font-bold">40,00€</h3>
          </div>

          <span className="mt-5 text-justify text-sm leading-normal md:text-base">
            {translations[language].home.rates.content}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Rates;
