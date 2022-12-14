import React, { Component } from "react";

function BannerProps(props) {
  return (
    <>
      <div className="bannerPage">
        <div className="first-title">
          <div className="banner-title">
            <h1>{props.firstTittle}</h1>
          </div>
          <div className="banner_description">
            <h5>{props.secondTittle}</h5>
          </div>
          <div className="learn-more">
            <div>
              <a className="learnmore" href={props.url}>
                {props.learnmore}
              </a>
              <a className="buy" href={props.buyurl}>
                {props.buy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerProps;
