import React, { useEffect, useState } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { Input } from "../atoms/input";
import { SignAbout } from "../atoms/signAbout/SignAbout";
import { useDispatch, useSelector } from "react-redux";
import { getResetPasswordState } from "../../core/selectors/appSelectors";
import { useHistory, useParams } from "react-router-dom";
import {
	sendResetPasswordConfirmationAction,
	setNewPasswordAction,
	setNewPasswordConfirmAction,
} from "../../core/actions/resetPasswordActions";
import { isPasswordConfirm, validatePassword } from "../../helper";
import show from "../../assets/show.svg";

export const NewPassword = () => {
	const [typePass, setTypePass] = useState("password");
	const [typePassConf, setTypePassConf] = useState("password");
	const description = (mb: string) => {
		return (
			<div style={{ marginBottom: mb }}>
				<p className={s.text}>Please enter new password</p>
			</div>
		);
	};
	const { isSuccess, newPassword, newPasswordConfirm } = useSelector(
		getResetPasswordState
	);
	const history = useHistory();

	const params = useParams() as any;
	const dispatch = useDispatch();
	useEffect(() => {
		if (isSuccess) {
			history.push("/succes-reset-password");
		}
	}, [isSuccess, history]);

	const sendData = () => {
		const data = {
			...params,
			new_password: newPassword.value,
		};
		if (params?.uid && params?.token) {
			dispatch(sendResetPasswordConfirmationAction(data));
		}
	};

	const handleShowPass = (type: string) => {
		setTypePass(type === "password" ? "text" : "password");
	};
	const handleShowPassConfirm = (type: string) => {
		setTypePassConf(type === "password" ? "text" : "password");
	};
	return (
		<div>
			<SignTemplate
				title={<Title title={"New password"} />}
				main={
					<>
						{description("20px")}
						<Input
							handleShowPass={handleShowPass}
							value={newPassword.value}
							onChange={(text: string) => {
								dispatch(
									setNewPasswordAction({
										value: text.trim(),
										isValid: validatePassword(text),
									})
								);
							}}
							isValid={newPassword.isValid}
							label={"Password"}
							img={show}
							type={typePass}
							isShowImg={
								newPassword.isValid && newPassword.value !== ""
									? true
									: false
							}
						/>
						<Input
							handleShowPass={handleShowPassConfirm}
							value={newPasswordConfirm.value}
							onChange={(text: string) => {
								dispatch(
									setNewPasswordConfirmAction({
										value: text.trim(),
										isValid: isPasswordConfirm(
											text,
											newPassword.value
										),
									})
								);
							}}
							isValid={newPasswordConfirm.isValid}
							label={"Password"}
							img={show}
							type={typePassConf}
							isShowImg={
								newPasswordConfirm.isValid &&
								newPasswordConfirm.value !== ""
							}
						/>
						<Button sendData={sendData} text={"Set password"} />
						<SignAbout
							text={"Return to "}
							to={"Login"}
							link={"Login"}
						/>
					</>
				}
			/>
		</div>
	);
};
