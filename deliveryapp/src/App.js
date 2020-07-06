import React,{Component,Fragment} from 'react';
import './App.css';
import DeliveryMain from "./components/delivery";
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Blog from "./components/blog"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Login from "./components/login"
import Signup from "./components/register"



class App extends Component{
  render(){
  return (
    <Router>
    <Fragment>
          <div>
              <nav className="header-container">
                <a href="/" className="navbar-brand">
                QuickChows
                </a>
                <div className="nav-links">
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

                    <Link to={"/login"} className="onboard">
                    Log In
                    </Link>
                    <Link to={"/signup"} className="onboard">
                    Sign Up
                    </Link>
                </div>
                </nav>
              <div className="container mt-3">
                <Switch>
                  <Route exact path="/" component={DeliveryMain} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
  
                </Switch>
              </div>
            </div>

    <Footer/>
   </Fragment>
     </Router>
  );
}
}

export default App;