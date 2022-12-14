import React, { Component } from "react";
function SectionSixOne(props) {
  return (
    <>
      <div className="six-section-title">
        <div className="watach">
          <img src={props.Watch} alt={props.alt} />
        </div>
        <div className={props.fontsize}>{props.title}</div>
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
    </>
  );
}

export default SectionSixOne;
