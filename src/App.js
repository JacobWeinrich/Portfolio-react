import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/defaults.css";
import NavbarComp from "./components/NavbarComp";
import HomeComp from "./components/pages/HomeComp";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import ProjectsComp from "./components/projects/ProjectsComp";
import CrudAppComp from "./components/projects/CrudApp/CrudAppComp";

function App() {
  return (
    <div className="body">
      <NavbarComp />
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/projects" element={<ProjectsComp />} />
        <Route path="/project-crudApp" element={<CrudAppComp />} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;
