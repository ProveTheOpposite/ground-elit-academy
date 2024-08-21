// hook
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
// atom
import {
  currentStepState,
  isRegisteringState,
  languageState,
  registrationValuesState,
} from "src/recoil";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// assets
import translations from "src/language/translations";

// Validation schema
const createValidationSchema = (translations, language) =>
  yup.object({
    email: yup
      .string()
      .required(
        translations[language].home.registrationHome.errorsMessage.required,
      )
      .email(
        translations[language].home.registrationHome.errorsMessage.invalidEmail,
      ),
    password: yup
      .string()
      .required(
        translations[language].home.registrationHome.errorsMessage.required,
      )
      .min(
        6,
        translations[language].home.registrationHome.errorsMessage.minPassword,
      )
      .max(
        20,
        translations[language].home.registrationHome.errorsMessage.maxPassword,
      ),
  });

const RegistrationHome = () => {
  // State hooks
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Recoil hooks
  const language = useRecoilValue(languageState);
  // permet de mettre à jour le header lorsqu'on est en train de s'inscrire pour ne pas afficher le footer car ca prend trop de place
  const setIsRegistering = useSetRecoilState(isRegisteringState);
  // permet de fournir l'email et le password au setter pour pouvoir les setDoc au moment de la finalisation
  const setRegistrationValues = useSetRecoilState(registrationValuesState);
  // setter pour débuter le compteur d'étapes
  const setCurrentStep = useSetRecoilState(currentStepState);

  const navigate = useNavigate();

  //   configuration schema
  const schema = createValidationSchema(translations, language);

  // Form handling
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  // Effects
  useEffect(() => {
    const savedData = localStorage.getItem("registrationFormData");
    if (savedData) {
      const { email, password } = JSON.parse(savedData);
      setValue("email", email);
      setValue("password", password);
    }
  }, [setValue]);

  // Form submission logic
  const submit = (values) => {
    console.log("valeur de email et passsword", values);
    setRegistrationValues({ email: values.email, password: values.password });
    setIsRegistering(true);
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
    localStorage.setItem("registrationFormData", JSON.stringify(values));
    console.log("Etape 1 : email et password validé !");
    setIsLoading(true);
    // Je met un chargement artificiel pour que le changement du footer qui disparait ne soit pas brut
    new Promise((resolve, reject) =>
      setTimeout(() => {
        setIsLoading(false);
        resolve(navigate("/registration"));
      }, 500),
    );
  };

  // Render
  return (
    <section id="registration" className="border-t border-zinc-400 p-5 pb-16">
      <h2 className="mb-8 text-center text-2xl font-bold lg:text-3xl">
        {translations[language].home.registrationHome.title} A retiré si il le
        faut
      </h2>

      <form
        onSubmit={handleSubmit(submit)}
        className="rounded-xl bg-white px-7 py-9 text-black shadow-md md:mx-auto md:w-[550px] lg:w-[800px]"
      >
        {/* Email Field */}
        <div className="relative mb-16 flex flex-col">
          <label className="mb-2 cursor-pointer" htmlFor="email">
            {translations[language].home.registrationHome.email}
          </label>
          <input
            className="rounded-md border border-black py-2 pl-3 text-base text-black outline-none"
            {...register("email")}
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
          {errors?.email && (
            <p className="absolute -bottom-7 left-1 text-sm text-red-600 md:-bottom-8 md:text-base">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative flex flex-col">
          <label className="mb-2 cursor-pointer" htmlFor="password">
            {translations[language].home.registrationHome.password}
          </label>
          <input
            {...register("password")}
            className="rounded-md border border-black py-2 pl-3 text-base text-black outline-none"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
          />
          <i
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className={`fa-regular fa-eye${isPasswordVisible ? "-slash" : ""} absolute bottom-3 right-3 cursor-pointer`}
          ></i>
          {errors?.password && (
            <p className="absolute -bottom-7 left-1 text-sm text-red-600 md:-bottom-8 md:text-base">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Global Error Message */}
        {errors?.globalError && (
          <p className="mt-7 text-sm font-bold text-red-600 md:text-base">
            <i className="fa-solid fa-triangle-exclamation"></i>
            {errors.globalError.message ===
            "Firebase: Error (auth/email-already-in-use)."
              ? "L'email que vous avez renseigné est déjà utilisé"
              : "Une erreur s'est produite"}
          </p>
        )}

        {/* Submit Button */}
        <div className="mt-12 text-center">
          <button
            className={`w-[140px] rounded-xl px-6 py-2 tracking-wider text-white transition-all duration-75 ${isLoading ? "bg-slate-500" : "bg-black hover:opacity-90 active:scale-95"}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <i className="fa-solid fa-spinner animate-spin"></i>
            ) : (
              translations[language].home.registrationHome.btnSubmit
            )}
          </button>
        </div>

        <div className="mt-6 flex justify-center text-center text-xs leading-normal xl:text-sm">
          <p className="text-gray-500 lg:max-w-[550px]">
            {translations[language].home.registrationHome.moreInformation}
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegistrationHome;
