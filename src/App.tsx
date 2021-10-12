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
import { AllPosts } from "./components/pages/AllPosts";
import { MyPosts } from "./components/pages/MyPosts";
import { SelectedPost } from "./components/pages/SelectedPost";
import { SuccessResetPassword } from "./components/pages/SuccesResetPassword";

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
			<Route
				path="/resetPasswordConfirm"
				component={ResetPasswordAnswer}
			/>
			<Route path="/resetPass" component={ResetPassword} />
			<Route path="/activate/:uid/:token" exact component={Success} />
			<Route
				path="/succesResetpassword"
				exact
				component={SuccessResetPassword}
			/>
			<Route
				path="/password/reset/confirm/:uid/:token"
				exact
				component={NewPassword}
			/>
			<Route path="/registration" component={RegistrationPage} />
			<Route path="/allPosts" component={AllPosts} />
			<Route path="/myPosts" component={MyPosts} />
			<Route path="/posts/:id" component={SelectedPost} />
		</Switch>
	);
}

export default App;
