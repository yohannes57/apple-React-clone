import React from "react";
import MacPro from "../../Assets/images/home/hero_iphone14.jpg";
import BannerProps from "./BannerProps";

function Banner() {
  return (
    <div>
      <section className="top-100">
        <div className="container-fluid banner-section-wrapper text-center bg-light">
          <div className="row">
            <div className="col-12 details">
              <BannerProps
                firstTittle={"iphone 14"}
                secondTittle={"Big and bigger!"}
                url={"https://www.apple.com/us/shop/goto/buy_iphone/iphone_14"}
                learnmore={"Lear more "}
                buyurl={
                  "https://www.apple.com/us/shop/goto/buy_iphone/iphone_14"
                }
                buy={"       Buy "}
              />
            </div>
            {/* <div className="col-12 first-image me-0 ms-0">
              <img src={MacPro} alt="iphone" />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
