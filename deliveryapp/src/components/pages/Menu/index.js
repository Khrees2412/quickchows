import React, { useState } from "react";

export function Breakfast() {
	const [breakfast, setBreakfast] = useState("something");
	return (
		<div>
			<h4>Breakfast</h4>
			{breakfast}
		</div>
	);
}
export function Lunch() {
	const [lunch, setLunch] = useState("something");
	return (
		<div>
			<h4>Lunch</h4>
			{lunch}
		</div>
	);
}

export function Dinner() {
	const [dinner, setDinner] = useState("something");
	return (
		<div>
			<h4>Dinner</h4>
			{dinner}
		</div>
	);
}
