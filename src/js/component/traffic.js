import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [clicked, setShadow] = useState(null);

	console.log(setShadow);
	const extraredclass = "";
	if (setShadow == "red") extraredclass == "selected";
	const extrayellowclass = "";
	if (setShadow == "yellow") extraredclass == "selected";
	const extragreenclass = "";
	if (setShadow == "green") extraredclass == "selected";

	return (
		<div className="container text-center mt-5">
			<div>
				<div className="bodyt">
					<div>
						<div
							className={`red circle ${extraredclass}`}
							onClick={() => setShadow({ clicked: "red" })}></div>
					</div>
					<div>
						<div
							className={`yellow circle ${extrayellowclass}`}
							onClick={() =>
								setShadow({ clicked: "yellow" })
							}></div>
					</div>
					<div>
						<div
							className={`green circle ${extragreenclass}`}
							onClick={() =>
								setShadow({ clicked: "green" })
							}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
