// hook
import { useState } from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// components
import Home from "src/pages/Home";
import TermsAndConditions from "src/pages/TermsAndConditions";
import ErrorElement from "../ErrorElement";
import Footer from "../Footer";
import Header from "../Header";
import ChangeLanguage from "../Header/ChangeLanguage";
import Modal from "../Modal";
import ScrollToTop from "../ScrollToTop";

const App = () => {
  // State pour ouvrir la modal du traducteur
  const [isChangeLanguageModalOpen, setChangeLanguageModalOpen] =
    useState(false);

  // Fonction pour ouvrir la modal de changement de langue
  const handleClickOpenChangeLanguageModal = () =>
    setChangeLanguageModalOpen(true);

  // Fonction pour fermer la modal de changement de langue
  const handleClickCloseChangeLanguageModal = () =>
    setChangeLanguageModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header openChangeLanguageModal={handleClickOpenChangeLanguageModal} />

      {isChangeLanguageModalOpen && (
        <Modal
          onClick={handleClickCloseChangeLanguageModal}
          className="bg-modal"
        >
          <ChangeLanguage closeModal={handleClickCloseChangeLanguageModal} />
        </Modal>
      )}

      <ScrollToTop />

      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="*" element={<ErrorElement />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
