import React from "react";
import "./App.css";
import Home from "./components/pages/Delivery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/pages/Blog";
import { Signup, Login } from "./components/auth/onboarding";
import Terms from "./components/pages/Tos";
import Company from "./components/pages/Company";
import Partners from "./components/pages/Partner";
import PrivacyPolicy from "./components/pages/Privacy";
import Offers from "./components/pages/Offers";

 function App (){
		return (
			<Router>
				<>
					<Switch>
						<Route path="/offers" component={Offers} />
						<Route
							path="/privacypolicy"
							component={PrivacyPolicy}
						/>
						<Route path="/contact-us" component={Partners} />
						<Route path="/company" component={Company} />
						<Route path="/tos" component={Terms} />
						<Route path="/blog" component={Blog} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route exact={true} path="/" component={Home} />
					</Switch>
				</>
			</Router>
		);
}

export default App;
