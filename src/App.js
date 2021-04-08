import "./App.css";
import Weather from "./Weather";
import Loader from "react-loader-spinner";

function App() {
	return (
		<div className="App">
			<Loader
				type="Puff"
				color="orange"
				height={100}
				width={100}
				timeout={3000} //10 secs
			/>
			<Weather />
		</div>
	);
}

export default App;
