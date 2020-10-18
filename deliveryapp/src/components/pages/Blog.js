import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
//import {Link} from "react-router-dom"
import "../styles/blog.css";

function Blog() {
	/*
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);
    */
	return (
		<>
			<Navbar />
			<div>
				<h2>Blog</h2>
			</div>
		</>
	);
}
export default Blog;
