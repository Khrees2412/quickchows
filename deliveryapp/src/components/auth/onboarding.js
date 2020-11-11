import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./onboarding.css";
import Footer from "../layouts/Footer";

export function Signup() {
	useEffect(() => {
		// Update the document title using the browser API
		document.title = "Sign In";
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("good choice!! ");
	};

	return (
		<Fragment>
			<div className="onboard-form">
				<h1>
					Back to
					<Link to="/" className="goto">
						Home
					</Link>
				</h1>

				<form
					method="POST"
					onSubmit={handleSubmit}
					action="/api/user/signup"
					className="sign-box"
				>
					<div className="form-input">
						<label>Name: </label>
						<input type="text" name="name" />
					</div>
					<br />
					<div className="form-input">
						<label>Phone Number: </label>
						<input type="tel" name="tel" />
					</div>
					<br />
					<div className="form-input">
						<label>Email: </label>
						<input type="email" name="email" />
					</div>
					<br />
					<div className="form-input">
						<label>Password: </label>
						<input type="password" name="pwd" />
					</div>
					<br />
					<div className="form-input">
						<label>Confirm Password: </label>
						<input type="password" name="pwd" />
					</div>
					<br />
					<button className="btn" type="submit">
						Sign Up
					</button>
					<p>
						Already have an account?
						<Link to="/login" className="goto">
							Login
						</Link>{" "}
					</p>
				</form>
				<Footer />
			</div>
		</Fragment>
	);
}

export function Login() {
	useEffect(() => {
		document.title = "Login | QuickChows";
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("good choice!! ");
	};

	return (
		<Fragment>
			<div className="onboard-form">
				<h1>
					Back to{" "}
					<Link to="/" className="goto">
						Home
					</Link>
				</h1>

				<form
					className="login-box"
					onSubmit={handleSubmit}
					action="/api/user/login"
				>
					<div className="form-input">
						<label>Email: </label>
						<input type="email" />
					</div>

					<div className="form-input">
						<label>Password: </label>
						<input type="password" />
					</div>
					<button className="btn" type="submit">
						Log In
					</button>
					<p>
						New to QuickChows?
						<Link to="/signup" className="goto">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
			<Footer />
		</Fragment>
	);
}
