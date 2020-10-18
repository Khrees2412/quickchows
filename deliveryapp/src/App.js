import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./components/pages/Delivery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/pages/Blog";
import { Signup, Login } from "./components/auth/onboarding";
import Terms from "./components/pages/Tos";
import Company from "./components/pages/Company";
import Partners from "./components/pages/Partner";
import PrivacyPolicy from "./components/pages/Privacy";
// import Breakfast, { Dinner, Lunch } from "./components/pages/Menu";
import Offers from "./components/pages/Offers";

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Switch>
						{/* <Route path="/dinner-menu" component={Dinner} />
            <Route path="/lunch-menu" component={Lunch} />
            <Route path="/breakfast-menu" component={Breakfast} /> */}
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
				</Fragment>
			</Router>
		);
	}
}

export default App;
