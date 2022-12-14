import React, { Component } from "react";
function SecFourProps(props) {
  return (
    <>
      <div className="section-four-title">
        <div className="watch-description">
          <h1>{props.discription}</h1>
        </div>
        <div className="pro14">
          <h2>{props.pro}</h2>
        </div>
        <div className="learn-more">
          <h3>
            <a className="learnmore" href={props.url}>
              {props.learnmore}
            </a>
            <a className="learnmore" href={props.buyurl}>
              {props.buy}
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default SecFourProps;
