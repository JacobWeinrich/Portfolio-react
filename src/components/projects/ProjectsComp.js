import React from "react";
import { NavLink } from "react-router-dom";

function ProjectsComp() {
  return (
    <div className="container text-white min-vh-100">
      <div className="row p-4 justify-content-center text-center">
        <h2 className="display-3 fw-bold">PROJECTS</h2>
        <div className="col-4 text-center ">
          <NavLink
            className={"navbar-brand fw-bold btn btn-secondary"}
            to={"/project-crudApp"}
          >
            <span className="text-shadow-1 display-3">
              <i className="fa-brands fa-react"></i>
            </span>
            <h2>Crud React App</h2>
          </NavLink>
        </div>
        <div className="col-4">
          <a
            className="btn btn-secondary"
            href="http://jacobw.segotw.com/project-examples/college-work/midterm/pages/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-shadow-1 display-4">
              <i class="fa-solid fa-person-running"></i>
            </span>
            <h2>Law Day Run</h2>
          </a>
        </div>
        {/* <div className="col-4"></div> */}
      </div>
    </div>
  );
}

export default ProjectsComp;
