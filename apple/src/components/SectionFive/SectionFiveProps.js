import React, { Component } from "react";
function SecFourProps(props) {
  return (
    <>
      <div className="section-title">
        <div className="watach">
          <img src={props.Watch} alt={props.alt} />
        </div>
        <div className={props.fontsize}>{props.title}</div>
        <div className="sharjoy">{props.disc}</div>
        <div className="learn-more">
          <h2>
            <a className="learnmore" href={props.url}>
              {props.learnmore}
            </a>
            {props.buy ? (
              <a className="learnmore" href={props.buyurl}>
                {props.buy}
              </a>
            ) : (
              ""
            )}
          </h2>
        </div>
      </div>
    </>
  );
}

export default SecFourProps;
