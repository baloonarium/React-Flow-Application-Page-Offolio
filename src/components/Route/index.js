import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home"
import Profil from "../../Pages/Profil";
import MyLibrary from "../../Pages/MyLibrary";

const index = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profil" element={<Profil />} />
                    <Route path="/MyLibrary" element={<MyLibrary />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;