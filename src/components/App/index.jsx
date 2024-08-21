import { lazy } from "react";
// hook
import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// firebase
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// react router dom
import { Route, Routes } from "react-router-dom";
// atom
import {} from "src/recoil";
// components
import Home from "src/pages/Home";
import ErrorElement from "../ErrorElement";
import Footer from "../Footer";
import Header from "../Header";
import ChangeLanguage from "../Header/ChangeLanguage";
import Modal from "../Modal";
// import ProtectedRoute from "../ProtectedRoute";
import WarningSite from "../WarningSite";
const Registration = lazy(() => import("src/pages/Registration"));

function App() {
  // State pour savoir si la modal de changement de langue est ouverte
  const [isChangeLanguageModalOpen, setChangeLanguageModalOpen] =
    useState(false);
  const [isOpenWarningModal, setIsOpenWarningModal] = useState(true);
  // setter permettant de le définir à true pour pouvoir changer l'UI en conséquence
  //   const setIsRegistered = useSetRecoilState(isRegisteredState);
  // setter qui sera réutilisé pour pouvoir faire une requete sur ce user en question
  //   const setUserId = useSetRecoilState(userIdState);
  // state permettant de savoir si le user est en inscription et si c'est pas le cas, ca affiche le footer lorsqu'on est sur /registration malencontreusement
  //   const isRegistering = useRecoilValue(isRegisteringState);
  //   temporaire juste pour afficher la valeur des step
  //   const currentStep = useRecoilValue(currentStepState);

  //   console.log("Current step vaut : ", currentStep);

  //   const location = useLocation();

  // Fonction pour ouvrir la modal de changement de langue
  const handleClickOpenChangeLanguageModal = () =>
    setChangeLanguageModalOpen(true);

  //   effet pour savoir si quelqu'un est inscrit ou non
  //   useEffect(() => {
  //     const auth = getAuth();
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // Dans le cas où le user est inscris
  //         const uidUser = user.uid;
  //         setIsRegistered(true);
  //         setUserId(uidUser);
  //         console.log("Etat du user : connecté ! uId du user : ", uidUser);
  //       } else {
  //         // Dans le cas où il n'est pas inscris
  //         setIsRegistered(false);
  //         console.log("Etat du user : pas inscrit");
  //       }
  //     });
  //   }, [setIsRegistered, setUserId]);

  return (
    <div className="flex min-h-screen flex-col">
      {isOpenWarningModal && (
        <WarningSite setIsOpenWarningModal={setIsOpenWarningModal} />
      )}
      <Header openChangeLanguageModal={handleClickOpenChangeLanguageModal} />
      {isChangeLanguageModalOpen && (
        <Modal>
          <ChangeLanguage closeModal={setChangeLanguageModalOpen} />
        </Modal>
      )}
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<ErrorElement />} />
        </Routes>
      </main>
      {/* {location.pathname === "/registration" && isRegistering ? "" : <Footer />}{" "} */}
      <Footer />
    </div>
  );
}

export default App;
