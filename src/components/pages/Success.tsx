import React, { useEffect } from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { sendRegistrationConfirmationAction } from "../../core";

interface ISuccess {
	text: string;
}

export const Success = ({ text }: ISuccess) => {
	const params = useParams() as any;
	const dispatch = useDispatch();
	console.log(`params#####`, params);
	const description = (mb: string) => {
		return (
			<div style={{ marginBottom: mb }}>
				<p className={s.text}>{text}</p>
			</div>
		);
	};

	useEffect(() => {
		if (params?.uid && params?.token) {
			dispatch(sendRegistrationConfirmationAction(params));
		}
	}, [dispatch, params, params?.token, params?.uid]);
	return (
		<div>
			<SignTemplate
				main={
					<>
						<Title title={"Success"} />
						{description("20px")}
						<Button text={"Login"} />
					</>
				}
			/>
		</div>
	);
};
