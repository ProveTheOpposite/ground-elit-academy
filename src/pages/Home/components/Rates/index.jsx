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
      className="bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center max-w-[1200px]">
        <h2>To get acces to the platform</h2>
        <span>Choose your plan</span>
        <div className="flex flex-col">
          <div>
            <h3>Enfant (7 ans et +)</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, vitae!</p>
          </div>
          <div>
            <h3>25€/month</h3>
          </div>
          <p>
            Les paiements se font en espèces directement au club. Le montant doit être payant entre le 1er et le 9ème jour du mois courant.
          </p>
        </div>
      </div>
      {/* <h2 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
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
      </div> */}
    </section>
  );
};

export default Rates;
