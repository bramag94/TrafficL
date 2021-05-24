import React, { useState } from "react";
//import styles from "./styles/index.scss";

//create your first component
export function TrafficLight() {
	const [selectedcolor, setSelectedcolor] = useState("");

	return (
		<div>
			<div className="traffic">
				<div>
					<div
						className={
							"red circle" +
							(selectedcolor === "red" ? " selected" : "")
						}></div>
				</div>
				<div>
					<div
						className={
							"yellow circle" +
							(selectedcolor === "yellow" ? " selected" : "")
						}></div>
				</div>
				<div>
					<div
						className={
							"green circle" +
							(selectedcolor === "yellow" ? " selected" : "")
						}></div>
				</div>
			</div>
		</div>
	);
}
