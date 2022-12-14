import React, { Component } from "react";

function TwoThreeProps(props) {
  return (
    <>
      <div className={props.colorTittle}>
        <div className="first-title">
          <div className="description">
            <p>{props.secondTittle}</p>
          </div>
          <div className="price">
            <h3>{props.desc}</h3>
          </div>
          <div className="learn-more">
            <h2>
              <a className="learnmore" href={props.url}>
                {props.learnmore}
              </a>
              <a className="learnmore" href={props.buyurl}>
                {props.buy}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoThreeProps;
