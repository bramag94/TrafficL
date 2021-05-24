import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function TrafficLight() {
	return (
		<div className="container text-center mt-5">
			<div>
				<div className="bodyt">
					<div>
						<div className="circle"></div>
					</div>
					<div>
						<div className="circle"></div>
					</div>
					<div>
						<div className="circle"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
