import React, { Component } from "react";

function FooterProps(props) {
  let footerlist = {
    shopeandlearn: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cardsss",
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
      "App Storee",
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
    <>
      <h3>{props.header}</h3>
      {footerlist.shopeandlearn.map((list) => {
        return (
          <li key={list.id}>
            <a href="/learn">{list}</a>
          </li>
        );
      })}
    </>
  );
}

export default FooterProps;
