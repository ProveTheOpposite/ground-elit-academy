// hook
import { useRecoilValue } from "recoil";
// stripe component
import { Elements } from "@stripe/react-stripe-js";
// stripe config
import stripePromise from "src/stripe/stripeConfig";
// atom
import { languageState } from "src/recoil";
// components
import CheckoutForm from "./components/CheckoutForm";
// assets
import translations from "src/language/translations";
import Summary from "./components/Summary";

const Checkout = () => {
  const language = useRecoilValue(languageState);

  const appearance = {
    theme: "flat",
  };

  const options = {
    // mode: "subscription",
    // amount: 1000,
    // currency: "eur",
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    appearance,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <section className="flex items-center justify-center px-3 pb-5 md:pb-10 xl:pb-16 2xl:pb-24">
        <div className="md:w-[700px]">
          <h2 className="mb-5 text-center text-2xl font-bold lg:mb-7 lg:text-3xl">
            {translations[language].registration.checkout.title}
          </h2>

          <Summary />

          <CheckoutForm />

          <span className="ml-4 text-xs font-bold tracking-wide md:text-base">
            {translations[language].registration.checkout.byStripe}
          </span>
        </div>
      </section>
    </Elements>
  );
};

export default Checkout;
