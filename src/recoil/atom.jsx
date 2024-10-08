import { atom } from "recoil";

// Vérifie si une langue est sauvegardée dans localStorage
const savedLanguage = localStorage.getItem("language");

// atom définissant la langue du site (anglais ou francais)
export const languageState = atom({
  key: "languageState",
  default: savedLanguage || "fr", // Utilise la langue sauvegardée ou 'fr' par défaut
});

// atom stockant les cours du planning
export const eventsScheduleState = atom({
  key: "eventsScheduleState",
  default: [],
});
