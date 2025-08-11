import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">RAINBOW SIX</div>

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          
          {/* New Category Dropdown */}
          <li>
            <a href="#category" onClick={(e) => e.preventDefault()}>Category ▾</a>
            <div className="dropdown">
              <a href="#deployment" onClick={() => setOpen(false)}>Deployment</a>
              <a href="#weapons" onClick={() => setOpen(false)}>Best Weapons</a>
              <a href="#teams" onClick={() => setOpen(false)}>Best Team for Each Map</a>
            </div>
          </li>

          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <button className="navbar-cta">DEPLOY NOW</button>

        <div
          className={`navbar-burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
