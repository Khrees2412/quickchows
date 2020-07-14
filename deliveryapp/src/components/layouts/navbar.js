import React,{Fragment} from"react";
import "../styles/navbar.css"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <Fragment>
<nav className="header-container">
                <Link to="/" className="navbar-brand">
                QuickChows
                </Link>
                <div className="nav-links">
                  <li className="nav-item">
                    <Link to={"/blog"} >
                    Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact-us"} >
                    Partner With Us
                    </Link>
                  </li>

                    <Link to={"/login"} className="onboard1">
                    Log In
                    </Link>
                    <Link to={"/signup"} className="onboard">
                    Sign Up
                    </Link>
                </div>
                </nav>
        </Fragment>
    )
}

export default Navbar;