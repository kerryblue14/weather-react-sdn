import React from "react";
import SearchEngine from "./SearchEngine";
import Today from "./Today";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<h2>Weather App</h2>
			<div className="wrapper">
				<SearchEngine />
				<Today />
				<Forecast />
			</div>
		</div>
	);
}
