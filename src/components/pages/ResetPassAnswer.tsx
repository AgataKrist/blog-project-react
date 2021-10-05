import React, { useEffect } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getResetPasswordState } from "../../core/selectors/appSelectors";
import { useHistory } from "react-router-dom";
import { setMailResetPasswordAction } from "../../core/actions/resetPasswordActions";

export const ResetPasswordAnswer = () => {
	const { mailReset } = useSelector(getResetPasswordState);
	const history = useHistory();
	const dispatch = useDispatch();

	const sendData = () => {
		history.push("/");
	};
	const description = (mb: string) => {
		return (
			<div style={{ marginBottom: mb, textAlign: "center" }}>
				<p className={s.text}>
					You will receive an email
					<a href={`mailto:${mailReset}`} className={s.link}>
						{mailReset}
					</a>
				</p>
				<p className={s.text}>with a link to reset your password</p>
			</div>
		);
	};
	useEffect(() => {
		return () => {
			dispatch(setMailResetPasswordAction(""));
		};
	}, [dispatch]);

	return (
		<div>
			<SignTemplate
				main={
					<>
						<Title title={"Reset Password"} />
						{description("20px")}
						<Button sendData={sendData} text={"Home"} />
					</>
				}
			/>
		</div>
	);
};
