import React from "react";
import SectionTwoProps from "../SectionTwo/SectionTwoProps";
function SectionTwo() {
  return (
    <>
      <div className="second-section-wrapper">
        <div className="second-section-internal-wrapper">
          <SectionTwoProps
            firstTittle={"Give WOW."}
            description="This holiday season, find the perfect gift to knock their stockings off."
            url={"https://www.apple.com/apple-card/#promotion"}
            learnmore={"Shop the gift guied"}
          />
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
