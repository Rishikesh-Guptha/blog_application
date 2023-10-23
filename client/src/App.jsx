/** @format */
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Createpost from "./pages/Createpost";
import Navafter from "./pages/Navafter";
import Navbefore from "./pages/Navbefore";

function App() {
	const [authenticated, setAuthenticated] = useState(true); //After adding authentication create 2 navbars ,1-before siging in, 1-after siging in and change the default value to false
	return (
		<div className="App">
			<BrowserRouter>
				{authenticated ? <Navafter /> : <Navbefore />}
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/Createpost"
						element={<Createpost />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
