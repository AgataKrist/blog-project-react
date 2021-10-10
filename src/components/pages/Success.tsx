import React, { useEffect } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sendRegistrationConfirmationAction } from "../../core";
import { getRegistrationState } from "../../core/selectors/appSelectors";

interface Isuccess {
	text: string;
}

export const Success = ({ text }: Isuccess) => {
	const { isPreloader, success } = useSelector(getRegistrationState);
	const history = useHistory();

	const params = useParams() as any;
	const dispatch = useDispatch();
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

	useEffect(() => {
		if (params?.uid && params?.token) {
			dispatch(sendRegistrationConfirmationAction(params));
		}
	}, [dispatch, params, params?.token, params?.uid]);
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
									success
										? "success"
										: "sorry, somethingWrong"
								}
							/>
							{description("20px")}
							{success && (
								<Button sendData={toLogin} text={"Login"} />
							)}
						</>
					}
				/>
			)}
		</div>
	);
};
