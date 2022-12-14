import React from "react";
// import Watch from "../../Assets/images/icons/airPod.png";
// import Cardlogo from "../../Assets/images/home/icons/watch_ultra.png";
import Cardlogo from "../../Assets/images/icons/watch_ultra.png";
import Watch from "../../Assets/images/icons/airPod_card.png";

import SectionFiveProps from "./SectionFiveProps";
function SectionFive() {
  return (
    <>
      <section>
        <div className="five-section-wrapper">
          <div className="five-section-internal-wrapper">
            <div className="five-column-one-section">
              <SectionFiveProps
                Watch={Watch}
                alt="image"
                fontsize="airpod"
                title={`AirPads`}
                sharjoy="sharjoy"
                disc={"Share the Joy."}
                url={"/learnmore"}
                learnmore={"shop"}
                buyurl="/buy"
                buy=""
              />
            </div>

            <div className="five-column-two-section">
              <SectionFiveProps
                Watch={Cardlogo}
                alt="amgg"
                fontsize="watch-ultra"
                title={"Adevature awaits!"}
                disc=""
                url={"/learnmore"}
                learnmore={"learn more"}
                buyurl="/buy"
                buy={"buy"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionFive;
