import { atom } from "recoil";

// Cette fonction crée un effet de persistance pour un atome Recoil,
// en stockant son état dans localStorage pour garantir que l'état
// est sauvegardé à travers les rechargements de page et les sessions de navigation.
const persistStateEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

// Vérifie si une langue est sauvegardée dans localStorage
const savedLanguage = localStorage.getItem("language");

// atom définissant la langue du site (anglais ou francais)
export const languageState = atom({
  key: "languageState",
  default: savedLanguage || "fr", // Utilise la langue sauvegardée ou 'fr' par défaut
});

// atom qui contiendra l'id de l'utilisateur crée lors de l'inscription qui servira dans divers cas
export const userIdState = atom({
  key: "userIdState",
  default: "",
});

// atom permettant de savoir si un user est connecté
export const isRegisteredState = atom({
  key: "isRegisteredState",
  default: false,
});

// atom permettant de savoir lorsque le user est en phase d'inscription
export const isRegisteringState = atom({
  key: "isRegisteringState",
  default: false,
  effects_UNSTABLE: [persistStateEffect("isRegisteringState")],
});

// atom permettant de stocker l'email et le password jusqu'a la fin des 4 étapes de l'inscription pour crée le user
export const registrationValuesState = atom({
  key: "registrationValuesState",
  default: {
    email: "",
    password: "",
  },
  effects_UNSTABLE: [persistStateEffect("registrationValuesState")],
});

// atom permettant de stocker les infos personnelles jusqu'a la fin des 4 étapes de l'inscription pour crée le user
export const registrationPersonalInfoValuesState = atom({
  key: "registrationPersonalInfoValuesState",
  default: {
    name: "",
    firstName: "",
    age: null,
    phoneNumber: "",
    birthDay: "",
    contactEmergency: "",
  },
  effects_UNSTABLE: [persistStateEffect("registrationPersonalInfoValuesState")],
});

// atom permettant de passer d'une étape à l'autre au moment de l'inscription
export const currentStepState = atom({
  key: "currentStepState",
  default: 1,
  effects_UNSTABLE: [persistStateEffect("currentStepState")],
});
