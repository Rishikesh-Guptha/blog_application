/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Createpost = () => {
	return (
		<div>
			<Link to={"/"}>
				<button>back</button>
			</Link>
			<div>Create post</div>
		</div>
	);
};

export default Createpost;
