import React from "react";
import {NavLink} from 'react-router-dom'
import "../css/defaults.css";
function navbarComp() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg  sticky-top">
        <div className="container-fluid">
          <NavLink className={"navbar-brand fw-bold"} to={"/"}>
            <img className="nav-img" src="./imgs/logo.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fw-semibold">
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/projects"}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/resume"}>
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbarComp;
