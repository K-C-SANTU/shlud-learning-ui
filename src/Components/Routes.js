import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function RouterComponent() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={HomePage} />
			</Routes>
		</BrowserRouter>
	);
}

export default RouterComponent;
