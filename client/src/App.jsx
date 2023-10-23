/** @format */
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [allposts, setAllposts] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:7000/posts").then((resp) => {
			console.log(resp.data);
			setAllposts(resp.data);
		});
	}, []);
	return (
		<div className="App">
			{allposts.map((post) => {
				return (
					<div
						key={post.id}
						className="post">
						<div className="post-title">{post.title}</div>
						<div className="post-text">{post.postText}</div>
						<div className="post-username">@{post.username}</div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
