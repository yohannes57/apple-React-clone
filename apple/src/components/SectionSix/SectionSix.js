import React from "react";
// import Watch from "../../Assets/images/icons/airPod.png";
// import Cardlogo from "../../Assets/images/home/icons/watch_ultra.png";
import Cardlogo from "../../Assets/images/icons/watch_ultra.png";
import Watch from "../../Assets/images/icons/watch-8.png";
import M2 from "../../Assets/images/icons/ipadPro.png";
import SectionSixOne from "./SectionSixOne";
import SectionSixProps from "./SectionSixProps";
function SectionSix() {
  return (
    <>
      <section>
        <div className="six-section-wrapper">
          <div className="six-section-internal-wrapper">
            <div className="six-column-one-section">
              <SectionSixOne
                Watch={Watch}
                alt=""
                fontsize="watch-a"
                title={`A health ahead`}
                sharjoy="sharjoy"
                disc={""}
                url={"https://www.apple.com/apple-watch-series-8/"}
                learnmore={"Lear more  "}
                buyurl="https://www.apple.com/apple-watch-series-8/"
                buy="Buy"
              />
            </div>

            <div className="six-column-two-section">
              <SectionSixProps
                Watch=""
                alt=""
                fontsize="six-watch-ultra"
                title={"iPad Pro"}
                imglogo={M2}
                disc="Supercharged by"
                url={"https://www.apple.com/ipad-pro/"}
                learnmore={"Learn More"}
                buyurl="https://www.apple.com/ipad-pro/"
                buy={"Buy"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionSix;
