import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css'; // Ensure your CSS file path is correct

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => {
      console.log("Toggling Menu. Previous State:", prevState); // Log before toggling
      return !prevState;
    });
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      {isOpen && (
        <div className="menu-panel">
          <div className="menu-item">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </div>
          <div className="menu-item">
            <Link to="/About" onClick={toggleMenu}>About</Link>
          </div>
          <div className="menu-item">
            <Link to="/Projects" onClick={toggleMenu}>Projects</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
