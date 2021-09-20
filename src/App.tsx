import React from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/pages/LoginPage";
import { RegistrationPage } from "./components/pages/RegistrationPage";
import { RegConfirm } from "./components/pages/RegConfirm";
import { ResetPassword } from "./components/pages/ResetPassword";
import { Success } from "./components/pages/Success";
import { ResetPasswordAnswer } from "./components/pages/ResetPassAnswer";
import { NewPassword } from "./components/pages/NewPassword";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/newPassword" component={NewPassword} />
      <Route path="/regConfirm" component={RegConfirm} />
      <Route path="/resetPassAnswer" component={ResetPasswordAnswer} />
      <Route path="/resetPass" component={ResetPassword} />
      <Route path="/success" component={Success} />
      <Route path="/registration" component={RegistrationPage} />
    </Switch>
  );
}

export default App;
