import emailjs from "@emailjs/browser";

export const initEmailJs = () => {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });
};
