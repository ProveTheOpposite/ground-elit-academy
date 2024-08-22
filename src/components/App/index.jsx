// hook
import { useState } from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// components
import Home from "src/pages/Home";
import ErrorElement from "../ErrorElement";
import Footer from "../Footer";
import Header from "../Header";
import ChangeLanguage from "../Header/ChangeLanguage";
import Modal from "../Modal";
import WarningSite from "../WarningSite";

function App() {
  // State pour savoir si la modal de changement de langue est ouverte
  const [isChangeLanguageModalOpen, setChangeLanguageModalOpen] =
    useState(false);
  // state pour afficher la modal du warning component au moment du chargement du site
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(true);

  // Fonction pour ouvrir la modal de changement de langue
  const handleClickOpenChangeLanguageModal = () =>
    setChangeLanguageModalOpen(true);

  return (
    <div className="flex min-h-screen flex-col">
      {isWarningModalOpen && (
        <Modal
          onClick={() => setIsWarningModalOpen(false)}
          className="bg-modal-warning"
        >
          <WarningSite setIsWarningModalOpen={setIsWarningModalOpen} />
        </Modal>
      )}

      <Header openChangeLanguageModal={handleClickOpenChangeLanguageModal} />

      {isChangeLanguageModalOpen && (
        <Modal
          onClick={() => setChangeLanguageModalOpen(false)}
          className="bg-modal"
        >
          <ChangeLanguage closeModal={setChangeLanguageModalOpen} />
        </Modal>
      )}

      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorElement />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
