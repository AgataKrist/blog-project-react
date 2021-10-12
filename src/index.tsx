import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./core/store";
import { AuthService } from "./services/AuthService";
import { PostsService } from "./services/PostService";
import { UserService } from "./services/UserService";
import { PublicService } from "./services/PublicService";

AuthService.setCredentials({
	URL: "https://studapi.teachmeskills.by",
});
AuthService.prefix = "auth";

PostsService.setCredentials({
	URL: "https://studapi.teachmeskills.by",
});
PostsService.prefix = "blog/posts";

UserService.setCredentials({
	URL: "https://studapi.teachmeskills.by",
});
UserService.prefix = "auth";

PublicService.setCredentials({
	URL: "https://studapi.teachmeskills.by",
});
PublicService.prefix = "blog";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
