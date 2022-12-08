import React from "react";
import "../../../css/defaults.css";

export default function SkillsSection() {
  return (
    <>
      <section
        id="skills-section"
        className="page-section section-t2 text-white text-center"
      >
        <div className="container">
          <h2 className="display-4 fw-semibold">Skills</h2>
          <div className="row gy-4 gx-1 justify-content-center">
            <div className="col-4">
              <span className="text-shadow-1 display-3">
                <i className="fa-brands fa-html5"></i>
              </span>
              <h2>HTML</h2>
            </div>
            <div className="col-4">
              <span className="text-shadow-1 display-3">
                <i className="fa-brands fa-css3-alt"></i>
              </span>
              <h2>CSS</h2>
            </div>
            <div className="col-4">
              <span className="text-shadow-1 display-3">
                <i className="fa-brands fa-js"></i>
              </span>
              <h2>JavaScript</h2>
            </div>
            <div className="col-4">
              <span className="text-shadow-1 display-3">
                <i className="fa-brands fa-react"></i>
              </span>
              <h2>React JS</h2>
            </div>
            <div className="col-4">
              <span className="text-shadow-1 display-3">
                <i className="fa-brands fa-node"></i>
              </span>
              <h2>Node JS</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
