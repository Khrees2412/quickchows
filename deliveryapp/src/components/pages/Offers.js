import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { Breakfast, Lunch, Dinner } from "./Menu";

export default function Offers() {
	return (
		<Fragment>
			<div className="offers fc-img">
				<h1>
					Back to
					<Link to="/" className="goto">
						Home
					</Link>
				</h1>
				<h2>Carefully curated meals for healthy living</h2>
				<div className="offer breakfast">
					<Breakfast />
				</div>
				<div className="offer lunch">
					<Lunch />
				</div>
				<div className="offer dinner">
					<Dinner />
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
