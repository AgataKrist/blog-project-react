import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/pages/LoginPage";
import { RegistrationPage } from "./components/pages/RegistrationPage";
import { RegistrationConfirm } from "./components/pages/RegistrationConfirm";
import { ResetPassword } from "./components/pages/ResetPassword";
import { Success } from "./components/pages/Success";
import { ResetPasswordAnswer } from "./components/pages/ResetPassAnswer";
import { NewPassword } from "./components/pages/NewPassword";
import { HomePage } from "./components/pages/HomePage";

function App() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/reset" component={ResetPassword} />
			<Route path="/newPassword" component={NewPassword} />
			<Route
				path="/RegistrationConfirm"
				component={RegistrationConfirm}
			/>
			<Route path="/resetPassAnswer" component={ResetPasswordAnswer} />
			<Route path="/resetPass" component={ResetPassword} />
			<Route path="/success" component={Success} />
			<Route path="/registration" component={RegistrationPage} />
		</Switch>
	);
}

export default App;
