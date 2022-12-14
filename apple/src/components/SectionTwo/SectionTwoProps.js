import React from "react";

function TwoThreeProps(props) {
  return (
    <>
      <div className="second-section_title">
        <div className="items-title">
          <h1>{props.firstTittle}</h1>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
        <div className="learn-more">
          <h2>
            <a className="learnmore" href={props.url}>
              {props.learnmore}
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default TwoThreeProps;
