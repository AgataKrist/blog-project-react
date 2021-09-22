import React, { useEffect } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationState } from "./../../core/selectors/appSelectors";
import { useHistory } from "react-router-dom";
import {
	setMailRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setPasswordRegistrationAction,
} from "../../core";

export const RegConfirm = () => {
	const { mail } = useSelector(getRegistrationState);

	const history = useHistory();

	const handleHistory = () => {
		history.push("/");
	};

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(setPasswordRegistrationAction(""));
			dispatch(setPasswordConfirmRegistrationAction(""));
			dispatch(setMailRegistrationAction(""));
		};
	}, [dispatch]);

	const description = (mb: string) => {
		return (
			<div
				style={{ marginBottom: mb, textAlign: "center", width: "100%" }}
			>
				<p className={s.text}>
					Please activate your account with <br /> the activation link
					in the email
					<a href={`mailto:${mail}`} className={s.link}>
						{mail}
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
						<Button handleHistory={handleHistory} text={"Home"} />
					</>
				}
			/>
		</div>
	);
};
function dispatch(arg0: any) {
	throw new Error("Function not implemented.");
}

function setMaiPassword(arg0: string): any {
	throw new Error("Function not implemented.");
}
function setPassword(arg0: string): any {
	throw new Error("Function not implemented.");
}
