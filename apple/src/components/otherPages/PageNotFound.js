import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="page">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <h2>The page is not found :please try it later:</h2>
                <p>error 404 or page not found! </p>
                <Link to="/">go-back</Link>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
