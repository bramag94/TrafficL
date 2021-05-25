import React, { useState } from "react";
//import styles from "./styles/index.scss";

//create your first component
export function TrafficLight() {
	const [selectedcolor, setSelectedcolor] = useState("");

	return (
		<div className="container">
			<div className="traffic">
				<div>
					<div
						onClick={() => setSelectedcolor("red")}
						className={
							"red circle" +
							(selectedcolor === "red" ? " selected" : "")
						}></div>
				</div>
				<div>
					<div
						onClick={() => setSelectedcolor("yellow")}
						className={
							"yellow circle" +
							(selectedcolor === "yellow" ? " selected" : "")
						}></div>
				</div>
				<div>
					<div
						onClick={() => setSelectedcolor("green")}
						className={
							"green circle" +
							(selectedcolor === "green" ? " selected" : "")
						}></div>
				</div>
			</div>
		</div>
	);
}
