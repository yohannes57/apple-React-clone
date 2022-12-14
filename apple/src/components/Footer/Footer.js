import React from "react";
import x from "../../Assets/images/icons/16.png";
import "../../Assets/js/Custom";
function Footer() {
  let url = "";
  const thelist = {
    shopeandlearn: [
      "Store",
      "Mac",
      "iPad",
      "Apple Arcade",
      "iCloud",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
      "App Store",
    ],
    services: [
      "Apple Music",
      "Apple TV+",
      "Apple Fitness+",
      "Apple News+",
      "Apple Arcade",
      "iCloud",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
      "App Store",
    ],
    acount: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    applestore: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Refurbished and Clearance",
    ],
    Finnance: ["Apple Trade In", "Order Status", "Shopping Help"],
    AppleandBusiness: [
      "Shop for Business",
      "For Education",
      "Apple and Education",
      "Shop for K-12",
      "Shop for College",
    ],

    ForHealthcare: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
      "For Government",
      "Shop for Government",
      "Shop for Veterans and Military",
    ],
    AppleValues: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Supplier Responsibility",
      "About Apple",
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
    ],
    RacialEquityandJustice: [
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  };
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the
              <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf">
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                here
              </a>
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
                {thelist.shopeandlearn.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>Services</h3>
              <ul>
                {thelist.services.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
              <h3>Account</h3>
              <ul>
                {thelist.acount.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <ul>
                {thelist.applestore.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
              <h3>For Government</h3>
              <ul>
                {thelist.acount.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <ul>
                {thelist.AppleandBusiness.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>

              <h3>For Education</h3>
              <ul>
                {thelist.Finnance.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
              <h3>For Healthcare</h3>
              <ul>
                {thelist.ForHealthcare.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <ul>
                {thelist.AppleValues.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
              <h3>About Apple</h3>
              <ul>
                {thelist.AppleValues.map((list, i) => {
                  return (
                    <li key={i}>
                      <a href="/learn">{list}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href={url}>Find an Apple Store</a> or{" "}
            <a href={url}>other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <a href={url}>Privacy Policy</a>
                </li>
                <li>
                  <a href={url}>Terms of Use</a>
                </li>
                <li>
                  <a href={url}>Sales and Refunds</a>
                </li>
                <li>
                  <a href={url}>Legal</a>
                </li>
                <li>
                  <a href={url}>Site Map</a>
                </li>
              </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={x} alt="imgs" />
              </div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
