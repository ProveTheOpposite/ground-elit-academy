// hook
import { useEffect, useState } from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// javascript
import { initEmailJs } from "src/assets/javascript/emailJs/emailJs";
// components
import ContactUs from "src/pages/ContactUs";
import Home from "src/pages/Home";
import PrivacyAndPolicy from "src/pages/PrivacyAndPolicy";
import TermsAndConditions from "src/pages/TermsAndConditions";
import ErrorElement from "../ErrorElement";
import Footer from "../Footer";
import Header from "../Header";
import ChangeLanguage from "../Header/ChangeLanguage";
import Modal from "../Modal";
import ScrollToTop from "../ScrollToTop";

// Table of routes with paths and components
const ROUTES = [
  { path: "/", element: <Home /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
  { path: "/privacy-policy", element: <PrivacyAndPolicy /> },
  { path: "*", element: <ErrorElement /> },
];

const App = () => {
  // state to handle opening of modals
  const [openModal, setOpenModal] = useState(null);

  // function to open/close a modal with a type
  const toggleModal = (modalType) => setOpenModal(modalType);

  useEffect(() => {
    initEmailJs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header openChangeLanguageModal={() => toggleModal("changeLanguage")} />

      {openModal === "changeLanguage" && (
        <Modal onClick={() => toggleModal(null)} className="bg-modal">
          <ChangeLanguage closeModal={() => toggleModal(null)} />
        </Modal>
      )}
      <ScrollToTop />

      <main className="flex flex-1 flex-col">
        <Routes>
          {ROUTES.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
