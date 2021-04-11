import React from "react";
import "./Today.css";
import axios from "axios";

export default function Today() {
	// data should be replaced with response from api
	let apiKey = "";
	let apiUrl = "";
	let todayData = {
		city: "London", // maybe use props here ?
		date: "Day, Date & Time HH:MM",
		description: "Mostly cloudy",
		imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
		feels: "9",
		temperature: "13",
		percipitation: "1",
		humidity: "10",
		wind: "5",
	};
	return (
		<div className="row bg justify-content-center">
			<div className="Today">
				<h1>{todayData.city}</h1>
				<ul className="now-Today">
					<li>{todayData.date}</li>
					<li>{todayData.description}</li>
				</ul>

				<div className="row">
					<div className="col-6">
						<div className="clearfix current weather-temperature">
							<img
								src={todayData.imgUrl}
								alt={todayData.description}
								className="float-left"
							/>
							<strong className="temperature float-left">
								{todayData.temperature}
							</strong>
							<span className="units">
								<a href="/">°C</a> |<a href="/">°F</a>
							</span>
						</div>
					</div>
					<div className="col-6">
						<ul className="weather-factors float-left">
							<li>
								Feels like:<span>{todayData.feels}</span> °C
							</li>
							<li>
								Percipitation:<span>{todayData.percipitation}</span> %
							</li>
							<li>
								Humidity:<span>{todayData.humidity}</span> %
							</li>
							<li>
								Wind speed:<span>{todayData.wind}</span> Kmph
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
