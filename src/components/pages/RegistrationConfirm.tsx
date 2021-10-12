import React, { useEffect } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationState } from "../../core/selectors/appSelectors";
import { useHistory } from "react-router";
import {
	sendRegistrationDataSuccessAction,
	setPasswordConfirmRegistrationAction,
	setPasswordRegistrationAction,
	setUserRegistrationAction,
} from "../../core/actions";

export const RegistrationConfirm = () => {
	const { email } = useSelector(getRegistrationState);
	const history = useHistory();
	const dispatch = useDispatch();
	const handlerChangePage = () => {
		history.push("/");
	};
	useEffect(() => {
		dispatch(
			setUserRegistrationAction({
				value: "",
				isValid: true,
			})
		);
		dispatch(
			setPasswordRegistrationAction({
				value: "",
				isValid: true,
			})
		);
		dispatch(
			setPasswordConfirmRegistrationAction({
				value: "",
				isValid: true,
			})
		);
		dispatch(sendRegistrationDataSuccessAction(false));
		return () => {};
	}, [dispatch]);

	const description = (mb: string) => {
		return (
			<div
				style={{ marginBottom: mb, textAlign: "center", width: "100%" }}
			>
				<p className={s.text}>
					Please activate your account with <br /> the activation link
					in the email
					<a href={`mailto:${email}`} className={s.link}>
						{email.value}
					</a>
				</p>
				<p className={s.text}>Please, check your email</p>
			</div>
		);
	};
	return (
		<div>
			<SignTemplate
				main={
					<>
						<Title title={"Registartion Confirmation"} />
						{description("20px")}
						<Button sendData={handlerChangePage} text={"Home"} />
					</>
				}
			/>
		</div>
	);
};
