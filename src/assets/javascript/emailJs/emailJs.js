import emailjs from "@emailjs/browser";

// initialisation of emailJS
export const initEmailJs = () => {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });
};
