import React, { Fragment } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <header className="main-nav">
        <div className="logo">QuickChows</div>
        <label htmlFor="toggle" className="label">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />
        <nav className="menu">
          <Link to={"/"}>Home</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact-us"}>Partner With Us</Link>
          
        </nav>
      </header>
    </Fragment>
  );
}

export default Navbar;
