import React from "react";
import Watch from "../../Assets/images/icons/watch-series5-logo.png";
import Cardlogo from "../../Assets/images/icons/apple-card-logo.png";

import SecFourProps from "./SecFourProps";
function SectionFour() {
  return (
    <>
      <section>
        <div className="four-section-wrapper">
          <div className="four-section-internal-wrapper">
            <div className="four-column-one-section">
              <SecFourProps
                discription={"iPhone 14"}
                pro="Pro.Beyond"
                url={"/learnmore"}
                learnmore={"Learn More "}
                buyurl="/buy"
                buy={"buy"}
              />
            </div>

            <div className="four-column-two-section">
              <SecFourProps
                pro={"Lovable,Drawable,Magical"}
                discription={"Ipad"}
                url={"/learnmore"}
                learnmore={"Learn More "}
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
export default SectionFour;
