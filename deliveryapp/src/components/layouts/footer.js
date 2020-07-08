import React, {Fragment }from 'react';
import {Link } from "react-router-dom";
import Blog from "./blog"
import Contact from "./contact"

function Footer (){
        return (  
             <Fragment>
             <footer>
                 <nav>
                        <div className="nav-links">
                        <li className="nav-item">
                            <Link to={"/company"} className="nav-link">
                            Company
                            </Link>
                          </li>     
                        <li className="nav-item">
                            <Link to={"/blog"} className="nav-link">
                            Blog
                            </Link>
                          </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">
                            Contact Us
                            </Link>
                          </li>
                        <li className="nav-item">
                            <Link to={"/privacypolicy"} className="nav-link">
                            Privacy Policy
                            </Link>
                          </li>
                        <li className="nav-item">
                            <Link to={"/partner"} className="nav-link">
                            Partner With Us
                            </Link>
                          </li>
                        <li className="nav-item">
                            <Link to={"/tos"} className="nav-link">
                            Terms Of Use
                            </Link>
                          </li>
                        </div>    
                      </nav>
                      </footer>
           </Fragment>
           
          
        )
}
     
export default Footer;