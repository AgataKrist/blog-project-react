import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoginPage } from "./components/pages/LoginPage";
import { RegistrationPage } from "./components/pages/RegistrationPage";
import { RegConfirm } from "./components/pages/RegConfirm";
import { ResetPassword } from "./components/pages/ResetPassword";
import { Success } from "./components/pages/Success";
import { ResetPasswordAnswer } from "./components/pages/ResetPassAnswer";
import { NewPassword } from "./components/pages/NewPassword";

function App() {
  return (
    <div className="App">
      <NewPassword />
    </div>
  );
}

export default App;
