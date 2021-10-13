import React, { useEffect } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sendRegistrationConfirmationAction } from "../../core";
import {
	getRegistrationState,
	getResetPasswordState,
} from "../../core/selectors/appSelectors";
import { sendResetPasswordConfirmationAction } from "../../core/actions/resetPasswordActions";

interface ISuccess {
	text: string;
}

export const SuccessResetPassword = ({ text }: ISuccess) => {
	const { isPreloader, isSuccess } = useSelector(getResetPasswordState);
	const history = useHistory();

	const description = (mb: string) => {
		return (
			<div style={{ marginBottom: mb }}>
				<p className={s.text}>{text}</p>
			</div>
		);
	};
	const toLogin = () => {
		history.push("/login");
	};

	return (
		<div>
			{isPreloader ? (
				<div className={s.container}>
					<div className={s.circle}></div>
					<div className={s.circle}></div>
					<div className={s.circle}></div>
					<div className={s.circle}></div>
				</div>
			) : (
				<SignTemplate
					main={
						<>
							<Title
								title={
									isSuccess
										? "success, you pasword changed"
										: "sorry, somethingWrong"
								}
							/>
							{description("20px")}
							{isSuccess && (
								<Button sendData={toLogin} text={"Login"} />
							)}
						</>
					}
				/>
			)}
		</div>
	);
};
