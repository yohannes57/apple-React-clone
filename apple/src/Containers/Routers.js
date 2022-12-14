import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "../components/SectionOne/Banner";
import SectionTwo from "../components/SectionTwo/SectionTwo";
import SectionThree from "../components/SectionThree/SectionThree";
import SectionFour from "../components/SectionFour/SectionFour";
import SectionFive from "../components/SectionFive/SectionFive";
import SectionSix from "../components/SectionSix/SectionSix";
import SlidePage from "../components/SlidePage/SlidePage";
import YouTube from "../components/VideoParts/YouTube";
// pages
import Ipad from "../components/otherPages/Ipad";
import Iphone from "../components/otherPages/Iphone";
import Mac from "../components/otherPages/Mac";
import Music from "../components/otherPages/Musics";
import Support from "../components/otherPages/Support";
import Tv from "../components/otherPages/Tv";
import Watch from "../components/otherPages/Watch";
import PageNotFound from "../components/otherPages/PageNotFound";
import Productpage from "../components/otherPages/ProductPage";
import Randomuser from "../components/otherPages/Randomuser";
import NewsFeed from "../components/NewsFeed/NewsFeed";
function Routers() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
              <SlidePage />
              {/* <YouTube / */}
              {/* <Randomuser /> */}
              {/* <NewsFeed />  */}
            </>
          }
        />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/support" element={<Support />} />
        <Route path="/music" element={<Music />} />
        <Route path="/iphone/:productID" element={<Productpage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routers;
