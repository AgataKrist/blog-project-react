import React, { useCallback } from "react";
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
	const { mailReset } = useSelector(getResetPasswordState);
	const handleHistory = () => {
		history.push("resetPassAnswer");
	};
	const isMail = validateEmail(mailReset);

	const dispatch = useDispatch();

	const handleSetMail = useCallback(
		(value: string) => {
			dispatch(setMailResetPasswordAction(value));
		},
		[dispatch]
	);

	// useEffect(() => {
	// 	return () => {
	// 		// dispatch(setMailResetPasswordAction(""));
	// 	};
	// }, [dispatch]);
	return (
		<div>
			<SignTemplate
				main={
					<>
						<Title title={"Reset password"} />
						{description("20px")}
						<Input
							value={mailReset}
							isValid={isMail}
							onChange={handleSetMail}
							label={"Email"}
							img={ok}
							type={"text"}
						/>
						<Button
							disabled={!isMail}
							handleHistory={handleHistory}
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
