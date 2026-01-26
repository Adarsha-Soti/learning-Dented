import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="/">
          Little Corner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            {/* Normal anchor tag */}
            <li className="nav-item">
              <a className="nav-link" href="about">
                About
              </a>
            </li>

            {/* Link Component navigation */}
            <li className="nav-item">
              <Link to="about">LINK About</Link>
            </li>
          </ul>
          <a href="#" className="btn btn-outline-light ms-3">
            Book a Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
