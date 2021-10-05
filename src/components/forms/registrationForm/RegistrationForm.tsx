import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationState } from "../../../core/selectors/appSelectors";
import {
	isPasswordConfirm,
	validateEmail,
	validateName,
	validatePassword,
} from "../../../helper";

import {
	setMailRegistrationAction,
	setPasswordRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setUserRegistrationAction,
	sendRegistrationDataAction,
} from "../../../core";
import { useHistory } from "react-router-dom";

export const RegistrationForm = () => {
	const [typePass, setTypePass] = useState("password");
	const [typePassConf, setTypePassConf] = useState("password");

	const { username, email, passwordConfirm, password, error, succes } =
		useSelector(getRegistrationState);

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (succes) {
			history.push("/RegistrationConfirm");
		}
		return () => {};
	}, [succes, history]);

	const sendData = () => {
		dispatch(
			sendRegistrationDataAction({
				username: username.value,
				password: password.value,
				email: email.value,
			})
		);
	};

	const handleShowPass = (type: string) => {
		setTypePass(type === "password" ? "text" : "password");
	};
	const handleShowPassConfirm = (type: string) => {
		setTypePassConf(type === "password" ? "text" : "password");
	};

	return (
		<>
			<div>
				<Input
					value={username.value}
					onChange={(text: string) => {
						dispatch(
							setUserRegistrationAction({
								value: text.trim(),
								isValid: validateName(text),
							})
						);
					}}
					isValid={username.isValid}
					label={"User Name"}
					img={ok}
					type={"text"}
					error={error?.username}
					isShowImg={
						username.isValid && username.value !== "" ? true : false
					}
				/>

				<Input
					value={email.value}
					onChange={(text: string) => {
						dispatch(
							setMailRegistrationAction({
								value: text.trim(),
								isValid: validateEmail(text),
							})
						);
					}}
					isValid={email.isValid}
					label={"Email"}
					img={ok}
					type={"text"}
					error={error?.email}
					isShowImg={
						email.isValid && email.value !== "" ? true : false
					}
				/>
				<Input
					value={password.value}
					handleShowPass={handleShowPass}
					onChange={(text: string) => {
						dispatch(
							setPasswordRegistrationAction({
								value: text.trim(),
								isValid: validatePassword(text),
							})
						);
					}}
					isValid={password.isValid}
					label={"Password"}
					img={show}
					type={typePass}
					error={error?.password}
					isShowImg={
						password.isValid && password.value !== "" ? true : false
					}
				/>
				<Input
					value={passwordConfirm.value}
					handleShowPass={handleShowPassConfirm}
					onChange={(text: string) => {
						dispatch(
							setPasswordConfirmRegistrationAction({
								value: text.trim(),
								isValid: isPasswordConfirm(
									text,
									password.value
								),
							})
						);
					}}
					isValid={passwordConfirm.value === password.value}
					label={"Confirm Password"}
					img={show}
					type={typePassConf}
					isShowImg={
						passwordConfirm.isValid && passwordConfirm.value !== ""
							? true
							: false
					}
				/>
			</div>
			<Button
				sendData={sendData}
				disabled={
					!(
						username.isValid &&
						username.value !== "" &&
						email.isValid &&
						email.value !== "" &&
						password.isValid &&
						password.value !== "" &&
						passwordConfirm.isValid &&
						passwordConfirm.value !== ""
					)
				}
				text={"Registration"}
			/>
			<SignAbout
				text={"If you have account, you can"}
				link={"Login"}
				to={"/login"}
			/>
		</>
	);
};
