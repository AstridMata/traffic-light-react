import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("btn-primary");

	function changeColor() {
		color === "btn-primary"
			? setColor("btn-danger")
			: setColor("btn-primary");
	}
	return (
		<div>
			<button className={"btn " + color} onClick={changeColor}>
				Button
			</button>
			<button className="btn btn-success">Button</button>
			<button className="btn btn-danger">Button</button>
		</div>
	);
};

export default Home;
