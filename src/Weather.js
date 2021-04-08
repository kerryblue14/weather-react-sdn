import React from "react";
import Loader from "react-loader-spinner";

export default function Weather() {
	return (
		<div className="Weather">
			<Loader
				type="Puff"
				color="orange"
				height={100}
				width={100}
				timeout={10000} //10 secs
			/>
		</div>
	);
}
