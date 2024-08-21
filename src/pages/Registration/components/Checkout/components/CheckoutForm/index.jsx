// hook
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
// stripe components
import { PaymentElement } from "@stripe/react-stripe-js";
// atom
import {
  currentStepState,
  isRegisteredState,
  isRegisteringState,
  languageState,
} from "src/recoil";
// assets
import translations from "src/language/translations";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const language = useRecoilValue(languageState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const resetCurrentStep = useResetRecoilState(currentStepState);
  const setIsRegistering = useSetRecoilState(isRegisteringState);
  const setIsRegistered = useSetRecoilState(isRegisteredState);

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Assurez-vous que Stripe et Elements sont chargés avant de soumettre
      return;
    }

    try {
      setIsLoading(true);
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
      });
      console.log(paymentIntent);

      if (error) {
        // Traitez l'erreur si une erreur Stripe est retournée
        console.error(error.message);
      }

      if (paymentIntent.status === "succeeded") {
        // Traitement en cas de succès (par exemple, redirection ou message de confirmation)
        window.location.href = "http://localhost:5174"; // Exemple de redirection
      }
      setIsRegistering(false);
      localStorage.removeItem("registrationFormData");
      localStorage.removeItem("credentialsData");
      setIsRegistered(true);
      resetCurrentStep();
      console.log("Abonnement acheté ! ");

      //   navigate("/");
    } catch (e) {
      // Gestion des erreurs capturées par le bloc catch
      console.error("Erruer lors du achat : ", e);
    } finally {
      setIsLoading(false); // Fin du chargement
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-3 rounded-xl bg-white p-7 shadow-lg"
    >
      <h2 className="mb-10 text-xl font-bold lg:text-2xl">
        {translations[language].registration.checkout.subTitle}
      </h2>

      <PaymentElement />
      <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-center md:gap-x-5">
        <button
          onClick={() =>
            setCurrentStep((prevStep) => Math.min(prevStep - 1, 4))
          }
          className={`mb-5 w-full rounded-xl border border-black px-6 py-2 tracking-wider text-black transition-all duration-75 md:mb-0 md:mr-5 md:w-[140px]`}
          type="button"
        >
          <i className="fa-solid fa-chevron-left mr-2 text-sm"></i>
          {translations[language].registration.personalInformations.btnBack}
        </button>

        <button
          className={`w-full md:w-[140px] ${isLoading ? "bg-slate-500" : "bg-black hover:opacity-90 active:scale-95"} rounded-xl px-6 py-2 tracking-wider text-white transition-all duration-75`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner animate-spin"></i>
          ) : (
            translations[language].registration.checkout.btnBuy
          )}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
