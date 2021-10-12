import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import ok from "../../assets/ok.svg";
import { Input } from "../atoms/input";
import { SignAbout } from "../atoms/signAbout/SignAbout";
import { useDispatch, useSelector } from "react-redux";
import { getResetPasswordState } from "../../core/selectors/appSelectors";
import { validateEmail } from "../../helper";
import { setMailResetPasswordAction } from "../../core/actions/resetPasswordActions";
import { sendResetPasswordAction } from "../../core/actions/resetPasswordActions";

export const ResetPassword = () => {
	const description = (mb: string) => {
		return (
			<div style={{ marginBottom: mb }}>
				<p className={s.text}>
					Please enter the email <br /> for your account
				</p>
			</div>
		);
	};
	const history = useHistory();
	const { email, isSuccess } = useSelector(getResetPasswordState);
	const dispatch = useDispatch();
	const sendData = () => {
		dispatch(sendResetPasswordAction({ email: email.value }));
		// history.push("resetPassAnswer");
	};

	useEffect(() => {
		if (isSuccess) {
			history.push("/reset-password-confirm");
		}
	}, [isSuccess, history]);
	return (
		<div>
			<SignTemplate
				main={
					<>
						<Title title={"Reset password"} />
						{description("20px")}
						<Input
							value={email.value}
							isValid={email.isValid}
							onChange={(text: string) => {
								dispatch(
									setMailResetPasswordAction({
										value: text.trim(),
										isValid: validateEmail(text),
									})
								);
							}}
							label={"Email"}
							img={ok}
							isShowImg={
								email.isValid && email.value !== ""
									? true
									: false
							}
							type={"text"}
						/>
						<Button
							disabled={!(email.isValid && email.value !== "")}
							sendData={sendData}
							text={"Reset"}
						/>
						<SignAbout
							text={"Return to "}
							link={"Login"}
							to={"/login"}
						/>
					</>
				}
			/>
		</div>
	);
};
