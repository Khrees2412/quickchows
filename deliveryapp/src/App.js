import React,{Component,Fragment} from 'react';
import './App.css';
import DeliveryMain from "./components/layouts/delivery";
import {BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom";
import Blog from "./components/layouts/blog"
import Contact from "./components/layouts/contact"
import Footer from "./components/layouts/footer"
import Login from "./components/layouts/login"
import Signup from "./components/layouts/register"
import Terms from "./components/layouts/tos"
import Company from "./components/layouts/company"
import Partners from "./components/layouts/partner"
import PrivacyPolicy from "./components/layouts/privacy"



class App extends Component{
  render(){
  return (
    <Router>
    <Fragment>
          <div>
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
              
                <Switch>
                  <Route path = "/privacypolicy" component={PrivacyPolicy} />
                  <Route path = "/partner" component={Partners} />
                  <Route path = "/company" component={Company} />
                  <Route path = "/tos" component={Terms} />
                  <Route path = "/blog" component={Blog} />
                  <Route path = "/contact" component={Contact} />
                  <Route path = "/login" component={Login} />
                  <Route path = "/signup" component={Signup} />
                  <Route exact={true} path="/" component={DeliveryMain} />
  
                </Switch>
              
            </div>

    <Footer/>
   </Fragment>
     </Router>
  );
}
}

export default App;
/*
<a href="https://www.vecteezy.com/free-vector/clock">
Clock Vectors by Vecteezy</a>

*/