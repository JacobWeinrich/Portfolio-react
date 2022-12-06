import React from "react";
import "../../../css/defaults.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { fab } from '@fortawesome/free-brands-svg-icons'
export default function SkillsSection() {
  return (
    <>
      <section
        id="skills-section"
        className="page-section section-t2 text-white text-center"
      >
        <div className="container">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-3">
            {/* <FontAwesomeIcon icon={fab} /> */}
            </div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}
