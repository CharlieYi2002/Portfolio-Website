import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import NAV from "./NAV";
import Home from "./Home.js"
import About from "./About.js"
import Projects from "./Projects.js"


export default function App() {
  return (
    <div className="App">
      <Router>
        <NAV />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />

        </Routes>
      </Router>
    </div>
  );
}
