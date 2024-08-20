import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.css";
import Git_Logo from "./imgs/Git_Logo.svg";
import LinkedIn_Logo from "./imgs/LinkedIn_Logo.svg";
import Profile_Logo from "./imgs/Profile_Logo.svg";
import Resume from "./resume.pdf";
import HamburgerMenu from "./HamburgerMenu";

export default function NAV() {
  return (
    <div className="NAV">
      {/* Left Group */}
      <div className="left-group">
        <div className="NAV-Component">
          <div className="card">
            <Link to="https://www.linkedin.com/in/charlie-yi-2002/" target="_blank">
              <img src={LinkedIn_Logo} alt="LinkedIn" />
            </Link>
          </div>
        </div>
        <div className="NAV-Component">
          <div className="card">
            <Link to="https://github.com/CharlieYi2002" target="_blank">
              <img src={Git_Logo} alt="Github Logo" />
            </Link>
          </div>
        </div>
        <div className="NAV-Component">
          <div className="card">
            <Link to={Resume} target="_blank">
              <img src={Profile_Logo} alt="Resume" />
            </Link>
          </div>
        </div>
      </div>
      {/* Middle Group */}
      {/*<div className="middle-group">
        <div className="NAV-Component">
          <h1>Charlie Yi</h1>
        </div>
      </div>*/}
      {/* Right Group */}
      <HamburgerMenu />
    </div>
  );
}
