import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light " id="navBar">
      <Link className="navbar-brand" style={{ fontSize: "26px" }} to="/">
        Ramon <span className="letter-g">G</span>arza III
      </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item active">
            <Link
              to="/"
              className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}
              id="hoverable"
            >
              Home 
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link
              to="/about"
              className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
              id="hoverable"
            >
              About 
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              id="hoverable"
            >
              Projects 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;