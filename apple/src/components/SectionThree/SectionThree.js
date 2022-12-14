import React from "react";
import applecardlogo from "../../Assets/images/icons/apple_card.png";
import SectionThreeProps from "../SectionThree/SectionThreeProps";
function SectionThree() {
  return (
    <>
      <div className="third-section-wrapperf">
        <div className="second-section-internal-wrapper2">
          <div className="apple-card">
            <img src={applecardlogo} alt="applecard" />
          </div>
          {/* firstTittle={"iPhone 14"} */}
          <SectionThreeProps
            secondTittle={
              "save 5% on apple products.with a new apple card through december 25 "
            }
            desc={"Only at apple .exclusion and tems apply:"}
            url={"/learmore"}
            learnmore={"Lear More"}
            buyurl={"/buyurl"}
            buy={"Apply now"}
          />
        </div>
      </div>
    </>
  );
}
export default SectionThree;
