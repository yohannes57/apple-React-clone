import Header from "../components/Header/Header";
// import { Routes, Route } from "react-router-dom";

import "../Assets/css/bootstrap.css";
import "../Assets/css/styles.css";
import Routers from "./Routers";
import Footer from "../components/Footer/Footer";
import Banner from "../components/SectionOne/Banner";
import SectionTwo from "../components/SectionTwo/SectionTwo";
import SectionThree from "../components/SectionThree/SectionThree";
import SectionFour from "../components/SectionFour/SectionFour";
import Ipad from "../components/otherPages/Ipad";
import YouTube from "../components/VideoParts/YouTube";
function App() {
  return (
    <>
      <Header />
      <Routers />
      {/* <Banner /> */}
      {/* <SectionThree />
      <SectionTwo />
      <SectionFour />
      <YouTube /> */}
      <Footer />
    </>
  );
}

export default App;
