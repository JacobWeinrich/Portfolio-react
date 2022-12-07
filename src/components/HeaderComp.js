import React from "react";

import "../css/header.css";
import "../css/defaults.css";
function HeaderComp() {
  return (
    <>
      <section className="section-header text-white text-shadow-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-3">
              <img
                className="header-img"
                src="./imgs/profile-pic.jpg"
                alt="Jacob Weinrich Profile Pic"
              />
            </div>
            <div className="col-9  justify-content-center">
              <img className="header-img-2" src="./imgs/logo.png" alt="" />
              <div>
                <h2>Hello my name is Jacob Weinrich</h2>
                <p className="fs-5">
                  I am Currently a student at Ranken Technical College Studying
                  for a Associates Degree in Web and App Development.
                </p>
                <p className="fs-5">
                  If your interested in a website give me a call or send a
                  email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderComp;
