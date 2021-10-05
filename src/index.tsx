import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./core/store";
import { AuthService } from "./services/AuthService";

AuthService.setCredentials({
	URL: "https://studapi.teachmeskills.by",
});
AuthService.prefix = "auth";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
