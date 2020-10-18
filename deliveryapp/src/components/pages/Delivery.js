import React, { Component, Fragment } from "react";
import "../styles/delivery.css";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Delivery from "../assets/two-plates.jpg";
import Order from "../assets/safe-delivery.jpg";
import Location from "../assets/pizza.jpg";

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="whole-body">
					<div className="attention">
						<div className="call special">
							<h1>Hungry Stomach ? </h1>
							<p>
								Don't fret, we got you. <br />
								Trust us to give you the best food service.
							</p>
							<h4>
								Food at the speed of light
								<i class="fas fa-thunderstorm    "></i>
							</h4>
							<Link to="/offers" id="link">
								View Our Offers
							</Link>
						</div>
					</div>

					<div className="main-page">
						<h3>Worry less about food.</h3>
						<p>
							At QuickChows we know your time is precious, which
							is why we came up with a plan that caters to your
							need.
						</p>
						<p>
							All you have to do is select a offer that best suits
							your need and we take care of the rest.
						</p>
						<p>
							QuickChows is designed to help you focus on what
							really matters in school, eliminating the stress of
							cooking or walking to get food.
						</p>
					</div>

					<div className="gallery">
						<div className="usp card">
							<img
								src={Delivery}
								alt="Anywhere you are in town"
							/>
							<p>
								Food from where you want, when you want,
								wherever you want!
							</p>
						</div>
						<br />
						<div className="usp card">
							<img src={Location} alt="The best staff" />
							<p>Highly trained for best service</p>
						</div>
						<br />
						<div className="usp card">
							<img src={Order} alt="Trustworthy orders" />
							<p>
								Make an order you can trust, satisfying your
								hunger and thirst in an instant
							</p>
						</div>
					</div>
				</div>

				<Footer />
			</Fragment>
		);
	}
}

export default Home;
