import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
	let forecastData = {
		day: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
		temperature: ["13", "12", "11"],
	};

	return (
		<div className="Forecast">
			<div className="row">
				<div className="col-2 foreDay">
					<ul>
						<li>{forecastData.day[1]}</li>
						<li>
							<ReactAnimatedWeather
								icon="CLOUDY"
								color="#b39fea"
								size={40}
								animate={true}
							/>
						</li>
						<li>{forecastData.temperature[0]}°C</li>
					</ul>
				</div>
				<div className="col-2 foreDay">
					<ul>
						<li>{forecastData.day[2]}</li>
						<li>
							<ReactAnimatedWeather
								icon="PARTLY_CLOUDY_NIGHT"
								color="#b39fea"
								size={40}
								animate={true}
							/>
						</li>
						<li>{forecastData.temperature[0]}°C</li>
					</ul>
				</div>
				<div className="col-2 foreDay">
					<ul>
						<li>{forecastData.day[3]}</li>
						<li>
							<ReactAnimatedWeather
								icon="RAIN"
								color="#b39fea"
								size={40}
								animate={true}
							/>
						</li>
						<li>{forecastData.temperature[2]}°C</li>
					</ul>
				</div>
				<div className="col-2 foreDay">
					<ul>
						<li>{forecastData.day[4]}</li>
						<li>
							<ReactAnimatedWeather
								icon="CLEAR_DAY"
								color="#b39fea"
								size={40}
								animate={true}
							/>
						</li>
						<li>{forecastData.temperature[0]}°C</li>
					</ul>
				</div>
				<div className="col-2 foreDay">
					<ul>
						<li>{forecastData.day[5]}</li>
						<li>
							<ReactAnimatedWeather
								icon="RAIN"
								color="#b39fea"
								size={40}
								animate={true}
							/>
						</li>
						<li>{forecastData.temperature[2]}°C</li>
					</ul>
				</div>
				<div className="col-2 foreDay">
					<ul>
						<li>{forecastData.day[6]}</li>
						<li>
							<ReactAnimatedWeather
								icon="RAIN"
								color="#b39fea"
								size={40}
								animate={true}
							/>
						</li>
						<li>{forecastData.temperature[1]}°C</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
