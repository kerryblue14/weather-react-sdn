import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
	return (
		<div className="SearchEngine">
			<br />
			<div className="row bg justify-content-center">
				<div className="col">
					<form className="SearchEngine">
						<div className="row">
							<div className="col-6">
								<input
									type="search"
									className="form-control"
									placeholder="Hit me with a City!"
									autoFocus="on"
									autoComplete="off"
								/>
							</div>
							<div className="col-2">
								<button
									type="Submit"
									className="search-button btn btn-outline-primary"
									value="Search"
								>
									{" "}
									Search
								</button>
							</div>
							<div className="col-4">
								<button
									type="button"
									className="location-button btn btn-primary"
								>
									Current Location
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
