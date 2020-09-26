import React,{Component,Fragment} from 'react';
import './App.css';
import DeliveryMain from "./components/layouts/delivery";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Blog from "./components/layouts/blog"
import {Login} from "./components/layouts/onboarding"
import {Signup} from "./components/layouts/onboarding"
import Terms from "./components/layouts/tos"
import Company from "./components/layouts/company"
import Partners from "./components/layouts/partner"
import PrivacyPolicy from "./components/layouts/privacy"
import Breakfast from "./components/layouts/offers"
import {Lunch} from "./components/layouts/offers"
import {Dinner} from "./components/layouts/offers"
//import Footer from "./components/layouts/footer" //import Navbars from "./components/layouts/navbar"





class App extends Component{
  render(){
  return (
    <Router>
    <Fragment>
                        
                <Switch>
                  <Route path="/dinner-menu" component={Dinner} />
                  <Route path="/lunch-menu" component={Lunch} />
                  <Route path="/breakfast-menu" component={Breakfast} />
                  <Route path = "/privacypolicy" component={PrivacyPolicy} />
                  <Route path = "/contact-us" component={Partners} />
                  <Route path = "/company" component={Company} />
                  <Route path = "/tos" component={Terms} />
                  <Route path = "/blog" component={Blog} />
                  <Route path = "/login" component={Login} />
                  <Route path = "/signup" component={Signup} />
                  <Route exact={true} path="/" component={DeliveryMain} />
  
                </Switch>
              

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