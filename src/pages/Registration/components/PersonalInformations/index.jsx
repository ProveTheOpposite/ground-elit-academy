// hook
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
// atom
import {
  currentStepState,
  languageState,
  registrationPersonalInfoValuesState,
} from "src/recoil";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// components
import Button from "./components/Button";
import FormField from "./components/FormField";
// assets
import { useRecoilState } from "recoil";
import translations from "src/language/translations";

// Déclaration du schema de validation
const createValidationSchema = (translations, language) =>
  yup.object({
    name: yup
      .string()
      .required(
        translations[language].registration.personalInformations.errorsMessage
          .required,
      ),
    firstName: yup
      .string()
      .required(
        translations[language].registration.personalInformations.errorsMessage
          .required,
      ),
    age: yup
      .number()
      .required(
        translations[language].registration.personalInformations.errorsMessage
          .required,
      )
      .typeError(
        translations[language].registration.personalInformations.errorsMessage
          .ageTypeError,
      ),
    phoneNumber: yup
      .string()
      .required(
        translations[language].registration.personalInformations.errorsMessage
          .required,
      )
      .length(
        10,
        translations[language].registration.personalInformations.errorsMessage
          .phoneNumberLength,
      ),
    birthDay: yup
      .date()
      .required(
        translations[language].registration.personalInformations.errorsMessage
          .required,
      )
      .min(
        new Date(1954, 0, 1),
        translations[language].registration.personalInformations.errorsMessage
          .birthDayMin,
      )
      .typeError(
        translations[language].registration.personalInformations.errorsMessage
          .birthDayTypeError,
      ),
    contactEmergency: yup
      .string()
      .required(
        translations[language].registration.personalInformations.errorsMessage
          .required,
      )
      .length(
        10,
        translations[language].registration.personalInformations.errorsMessage
          .contactEmergencyLength,
      ),
  });

const PersonalInformations = () => {
  const language = useRecoilValue(languageState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const [registrationPersonalInfoValues, setRegistrationPersonalInfoValues] =
    useRecoilState(registrationPersonalInfoValuesState);

  const navigate = useNavigate();

  // Hooks et configurations
  const schema = createValidationSchema(translations, language);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      firstName: "",
      age: null,
      phoneNumber: "",
      birthDay: "",
      contactEmergency: "",
    },
    resolver: yupResolver(schema),
  });

  // Fonctions utilitaires
  const getSavedData = () => {
    const savedData = localStorage.getItem("credentialsData");
    return savedData ? JSON.parse(savedData) : {};
  };

  const saveData = (data) => {
    localStorage.setItem("credentialsData", JSON.stringify(data));
  };

  // Effets secondaires
  useEffect(() => {
    const savedData = getSavedData();
    Object.keys(savedData).forEach((key) => {
      setValue(key, savedData[key]);
    });
  }, [setValue]);

  // Logique de soumission du formulaire
  const submit = (values) => {
    const { age, birthDay } = values;
    console.log(birthDay);

    // Calcul de l'âge à partir de la date de naissance
    const birthDate = new Date(birthDay);
    const today = new Date();
    // Année de l'anniversaire actuel cette année
    const currentYearBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate(),
    );
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    // Si l'anniversaire n'a pas encore eu lieu cette année, soustraire 1
    if (today < currentYearBirthday) {
      calculatedAge--;
    }

    // Vérification de la correspondance de l'âge et de la date de naissance
    if (calculatedAge !== age) {
      setError("global", {
        type: "manual",
        message: "L'âge et la date de naissance ne correspondent pas",
      });
    } else {
      clearErrors("global");
    }

    if (!errors.global) {
      // Sauvegarder les valeurs dans localStorage
      const valuesToStore = {
        ...values,
        birthDay: new Date(birthDay).toISOString().split("T")[0],
      };
      saveData(valuesToStore);
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
      setRegistrationPersonalInfoValues({
        ...values,
        birthDay: new Date(birthDay).toISOString().split("T")[0],
      });
      console.log(registrationPersonalInfoValues);
      console.log(birthDay);

      console.log("Etape 2 : informations personnelles validé !");
    }
  };

  // Définition des champs du formulaire
  const fields = {
    name: {
      label: translations[language].registration.personalInformations.name,
      placeholder: "Rousseau",
    },
    firstName: {
      label: translations[language].registration.personalInformations.firstName,
      placeholder: "Jean-Jack",
    },
    age: {
      label: translations[language].registration.personalInformations.age,
    },
    birthDay: {
      label: translations[language].registration.personalInformations.birthDay,
    },
    phoneNumber: {
      label:
        translations[language].registration.personalInformations.phoneNumber,
      placeholder: "(+33) 6 06 06 06 06",
    },
    contactEmergency: {
      label:
        translations[language].registration.personalInformations
          .contactEmergency,
      placeholder: "(+33) 6 06 06 06 06",
    },
  };

  // Retour du composant
  return (
    <section className="flex flex-col items-center justify-center px-3 pb-5">
      <h2 className="mb-5 text-center text-2xl font-bold lg:mb-7 lg:text-3xl">
        {translations[language].registration.personalInformations.title}
      </h2>

      <form
        onSubmit={handleSubmit(submit)}
        className="rounded-xl bg-white px-4 py-5 shadow-md md:w-[650px] lg:w-[800px] lg:px-7 lg:py-9"
      >
        <div className="mb-5 flex flex-col gap-y-5 md:flex-row md:gap-x-5">
          {/* Nom */}
          <FormField
            id="name"
            label={fields.name.label}
            type="text"
            placeholder={fields.name.placeholder}
            register={register}
            errors={errors.name}
          />
          {/* Prénom */}
          <FormField
            id="firstName"
            label={fields.firstName.label}
            type="text"
            placeholder={fields.firstName.placeholder}
            register={register}
            errors={errors.firstName}
          />
        </div>

        <div className="mb-5 flex flex-col gap-y-5 md:flex-row md:gap-x-5">
          {/* Age */}
          <FormField
            id="age"
            label={fields.age.label}
            type="number"
            register={register}
            errors={errors.age}
          />
          {/* Date de naissance */}
          <FormField
            id="birthDay"
            label={fields.birthDay.label}
            type="date"
            register={register}
            errors={errors.birthDay}
          />
        </div>

        <div className="mb-5 flex flex-col gap-y-5 md:flex-row md:gap-x-5">
          {/* num de tél */}
          <FormField
            id="phoneNumber"
            label={fields.phoneNumber.label}
            type="tel"
            placeholder={fields.phoneNumber.placeholder}
            register={register}
            maxLength="10"
            errors={errors.phoneNumber}
          />
          {/* contact en cas urgence */}
          <FormField
            id="contactEmergency"
            label={fields.contactEmergency.label}
            type="tel"
            placeholder={fields.contactEmergency.placeholder}
            register={register}
            maxLength="10"
            errors={errors.contactEmergency}
          />
        </div>

        {errors?.global && (
          <p className="text-red-600">{errors.global.message}</p>
        )}

        <div className="mt-10 md:flex md:items-center md:justify-center md:gap-x-5">
          <Button
            onClick={() => {
              navigate(-1);
              setCurrentStep((prevStep) => Math.min(prevStep - 1, 4));
            }}
            type="button"
          >
            <i className="fa-solid fa-chevron-left mr-2 text-sm"></i>
            {translations[language].registration.personalInformations.btnBack}
          </Button>

          <Button type="submit" className="text-white">
            {translations[language].registration.personalInformations.btnSubmit}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInformations;
