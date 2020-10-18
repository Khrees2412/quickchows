import React, { Fragment } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <header className="main-nav">
        <div className="logo">QuickChows</div>
        <label for="toggle" className="label">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />
        <nav className="menu">
          <Link to={"/"}>Home</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact-us"}>Partner With Us</Link>
          <Link className="onboard-log" to={"/login"}>
            Login
          </Link>
          <Link className="onboard-sign" to={"/signup"}>
            Sign Up
          </Link>
        </nav>
      </header>
    </Fragment>
  );
}

export default Navbar;
