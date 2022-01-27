import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// const [color, setColor] = useState("btn-primary");

	// function changeColor() {
	// 	color === "btn-primary"
	// 		? setColor("btn-danger")
	// 		: setColor("btn-primary");
	// }
	// <button className={"btn " + color} onClick={changeColor}>
	// 	Button
	// </button>

	return (
		<div>
			<div id="trafficTop"></div>
			<div className="container">
				<div className="red light">
					<button className="btn btn-danger"></button>
				</div>
				<div className="yellow light">
					<button className="btn btn-warning"></button>
				</div>
				<div className="green light">
					<button className="btn btn-success"></button>
				</div>
			</div>
		</div>
	);
};

export default Home;
