import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword, validateName } from "../../../helper";

import {
	setMailRegistrationAction,
	setPasswordRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setUserRegistrationAction,
} from "../../../core";
import { useHistory } from "react-router-dom";

export const RegistrationForm = () => {
	const [typePass, setTypePass] = useState("password");
	const [typePassConf, setTypePassConf] = useState("password");

	const { user, mail, passwordConfirm, password } =
		useSelector(getRegistrationState);

	const history = useHistory();

	const handleHistory = () => {
		history.push("/RegistrationConfirm");
	};

	const isUser = validateName(user);
	const isMail = validateEmail(mail);
	const isPassword = validatePassword(password);
	const isPasswordConfirm = () => {
		return !!(
			validatePassword(passwordConfirm) &&
			passwordConfirm.trim() === password.trim()
		);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(setUserRegistrationAction(""));
			dispatch(setPasswordRegistrationAction(""));
			dispatch(setPasswordConfirmRegistrationAction(""));
		};
	}, [dispatch]);

	const handleShowPass = (type: string) => {
		if (type === "password") {
			setTypePass("text");
		}
		if (type === "text") {
			setTypePass("password");
		}
	};
	const handleShowPassConfirm = (type: string) => {
		if (type === "password") {
			setTypePassConf("text");
		}
		if (type === "text") {
			setTypePassConf("password");
		}
	};

	return (
		<>
			<div>
				<Input
					value={user}
					// onChange={handlerSetUser}
					onChange={(text: string) => {
						dispatch(setUserRegistrationAction(text));
					}}
					isValid={isUser}
					label={"User Name"}
					img={ok}
					type={"text"}
				/>
				<Input
					value={mail}
					// onChange={handlerSetEmail}
					onChange={(text: string) => {
						dispatch(setMailRegistrationAction(text.trim()));
					}}
					isValid={isMail}
					label={"Email"}
					img={ok}
					type={"text"}
				/>
				<Input
					value={password}
					handleShowPass={handleShowPass}
					// onChange={handlerSetPassword}
					onChange={(text: string) => {
						dispatch(setPasswordRegistrationAction(text.trim()));
					}}
					isValid={isPassword}
					label={"Password"}
					img={show}
					type={typePass}
				/>
				<Input
					value={passwordConfirm}
					handleShowPass={handleShowPassConfirm}
					// onChange={handlerSetPasswordConfirm}
					onChange={(text: string) => {
						dispatch(
							setPasswordConfirmRegistrationAction(text.trim())
						);
					}}
					isValid={isPasswordConfirm()}
					label={"Confirm Password"}
					img={show}
					type={typePassConf}
				/>
			</div>
			<Button
				handleHistory={handleHistory}
				disabled={
					!(isUser && isMail && isPasswordConfirm() && isPassword)
				}
				text={"Login"}
			/>
			<SignAbout
				text={"If you have account, you can"}
				link={"Login"}
				to={"/login"}
			/>
		</>
	);
};
