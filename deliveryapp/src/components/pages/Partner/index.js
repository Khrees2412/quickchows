import React, { Fragment } from "react";
import Navbar from "../../layouts/Navbar";
import "./partner.css";

function Partners() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Fragment>
			<Navbar />

			<div className="contact-form" id="form-box">
				<form action="/contact" method="POST" onSubmit={handleSubmit}>
					<h4 className="h4"> Send us a mail</h4>
					<div className="form-control">
						<label htmlFor="name">Name:</label>
						<input
							className="input"
							type="text"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email:</label>
						<input
							className="input"
							type="email"
							placeholder="Email Address"
						/>
					</div>
					<div className="form-control">
						<label htmlFor="message">Message:</label>
						<textarea
							className="input"
							placeholder="It should be brief and straight to the point"
						/>
					</div>
					<button className="btn-form" type="submit">
						Send
					</button>
				</form>
			</div>
		</Fragment>
	);
}

export default Partners;
/*
  <h3>You can always reach out
                 to us on our various social media handles.. </h3>
            <div className="social">
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
            </ul>
            </div>
            */
