import React from "react";
import SearchEngine from "./SearchEngine";
import Today from "./Today";
import Forecast from "./Forecast";

export default function Weather() {
	return (
		<div className="Weather">
			<h2>Weather App</h2>
			<SearchEngine />
			<Today />
			<Forecast />
		</div>
	);
}
