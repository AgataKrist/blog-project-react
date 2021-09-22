import React, { useCallback, useEffect, useState } from "react";
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
		history.push("/regConfirm");
	};

	const isUser = validateName(user);
	const isMail = validateEmail(mail);
	const isPassword = validatePassword(password);
	const isPasswordConfirm = () => {
		return !!(
			validatePassword(passwordConfirm) && passwordConfirm === password
		);
	};

	const dispatch = useDispatch();

	const handlerSetUser = useCallback(
		(value: string) => {
			dispatch(setUserRegistrationAction(value));
		},
		[dispatch]
	);

	const handlerSetPassword = useCallback(
		(value: string) => {
			dispatch(setPasswordRegistrationAction(value));
		},
		[dispatch]
	);

	const handlerSetPasswordConfirm = useCallback(
		(value: string) => {
			dispatch(setPasswordConfirmRegistrationAction(value));
		},
		[dispatch]
	);
	const handlerSetEmail = useCallback(
		(value: string) => {
			dispatch(setMailRegistrationAction(value));
		},
		[dispatch]
	);

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
					onChange={handlerSetUser}
					isValid={isUser}
					label={"User Name"}
					img={ok}
					type={"text"}
				/>
				<Input
					value={mail}
					onChange={handlerSetEmail}
					isValid={isMail}
					label={"Email"}
					img={ok}
					type={"text"}
				/>
				<Input
					value={password}
					handleShowPass={handleShowPass}
					onChange={handlerSetPassword}
					isValid={isPassword}
					label={"Password"}
					img={show}
					type={typePass}
				/>
				<Input
					value={passwordConfirm}
					handleShowPass={handleShowPassConfirm}
					onChange={handlerSetPasswordConfirm}
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
