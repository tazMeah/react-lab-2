import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import SocialPosts from "./components/SocialPosts";
import PostInList from "./components/PostInList";
import Post from "./components/Post";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<SocialPosts />
		</div>
	);
}

export default App;
