import React, {Fragment }from 'react';
import {Link } from "react-router-dom";
import "../styles/footer.css"


function Footer (){
        return (  
             <Fragment>
             <footer>
                        <di className="nav-links">
                        <li className="footer-link">
                            <Link to={"/blog"} className="nav-link">
                            Blog
                            </Link>
                          </li>
                        <li className="footer-link">
                            <Link to={"/company"} className="nav-link">
                            Company
                            </Link>
                          </li>     
                          <li className="footer-link">
                            <Link to={"/tos"} className="nav-link">
                            Terms Of Use
                            </Link>
                          </li>
                        <li className="footer-link">
                            <Link to={"/privacypolicy"} className="nav-link">
                            Privacy Policy
                            </Link>
                          </li>
                        <li className="footer-link">
                            <Link to={"/contactus"} className="nav-link">
                            Partner With Us
                            </Link>
                          </li>
                       
                        </di>
                        <div className="social-logo">
                          <Link to={"/contactus"}><i class="fa fa-facebook-square" aria-hidden="true"></i></Link>
                          <Link to={"/contactus"}><i class="fa fa-twitter-square" aria-hidden="true"></i></Link>
                          <Link to={"/contactus"}><i class="fa fa-instagram" aria-hidden="true"></i></Link> 
                        </div>
                      </footer>
           </Fragment>
           
          
        )
}
     
export default Footer;