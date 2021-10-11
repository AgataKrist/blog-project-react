import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword } from "../../../helper";
import {
	sendLoginDataAction,
	sendLoginDataErrorAction,
	setMailLoginAction,
	setPasswordLoginAction,
} from "../../../core";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
	const [typePass, setTypePass] = useState("password");

	const { email, password, error, isSuccess } = useSelector(getLoginState);
	const history = useHistory();

	const isMail = validateEmail(email.value);
	const isPassword = validatePassword(password.value);
	useEffect(() => {
		if (isSuccess) {
			history.push("/");
			dispatch(
				setMailLoginAction({
					value: "",
					isValid: true,
				})
			);
			dispatch(
				setPasswordLoginAction({
					value: "",
					isValid: true,
				})
			);
		}
		return () => {};
	}, [history, isSuccess]);

	const dispatch = useDispatch();
	const sendData = () => {
		if (isMail && isPassword) {
			dispatch(
				sendLoginDataAction({
					email: email.value,
					password: password.value,
				})
			);
		}
	};

	useEffect(() => {
		if (error) {
			dispatch(
				setMailLoginAction({
					value: email.value,
					isValid: false,
				})
			);
			dispatch(
				setPasswordLoginAction({
					value: password.value,
					isValid: false,
				})
			);
		}
	}, [
		dispatch,
		email.value,
		password.value,
		email.isValid,
		password.isValid,
		error,
	]);

	const handleShowPass = (type: string) => {
		setTypePass(type === "password" ? "text" : "password");
	};
	return (
		<>
			<div>
				<Input
					value={email.value}
					onChange={(text: string) => {
						dispatch(
							setMailLoginAction({
								value: text.trim(),
								isValid: validateEmail(text),
							})
						);
						dispatch(sendLoginDataErrorAction(null));
					}}
					isValid={email.isValid}
					label={"Email"}
					img={ok}
					type={"text"}
					isShowImg={
						email.isValid && email.value !== "" ? true : false
					}
				/>
				<Input
					value={password.value}
					onChange={(text: string) => {
						dispatch(
							setPasswordLoginAction({
								value: text.trim(),
								isValid: validatePassword(text),
							})
						);
						dispatch(sendLoginDataErrorAction(null));
					}}
					isValid={password.isValid}
					label={"Password"}
					img={show}
					type={typePass}
					isShowImg={
						password.isValid && password.value !== "" ? true : false
					}
					handleShowPass={handleShowPass}
				/>
			</div>
			{error}
			<Button
				sendData={sendData}
				disabled={!(isMail && isPassword)}
				text={"Login"}
			/>
			<SignAbout
				text={"MAIL:homep63238@xeiex.com"}
				link={"password: HardPassword"}
				to={"/reset"}
			/>
		</>
	);
};
