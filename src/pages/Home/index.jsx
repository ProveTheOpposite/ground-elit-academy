// components
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Rates from "./components/Rates";
import RequestForInformations from "./components/RequestForInformations";
import Schedule from "./components/Schedule";
import Team from "./components/Team";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Team />
      <Schedule />
      <Rates />
      <Faq />
      <RequestForInformations />
    </>
  );
};

export default Home;
