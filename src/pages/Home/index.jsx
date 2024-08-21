// hook
// import { useRecoilValue } from "recoil";
// atom
// import { isRegisteredState } from "src/recoil";
// components
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Rates from "./components/Rates";
// import RegistrationHome from "./components/RegistrationHome";
import Schedule from "./components/Schedule";
import Team from "./components/Team";

const Home = () => {
//   const isRegistered = useRecoilValue(isRegisteredState);

  return (
    <>
      <Banner />
      <AboutUs />
      <Team />
      <Schedule />
      <Rates />
      {/* si il y a inscription, pas besoin de voir le composant RegistrationHome */}
      {/* {!isRegistered && <RegistrationHome />} */}
    </>
  );
};

export default Home;
