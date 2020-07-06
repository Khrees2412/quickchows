import React, {Fragment }from 'react';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Blog from "./blog"
import Contact from "./contact"

function Footer (){
        return ( 
            <Router> 
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
                            <Link to={"/contact"} className="nav-link">
                            Privacy Policy
                            </Link>
                          </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">
                            Advertise With Us
                            </Link>
                          </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">
                            Terms Of Use
                            </Link>
                          </li>
                        </div>    
                      </nav>
                      </footer>
                      
                      <div className="container mt-3">
                        <Switch>
                          <Route exact path="/company" component={Blog} />
                          <Route exact path="/blog" component={Blog} />
                          <Route exact path="/contact" component={Contact} />
                          <Route exact path="/privacypolicy" component={Contact} />
                          <Route exact path="/advertising" component={Contact} />
                          <Route exact path="/tos" component={Contact} />
          
                        </Switch>
                      </div>

           </Fragment>
           
           </Router>
        )
}
     
export default Footer;