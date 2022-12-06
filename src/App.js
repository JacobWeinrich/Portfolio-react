import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/defaults.css"
import NavbarComp from "./components/NavbarComp";
import HomeComp from "./components/pages/HomeComp";
function App() {
  return (
    <>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<HomeComp />} />
      </Routes>

    </>
  );
}

export default App;
